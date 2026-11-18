import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import MotionLayer from "@/components/MotionLayer";

export const metadata = {
  title: "Nishanth Sherugar — Software Developer",
  description: "Portfolio of Nishanth Sherugar, a Computer Science Engineer building useful digital products.",
  charset: "UTF-8",
  content: "width=device-width, initial-scale=1.0"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MotionLayer />
        <div><Nav /></div>
        <main>{children}<div><Footer /></div></main>
      </body>
    </html>
  );
}
