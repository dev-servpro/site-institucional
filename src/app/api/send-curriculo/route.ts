import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

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

    // 🔹 Configuração do Nodemailer
    const transporter = nodemailer.createTransport({
      host: "smtp.titan.email",
      port: 465, // 465 = SSL, 587 = TLS
      secure: true, // true se usar 465, false se 587
      auth: {
        user: "rh.adm@redeservpro.com.br",
        pass: "Servpro@182", // ideal usar .env.local
      },
    });

    // 🔹 Envia o email com o currículo anexado
    await transporter.sendMail({
      from: "rh.adm@redeservpro.com.br",
      to: "rh.adm@redeservpro.com.br",
      subject: "REDE SERVPRO - VENDEDOR EXTERNO",
      text: `Inscrição realizada com sucesso.`,
      attachments: [
        {
          filename: file.name || "curriculo.pdf", // nome do arquivo
          content: buffer, // aqui usamos o buffer
        },
      ],
    });

    return NextResponse.json({
      success: true,
      message: "Currículo enviado com sucesso!",
    });
  } catch (error) {
    console.error("Erro ao enviar currículo:", error);
    return NextResponse.json(
      {
        error: "Erro ao enviar o currículo. Tente novamente.",
      },
      { status: 500 }
    );
  }
}
