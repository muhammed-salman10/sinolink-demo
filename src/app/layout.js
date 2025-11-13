import "@/styles/globals.css";
import LayoutWrapper from "./LayoutWrapper";

export const metadata = {
  title: "Sinolink Logistics - Global Freight & Supply Chain Solutions",
  description:
    "Your trusted partner for sea, air, and land freight, contract logistics, and customs services — delivering efficiency worldwide.",
  authors: [{ name: "Webeyecraft Technologies Pvt. Ltd" }],
  publisher: "Sinolink International Logistics",
  alternates: {
    canonical: "https://sinolinkinternational.com",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="icon"
          type="image/png"
          href="/assets/favicon/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/assets/favicon/favicon.svg" />
        <link rel="shortcut icon" href="/assets/favicon/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/assets/favicon/apple-touch-icon.png"
        />
        <meta name="apple-mobile-web-app-title" content="Sinolink" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body>
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
