import { Rubik } from "next/font/google";
import "./globals.css";

//Components imports
import Navbar from "./components/Navbar";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata = {
  title: "Issue-Tracker-Nextjs",
  description: "A Next.js application for managing and tracking help desk issues, built as part of a tutorial by Net Ninja.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
