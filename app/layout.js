import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import MotionLayer from "@/components/MotionLayer";

export const metadata = {
  title: {
    default: "Nishanth Sherugar — Software Developer",
    template: "%s | Nishanth Sherugar",
  },
  description: "Portfolio of Nishanth Sherugar, a Computer Science Engineer building useful digital products.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MotionLayer />
        <Nav />
        <div id="main-content">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
