import type { Metadata } from 'next'
import { Philosopher } from "next/font/google";
import "./globals.css";

const philosopher = Philosopher({ subsets: ["vietnamese"], weight: "400" });

export const metadata: Metadata = {
   title: "Blake Houston Pond",
   description: "The Journey Begins",
};

export default function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <html lang="en">
         <body className={philosopher.className}>{children}</body>
      </html>
   );
}
