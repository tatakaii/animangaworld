import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AniMangaWorld",
  description:
    "A site for all the content/new related to anime, manga and animemanga news",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen px-5 sm:px-10 md:px-20 bg-gradient-to-b from-pink-500 to-yellow-500">
          {children}
        </div>
      </body>
    </html>
  );
}
