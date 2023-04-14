import Footer from "@/components/Footer";

import "./globals.css";

export const metadata = {
  title: "Google Clone",
  description: "Google clone created by next 13",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative min-h-screen">
        <div className="pb-32 sm:pb-20">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
