import "./globals.css";
import { Inter } from "next/font/google";
import linkImage from "../../public/linkImage.png"
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Beacon - Your Global Advisory Partner For Business Success",
  description:
    "Beacon is your global business advisory partner who offers you a range of services that enable your business growth and ultimate business transformation. We provide a plethora of services like Business Incorporation, Digital Marketing, Technology, Finance and Accounting, Audit & Taxation and Business Consulting services.",
};

export default function RootLayout({ children }) {
  const router = useRouter();
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://bmcglobal.co"  || "https://beacon-alpha.vercel.app";
  const imageUrl = `${baseUrl}${router.asPath}${linkImage}`;

  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/GREEN.png"
          type="image/svg+xml"
          sizes="16x16 32x32 48x48"
        />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1024" />
        <meta property="og:image:height" content="1024" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
