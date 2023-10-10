import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Beacon - Your Global Advisory Partner For Business Success",
  description:
    "Beacon is your global business advisory partner who offers you a range of services that enable your business growth and ultimate business transformation. We provide a plethora of services like Business Incorporation, Digital Marketing, Technology, Finance and Accounting, Audit & Taxation and Business Consulting services.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/GREEN.svg"
          type="image/svg+xml"
          sizes="16x16 32x32 48x48"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
