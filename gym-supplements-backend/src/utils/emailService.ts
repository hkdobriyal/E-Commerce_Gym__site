// src/utils/emailService.ts
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendOrderConfirmation = async (userEmail: string, orderId: number) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: userEmail,
    subject: 'Order Confirmation',
    text: `Your order with ID ${orderId} has been placed successfully.`,
  };

  await transporter.sendMail(mailOptions);
};
