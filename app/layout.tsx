import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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
  title: "Investment calculator",
  description: "Portfolio investment calculator",
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
        <div
          data-theme="halloween"
          className="flex flex-col  bg-[url('/investment.jpg')] max-md:bg-[url('/investment-mobile.jpg')] bg-cover bg-center"
        >
          <div className="flex flex-col gap-5 py-12 px-2 items-center bg-black/50 w-full min-h-[100svh] font-poppins">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
