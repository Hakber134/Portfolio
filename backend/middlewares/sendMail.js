import { createTransport } from "nodemailer";

export const sendMail = async (userMessage) => {
  const transporter = createTransport({
    host: process.env.SMPT_HOST,
    port: 2525,
    auth: {
      user: "57f16c52e7a1fc",
      pass: "96f1c4cf8ca6fe",
    },
  });
};
