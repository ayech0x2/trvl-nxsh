import Header from "@/components/ui/header";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TRVL NXSH",
  description: "TRVL NXSH",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased bg-white`}>
        <header>
          <Header />
        </header>
        {children}
      </body>
    </html>
  );
}
