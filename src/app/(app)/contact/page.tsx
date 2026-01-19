"use client"

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

import Link from "next/link";

export default function Contact() {
  const [rateLimitClient, setRateLimitClient] = useState(false);
  const [isSending, setIsSending] = useState(false);

  type FormData = {
    name: string;
    email: string;
    message: string;
  };

  const schema = z.object({
    name: z.string().min(1).max(64),
    email: z.email().min(1).max(64),
    message: z.string().min(1).max(200),
  });

  const {
    register,
    handleSubmit,
    formState: { isSubmitSuccessful },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  async function submitForm(formData: FormData) {
    setIsSending(true);
    setRateLimitClient(true);

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: process.env.SMTP_RECIEVER,
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Error sending email:", errorText);
        setIsSending(false)
        return;
      }

      const data = await response.json();
      console.log("Email sent:", data);
    } catch (err) {
      // TODO: ADD TOAST
      console.error("Fetch error:", err);
    }

    setTimeout(function () {
      setRateLimitClient(false);
    }, 3000);
  }


  return (
    <section className="p-4">
      <div className="mb-6">
        <p className="text-yellow mb-2">CONTACT INFOMATION</p>
        <p className="text-lavender mb-1">
          $ cat resume/contact.txt
        </p>
      </div>

      <div className="border border-surface-1 p-4 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-blue mb-1">Email</p>
            <Link href="mailto:laurenz.guevara@gmail.com">
              laurenz.guevara@gmail.com
            </Link>
          </div>
          <div>
            <p className="text-blue mb-1">Location</p>
            <p>United Kingdom</p>
          </div>
          <div>
            <p className="text-blue mb-1">GitHub</p>
            <Link
              href="https://github.com/Laurenz-Guevara"
              target="_blank"
            >
              github.com/Laurenz-Guevara
            </Link>
          </div>
          <div>
            <p className="text-blue mb-1">LinkedIn</p>
            <Link
              href="https://www.linkedin.com/in/laurenzguevara"
              target="_blank"
            >
              linkedin.com/in/laurenzguevara
            </Link>
          </div>
        </div>
      </div>
      <form className="mb-6" onSubmit={handleSubmit(submitForm)}>
        <p className="text-lavender mb-2">
          $ nvim contact/message.txt
        </p>
        <div className="border border-surface-1 p-4">
          <p className="mb-4">
            Leave a message and I&apos;ll get back to you as soon as possible.
          </p>
          <div className="space-y-4">
            <div>
              <p className="text-blue mb-1">Name:</p>
              <input
                type="text"
                className="w-full border border-surface-1 p-2 focus:outline-none focus:border-mauve"
                placeholder="Enter your name"
                {...register("name")}
              />
            </div>
            <div>
              <p className="text-blue mb-1">Email:</p>
              <input
                type="email"
                className="w-full border border-surface-1 p-2 focus:outline-none focus:border-mauve"
                placeholder="Enter your email"
                {...register("email")}
              />
            </div>
            <div>
              <p className="text-blue mb-1">Message:</p>
              <textarea
                className="w-full border border-surface-1 p-2 h-32 focus:outline-none focus:border-mauve"
                placeholder="Type your message here..."
                {...register("message")}
              >
              </textarea>
            </div>
            {isSubmitSuccessful && rateLimitClient && (
              <div className="text-green">
                <p>Your message has been sent sucessfully</p>
              </div>
            )}
            <button
              disabled={isSending || rateLimitClient}
              className="bg-surface-0/70 hover:bg-surface-1 text-green px-4 py-2 border border-surface-1 hover:cursor-pointer"
            >
              Send Message
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}
