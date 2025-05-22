import "./globals.css";
import {Sora} from "next/font/google";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],

})

export const metadata = {
  title: "MK Blog - Create with your own",
  description: "MK Blog - Create with your own",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata?.title} </title>
        <meta name="description" content={metadata?.description} />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
        <link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet" />
      </head>
      <body className={`${sora?.className} antialiased bg-gradient-to-b from-[#050611] to-[#04000c] text-white relative`}>{children} </body>
    </html>
  );
}
