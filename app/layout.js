import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Portfolio",
  description: "Nishanth's Portfolio",
  charset:"UTF-8",
  content:"width=device-width, initial-scale=1.0"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body><div><Nav/></div><main>{children}<div><Footer/></div></main></body>
    </html>
  );
}
