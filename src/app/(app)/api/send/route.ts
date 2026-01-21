import nodemailer from "nodemailer";

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
    const { name, email, message } = await request.json();

    await transporter.sendMail({
      from: "Laurenz Guevara Portfolio <contact@laurenzguevara.com>",
      to: process.env.SMTP_RECIEVER,
      subject: `Portoflio - A new message has been left by ${name}`,
      text: `Name: ${name}, Email: ${email}, Message: ${message}`,
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

