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
    port,
    secure: port === 465, // SSL somente na 465 — 587 usa STARTTLS
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

    // 🔹 Conectar SOMENTE na porta 587
    console.log("Tentando conectar na porta 587 (TLS/STARTTLS)...");

    const transporter = createTransporter(587);

    try {
      await transporter.verify();
      console.log("✅ Conexão SMTP verificada com sucesso na porta 587");
    } catch (err) {
      console.error("❌ Erro ao conectar na porta 587:", err);

      return NextResponse.json(
        {
          error: "Erro de conexão SMTP usando a porta 587.",
          details: err instanceof Error ? err.message : "Erro desconhecido",
        },
        { status: 500 }
      );
    }

    // 🔹 Envia o email com o currículo anexado
    console.log("Enviando email...");
    console.log("Arquivo:", file.name, "Tamanho:", buffer.length, "bytes");

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

    const errorMessage =
      error instanceof Error ? error.message : "Erro desconhecido";
    const errorCode = (error as any)?.code;
    const errorResponseCode = (error as any)?.responseCode;
    const errorResponse = (error as any)?.response;

    console.error("Detalhes completos do erro:", {
      message: errorMessage,
      code: errorCode,
      responseCode: errorResponseCode,
      response: errorResponse,
      stack: error instanceof Error ? error.stack : undefined,
    });

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
