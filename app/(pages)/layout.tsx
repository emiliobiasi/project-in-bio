import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

import { Red_Hat_Display } from "next/font/google";

const redHatDisplay = Red_Hat_Display({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <meta
          name="google-site-verification"
          content="YpGup2GRkDYCt9-yAyiwTJeRZnv61-zx8Uw766kOeSM"
        />
      </head>
      <body
        className={`${redHatDisplay.className} bg-background-primary text-content-body antialiased`}
      >
        {children}
      </body>
      <GoogleAnalytics gaId="G-P2PTEFKHR6" />
    </html>
  );
}
