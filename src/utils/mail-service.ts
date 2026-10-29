import { createTransport } from "nodemailer";

export const transporter = createTransport({
  host: "smtp.titan.email",
  port: 465,
  secure: true,
  auth: {
    user: "ti@redeservpro.com.br",
    pass: "K4hvdq9tj9/",
  },
});