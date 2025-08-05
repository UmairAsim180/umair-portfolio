
import { Oleo_Script,Inter,Montserrat,Poppins } from "next/font/google";
import "./globals.css";


const oleoscript = Oleo_Script({
  variable: '--font-script',
  subsets: ['latin'],
  weight: ['400', '700']
})
const inter = Inter({
  variable:'--font-inter',
  subsets:['latin']
})
const montserrat = Montserrat({
  variable:'--font-montserrat',
  subsets:['latin']
})
const poppins = Poppins({
  variable:'--font-poppins',
  subsets:['latin'],
  weight:['400','500','600','700']
})

export const metadata = {
  title: "Umair Asim - Web Developer",
  description: "Umair Asim's Portfolio - Web Developer ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${oleoscript.variable} ${montserrat.variable} ${poppins.variable} ${inter.variable}antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
