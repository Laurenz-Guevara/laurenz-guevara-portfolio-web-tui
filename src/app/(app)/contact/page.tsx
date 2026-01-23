"use client"

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

import Link from "next/link";
import { cn } from "@/lib/utils";

enum Dispatch {
  Sending = "Sending",
  Success = "Success",
  Failed = "Failed",
  Waiting = "Waiting"
}

export default function Contact() {
  const [rateLimitClient, setRateLimitClient] = useState(false);
  const [dispatchStage, setDispatchStage] = useState<Dispatch>(Dispatch.Waiting)

  type FormData = {
    name: string;
    email: string;
    message: string;
  };

  const schema = z.object({
    name: z.string().min(1, { message: "You must enter a name." }).max(64, { message: "Name cannot be longer than 32 characters." }),
    email: z.email({ message: "Please enter a valid email address." }).min(1, { message: "Email must be longer than 1 character." }).max(64, { message: "Name cannot be longer than 32 characters." }),
    message: z.string().min(1, { message: "You must enter a message." }).max(1000, { message: "Message cannot be longer than 1000 characters." }),
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { isSubmitSuccessful: formConditionsMet, errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });
  const messageValue = watch("message") || "";

  async function submitForm(formData: FormData) {
    setDispatchStage(Dispatch.Sending);
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
        setDispatchStage(Dispatch.Failed)
        return;
      }

      setDispatchStage(Dispatch.Success)
    } catch {
      setDispatchStage(Dispatch.Failed)
    } finally {
      setTimeout(function () {
        setRateLimitClient(false);
        setDispatchStage(Dispatch.Waiting)
      }, 3000);
    }
  }

  return (
    <section className="p-4">
      <div className="mb-6">
        <p className="text-yellow mb-2">CONTACT INFOMATION</p>
        <p className="text-lavender mb-1">
          $ cat contact/details.txt
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
              {errors.name && (
                <div className="text-red pt-2">
                  <p>{errors.name.message}</p>
                </div>
              )}
            </div>
            <div>
              <p className="text-blue mb-1">Email:</p>
              <input
                type="email"
                className="w-full border border-surface-1 p-2 focus:outline-none focus:border-mauve"
                placeholder="Enter your email"
                {...register("email")}
              />
              {errors.email && (
                <div className="text-red pt-2">
                  <p>{errors.email.message}</p>
                </div>
              )}
            </div>
            <div>
              <p className="text-blue mb-1">Message:</p>
              <textarea
                className="w-full border border-surface-1 p-2 h-32 focus:outline-none focus:border-mauve"
                placeholder="Type your message here..."
                {...register("message")}
              />
              <div className="flex justify-between">
                <div className="text-red">
                  {errors.message && (
                    <p>{errors.message.message}</p>
                  )}
                </div>
                <div className="text-sm text-right">
                  <span className={cn(messageValue.length > 1000 && "text-red")}>{messageValue.length}</span>/1000
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <button
                disabled={dispatchStage == Dispatch.Sending || rateLimitClient}
                className="bg-surface-0/70 hover:bg-surface-1 text-green px-4 py-2 border border-surface-1 hover:cursor-pointer disabled:cursor-default disabled:opacity-50"
              >
                Send Message
              </button>
              {formConditionsMet && rateLimitClient && dispatchStage !== Dispatch.Failed && (
                <div className="text-green pl-4">
                  <p>Your message has been sent sucessfully</p>
                </div>
              )}
              {dispatchStage === Dispatch.Failed && (
                <div className="text-red pl-4">
                  <p>Your message has not been sent sucessfully</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </form>
    </section>
  );
}
