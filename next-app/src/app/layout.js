import { Bricolage_Grotesque, Manrope } from "next/font/google";
import "./globals.css";
import "../styles/bootstrap.min.css";
import "../styles/slicknav.min.css";
import "../styles/swiper-bundle.min.css";
import "../styles/animate.css";
import "../styles/magnific-popup.css";
import "../styles/mousecursor.css";
import "../styles/custom.css";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-bricolage",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
});

export const metadata = {
  title: "50Fables Wayanad | Best Heritage Forest Stay in Wayanad",
  description: "A luxury 90-year-old heritage homestay in Wayanad with a private pool and story-driven experiences.",
  keywords: "Heritage homestay Wayanad with pool, 50 Fables Wayanad, luxury vintage villa Wayanad, private pool homestay Pulpally, 90-year-old heritage home Kerala, plantation stay with infinity pool",
  authors: [{ name: "50 Fables" }],
  icons: {
    icon: "/images/favicon.png",
    shortcut: "/images/favicon.png",
    apple: "/images/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${bricolageGrotesque.variable} ${manrope.variable}`}>
        <Header />
        {children}
        <Footer />

        {/* Floating Contact Buttons — shown on all pages */}
        <div className="floating-contact-buttons">
          <a href="tel:+919446257408" className="floating-btn call-btn">
            <i className="fa fa-phone bg-icon"></i>
          </a>
          <a
            href="https://wa.me/919446257408?text=Hello%2C%20I%20would%20like%20to%20make%20an%20enquiry%20about%2050%20Fables."
            className="floating-btn whatsapp-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-whatsapp"></i>
          </a>
        </div>
        
        <Script src="/js/jquery-3.7.1.min.js" strategy="beforeInteractive" />
        <Script src="/js/bootstrap.min.js" strategy="afterInteractive" />
        <Script src="/js/validator.min.js" strategy="afterInteractive" />
        <Script src="/js/jquery.slicknav.js" strategy="afterInteractive" />
        <Script src="/js/swiper-bundle.min.js" strategy="afterInteractive" />
        <Script src="/js/jquery.waypoints.min.js" strategy="afterInteractive" />
        <Script src="/js/jquery.counterup.min.js" strategy="afterInteractive" />
        <Script src="/js/isotope.min.js" strategy="afterInteractive" />
        <Script src="/js/jquery.magnific-popup.min.js" strategy="afterInteractive" />
        <Script src="/js/SmoothScroll.js" strategy="lazyOnload" />
        <Script src="/js/parallaxie.js" strategy="lazyOnload" />
        <Script src="/js/gsap.min.js" strategy="afterInteractive" />
        <Script src="/js/magiccursor.js" strategy="lazyOnload" />
        <Script src="/js/SplitText.min.js" strategy="afterInteractive" />
        <Script src="/js/ScrollTrigger.min.js" strategy="afterInteractive" />
        <Script src="/js/jquery.mb.YTPlayer.min.js" strategy="lazyOnload" />
        <Script src="/js/wow.min.js" strategy="afterInteractive" />
        <Script src="/js/function.js" strategy="afterInteractive" />
        <Script src="https://use.fontawesome.com/a53893d9fd.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
