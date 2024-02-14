import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | next movie",
    default: "next movie",
  },
  description: "Next.js is best framework in the world",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
