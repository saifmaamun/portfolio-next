import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Saif Maamun",
  description: "Everything You need to know about Saif Maamun",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <ParticlesBackground /> */}

        <Navbar />
        <div className="min-h-screen flex flex-col justify-between">
          <main className="relative z-10 container mx-auto px-4 flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
