import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "個人タクシー試験対策 | 過去問ベースの徹底解説で最短合格",
  description:
    "残り日数・弱点・出題傾向をすべて分析し、合格までの最短ルートを作る個人タクシー法令試験対策アプリ。曖昧な問題も推定根拠付きで徹底解説。合格保証付きプレミアムプランあり。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
