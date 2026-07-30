import type { Metadata } from "next";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "variations × Next.js",
  description: "Example App Router project using variations",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          fontFamily: "Georgia, 'Times New Roman', serif",
          background:
            "radial-gradient(circle at top left, #f3efe6, #e7eef2 45%, #dfe8e1)",
          minHeight: "100vh",
          color: "#1c1c1c",
        }}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
