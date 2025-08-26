import { Oleo_Script, Inter, Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"
import { Toaster } from "sonner";
import Provider from "./Provider";
import LoaderWrapper from "@/Components/LoaderWrapper";


const oleoscript = Oleo_Script({
  variable: '--font-script',
  subsets: ['latin'],
  weight: ['400', '700']
})
const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin']
})
const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin']
})
const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
})

export const metadata = {
  title: "Umair Asim | Portfolio",
  description: "Umair Asim's Portfolio - Web Developer ",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-arp="true" suppressHydrationWarning={true}>
      <head>
        <Analytics />
      </head>
      <body className={`${oleoscript.variable} ${montserrat.variable} ${poppins.variable} ${inter.variable} antialiased bg-[#E0E8F6] text-[#484E53] font-poppins`} suppressHydrationWarning={true}>
        <Provider>
          <LoaderWrapper>
            {children}
            <Toaster />
          </LoaderWrapper>
        </Provider>
      </body>
    </html>
  );
}
