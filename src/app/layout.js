import "@/styles/globals.css";
import LayoutWrapper from "./LayoutWrapper";

export const metadata = {
  title:
    "Sino Link International Logistics | #1 Global Freight & Shipping Solutions",
  description:
    "Sino Link International Logistics provides reliable global freight forwarding, shipping, and logistics solutions with trusted delivery and professional service.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
