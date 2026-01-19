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

    const info = await transporter.sendMail({
      from: "contact@laurenzguevara.com",
      to: process.env.SMTP_RECIEVER,
      subject: "Portoflio - A new message has been left",
      text: `Name: ${name}, Email: ${email}, Message: ${message}`,
    });

    return new Response(JSON.stringify({
      message: "Email sent successfully",
      envelope: info.envelope,
      messageId: info.messageId,
    }), { status: 200 });
  } catch (err: unknown) {
    console.error(err);

    let errorMessage = "Failed to send email";

    if (err instanceof Error) {
      errorMessage = err.message;
    } else if (typeof err === 'string') {
      errorMessage = err;
    }

    return new Response(
      JSON.stringify({ error: errorMessage }),
      { status: 500 }
    );
  }
}

