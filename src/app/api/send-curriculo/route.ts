/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Função auxiliar para criar transporter com diferentes configurações
function createTransporter(port: 465 | 587) {
  // Validação das variáveis de ambiente
  const smtpHost = process.env.SMTP_HOST || "smtp.titan.email";
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;

  if (!smtpUser || !smtpPass) {
    throw new Error(
      "Variáveis de ambiente SMTP_USER e SMTP_PASS não configuradas. Verifique o arquivo .env.local"
    );
  }

  return nodemailer.createTransport({
    host: smtpHost,
    port: port,
    secure: port === 465, // true para 465 (SSL), false para 587 (TLS)
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });
}

export async function POST(request: NextRequest) {
  try {
    // Processa o FormData da requisição
    const formData = await request.formData();
    const file = formData.get("curriculo") as File;

    if (!file) {
      return NextResponse.json(
        { error: "Nenhum arquivo recebido" },
        { status: 400 }
      );
    }

    // Converte o arquivo para buffer
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // 🔹 Tenta conectar com porta 465 primeiro, depois 587 se falhar
    let transporter = createTransporter(465);
    let connectionVerified = false;
    let lastError: any = null;

    console.log("Tentando conectar na porta 465 (SSL)...");
    try {
      await transporter.verify();
      console.log("✅ Conexão SMTP verificada com sucesso na porta 465");
      connectionVerified = true;
    } catch (verifyError) {
      console.error("❌ Erro na porta 465:", verifyError);
      lastError = verifyError;

      // Tenta porta 587 (TLS)
      console.log("Tentando conectar na porta 587 (TLS)...");
      transporter = createTransporter(587);
      try {
        await transporter.verify();
        console.log("✅ Conexão SMTP verificada com sucesso na porta 587");
        connectionVerified = true;
      } catch (verifyError587) {
        console.error("❌ Erro na porta 587:", verifyError587);
        lastError = verifyError587;
      }
    }

    if (!connectionVerified) {
      console.error("❌ Falha na conexão SMTP em ambas as portas");

      // Log detalhado do erro
      if (lastError instanceof Error) {
        console.error("Mensagem de erro:", lastError.message);
        console.error("Código de erro:", (lastError as any).code);
        console.error("Comando SMTP:", (lastError as any).command);
      }

      return NextResponse.json(
        {
          error:
            "Erro na conexão com o servidor de email. Verifique as credenciais.",
          details:
            lastError instanceof Error
              ? lastError.message
              : "Erro desconhecido",
          code: (lastError as any)?.code || "UNKNOWN",
        },
        { status: 500 }
      );
    }

    // 🔹 Envia o email com o currículo anexado
    // IMPORTANTE: O email 'from' deve ser o mesmo do email autenticado ou um alias válido
    console.log("Enviando email...");
    console.log("Arquivo:", file.name, "Tamanho:", buffer.length, "bytes");

    // Obtém emails das variáveis de ambiente ou usa valores padrão
    const emailFrom = process.env.EMAIL_FROM || process.env.SMTP_USER;
    const emailTo = process.env.EMAIL_TO || process.env.SMTP_USER;
    const emailReplyTo = process.env.EMAIL_REPLY_TO || emailFrom;

    if (!emailFrom || !emailTo) {
      throw new Error(
        "Variáveis de ambiente EMAIL_FROM e EMAIL_TO não configuradas. Verifique o arquivo .env.local"
      );
    }

    const mailResult = await transporter.sendMail({
      from: emailFrom,
      replyTo: emailReplyTo,
      to: emailTo,
      subject: process.env.EMAIL_SUBJECT_VagaVendedorExterno,
      text: `Inscrição realizada com sucesso.\n\nArquivo anexado: ${
        file.name || "curriculo.pdf"
      }`,
      html: `
        <p>Inscrição realizada com sucesso.</p>
        <p><strong>Arquivo anexado:</strong> ${file.name || "curriculo.pdf"}</p>
      `,
      attachments: [
        {
          filename: file.name || "curriculo.pdf",
          content: buffer,
        },
      ],
    });

    console.log(
      "✅ Email enviado com sucesso! MessageId:",
      mailResult.messageId
    );

    return NextResponse.json({
      success: true,
      message: "Currículo enviado com sucesso!",
    });
  } catch (error) {
    console.error("❌ Erro ao enviar currículo:", error);

    // Retorna mensagem de erro mais detalhada para debug
    const errorMessage =
      error instanceof Error ? error.message : "Erro desconhecido";
    const errorStack = error instanceof Error ? error.stack : undefined;
    const errorCode = (error as any)?.code;
    const errorResponse = (error as any)?.response;
    const errorResponseCode = (error as any)?.responseCode;

    console.error("Detalhes completos do erro:", {
      message: errorMessage,
      code: errorCode,
      responseCode: errorResponseCode,
      response: errorResponse,
      stack: errorStack,
    });

    // Mensagem de erro mais específica baseada no tipo de erro
    let userMessage = "Erro ao enviar o currículo. Tente novamente.";
    if (errorCode === "EAUTH") {
      userMessage = "Erro de autenticação. Verifique as credenciais do email.";
    } else if (errorCode === "ECONNECTION") {
      userMessage = "Erro de conexão com o servidor de email.";
    } else if (errorCode === "ETIMEDOUT") {
      userMessage = "Tempo de conexão esgotado. Tente novamente.";
    }

    return NextResponse.json(
      {
        error: userMessage,
        details:
          process.env.NODE_ENV === "development" ? errorMessage : undefined,
        code: errorCode || "UNKNOWN",
      },
      { status: 500 }
    );
  }
}
