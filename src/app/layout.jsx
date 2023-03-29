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
      <body>{children}</body>
    </html>
  );
}
