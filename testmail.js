import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

async function main() {
  let transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  let info = await transporter.sendMail({
    from: process.env.MAIL_FROM,
    to: process.env.MAIL_TO,
    subject: "SMTP Test from Localhost",
    text: "If you see this, Gmail SMTP works!",
  });

  console.log("Message sent:", info.messageId);
}

main().catch(console.error);
