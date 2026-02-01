import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const authEmail = process.env.AUTH_EMAIL;
const authPass = process.env.AUTH_PASS;
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: authEmail,
    pass: authPass,
  },
});

export async function sendEmail(to, subject, htmlContent) {
  try {
    return await transporter.sendMail({
      from: authEmail,
      to,
      subject,
      html: htmlContent,
    });
  } catch (err) {
    console.error("EMAIL ERROR:", err.message);
    return null;
  }
}
