import { Crimson_Text, Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-main",
  weight: ["300", "400", "500", "600", "700"]
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "700"]
});

const crimson = Crimson_Text({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "600", "700"],
  style: ["normal", "italic"]
});

export const metadata = {
  title: "Cinema com o Rafa",
  description:
    "Críticas, listas e reflexões cinematográficas por Rafael Bissigo, em João Pessoa (PB)."
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${outfit.variable} ${playfair.variable} ${crimson.variable}`}>
      <body>{children}</body>
    </html>
  );
}
