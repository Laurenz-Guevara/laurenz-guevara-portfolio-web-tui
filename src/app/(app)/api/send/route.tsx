import nodemailer from "nodemailer";
import { render } from '@react-email/components';
import ContactEmailTemplate from "@/email-templates/ContactEmailTemplate"

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

async function verifyCaptcha(token: string): Promise<boolean> {
  const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `secret=${process.env.CAPTCHA_SECRET_KEY}&response=${token}`,
  })

  const data = await res.json()
  if (!data.success || data.score < 0.5) {
    console.log("Not Data Success or Score above / equal to  0.5 during captcha check", data)
  }
  return data.success && data.score >= 0.5
}


export async function POST(request: Request) {
  try {
    const { name, email, message, captchaToken }: { name: string; email: string; message: string; captchaToken: string; } = await request.json();

    const isHuman = await verifyCaptcha(captchaToken!)
    if (!isHuman) {
      return new Response(
        JSON.stringify({ error: "reCAPTCHA verification failed" }),
        { status: 400 }
      )
    }

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

