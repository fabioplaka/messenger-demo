import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ToastContext from "./context/ToastContext";
import { AuthContext } from "./context/AuthContext";
import { UIActiveStatus } from "./components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Messenger Demo",
  description: "This is a Messenger Demo app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContext>
          <ToastContext />
          <UIActiveStatus />
          {children}
        </AuthContext>
      </body>
    </html>
  );
}
