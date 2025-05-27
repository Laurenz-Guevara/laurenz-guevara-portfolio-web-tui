import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import TanstackProvider from "@/components/TanstackProvider";

export const metadata: Metadata = {
  title: "Laurenz Guevara",
  description:
    "Front-end Developer with Startup, Agency, and in-house experience across multiple tech stacks in all types of industries. Additionally freelance during my free time, reaching out and pitching my services to businesses. I code frequently in my own time and currently upskilling into Go. Very passionate about my developer workflow and optimisation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <TanstackProvider>
          <main className="min-h-screen flex flex-col mb-[37px] xs:mb-0">
            <div className="flex-1 flex flex-col">
              <Navigation />
              {children}
            </div>
            <Footer />
          </main>
        </TanstackProvider>
      </body>
    </html>
  );
}
