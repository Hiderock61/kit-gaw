import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kit Gaw",
  description:
    "趣味・経験・生活スタイルから、気になる部屋を自分で歩くコミュニティSNS。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
