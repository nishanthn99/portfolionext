import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Portfolio",
  description: "Nishanth's Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body><div><Nav/></div><main>{children}<div><Footer/></div></main></body>
    </html>
  );
}
