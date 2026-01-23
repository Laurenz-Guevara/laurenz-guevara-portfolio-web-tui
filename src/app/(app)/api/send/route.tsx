import nodemailer from "nodemailer";
import { render } from '@react-email/components';
import ContactEmailTemplate from "@/email-templates/ContactEmailTemplate"

const transporter = nodemailer.createTransport({
  host: "email-smtp.eu-west-2.amazonaws.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(request: Request) {
  try {
    const { name, email, message }: {
      name: string;
      email: string;
      message: string;
    } = await request.json();

    const emailHtml = await render(
      <ContactEmailTemplate name={name} email={email} message={message} />
    );

    await transporter.sendMail({
      from: "Laurenz Guevara Portfolio <contact@laurenzguevara.com>",
      to: process.env.SMTP_RECIEVER,
      subject: `Portoflio - A new message has been left by ${name}`,
      html: emailHtml
    });

    return new Response(JSON.stringify({
      message: "Email sent successfully",
    }), { status: 200 });
  } catch (err: unknown) {
    console.log(err)
    return new Response(
      JSON.stringify({ error: "Failed to send email" }),
      { status: 500 }
    );
  }
}

