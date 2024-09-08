import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";
import Container from "@/components/Container";
import Header from "@/components/Header";

const opensans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | BookMyTurf",
    default: "Home | BookMyTurf",
  },
  description: "BookMyTurf is a platform to book turfs for sports events.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${opensans.className} bg-background text-accent-foreground relative flex min-h-screen flex-col antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Header />
          <Container>{children}</Container>
        </ThemeProvider>
      </body>
    </html>
  );
}
