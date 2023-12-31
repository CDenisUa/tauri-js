// Core
import { Inter } from "next/font/google";
// Styles
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const RootLayout = ({children}: { children: React.ReactNode}) => (
  <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
);

export default RootLayout;
