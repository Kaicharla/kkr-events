import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ResponsiveNavbar from "@/app/Home/Navbar/ResponsiveNavbar";
import Footer from "@/app/Home/Footer/Footer";
import ScrollToTop from "@/components/Helper/ScrollToTop";
import FloatingActions from "@/components/Helper/FloatingActions";
import CallbackDrawer from "@/components/Helper/CallbackDrawer";

const font = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KKR Events",
  description: "Event services in Andhra Pradesh and Telangana",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} antialiased`}>
        {/* 🔥 GLOBAL SCHEMA MARKUP */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EventService",
              name: "KKR Events",
              url: "https://yourdomain.com", // 🔴 CHANGE AFTER DEPLOY
              telephone: "+91XXXXXXXXXX", // 🔴 CHANGE
              serviceType: [
                "DJ Services",
                "Wedding DJ",
                "Event DJ",
                "Chenda Melam",
                "Sannayi Melam",
                "Wedding Band",
              ],
              areaServed: [
                {
                  "@type": "State",
                  name: "Andhra Pradesh",
                },
                {
                  "@type": "State",
                  name: "Telangana",
                },
              ],
            }),
          }}
        />

        <ResponsiveNavbar />
        {children}
        <Footer />
        <CallbackDrawer />
        <FloatingActions />
        <ScrollToTop />
      </body>
    </html>
  );
}
