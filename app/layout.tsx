import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gunwoo Kim — Theoretical Computer Science",
  description:
    "Gunwoo Kim is a graduate researcher at KAIST and IBS DIMAG working in structural graph theory, parameterized complexity, and graph algorithms.",
  icons: {
    icon: "/gunwoo-kim.jpeg",
    shortcut: "/gunwoo-kim.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
