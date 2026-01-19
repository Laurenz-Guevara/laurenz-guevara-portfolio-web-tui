import Link from "next/link";

export default function Contact() {
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

      <div className="mb-6">
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
              />
            </div>
            <div>
              <p className="text-blue mb-1">Email:</p>
              <input
                type="email"
                className="w-full border border-surface-1 p-2 focus:outline-none focus:border-mauve"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <p className="text-blue mb-1">Message:</p>
              <textarea
                className="w-full border border-surface-1 p-2 h-32 focus:outline-none focus:border-mauve"
                placeholder="Type your message here..."
              >
              </textarea>
            </div>
            <button
              disabled={true}
              className="bg-surface-0/70 hover:bg-surface-1 text-green px-4 py-2 border border-surface-1 hover:cursor-pointer"
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
