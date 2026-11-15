import BootstrapClient from "../components/providers/BootstrapClient";
import WhatsAppButton from "../components/ui/WhatsAppButton";

// Import CSS in the original template order:
// 1. Bootstrap
import "../public/assets/bootstrap/css/bootstrap.min.css";
// 2. Icon fonts
import "../public/assets/webfonts/themify-icons.css";
import "../public/assets/css/all.min.css";
import "../public/assets/css/fontawesome.min.css";
// 3. Carousel, popup, menu, and animations
import "../public/assets/owlcarousel/css/owl.carousel.css";
import "../public/assets/owlcarousel/css/owl.theme.css";
import "../public/assets/css/magnific-popup.css";
import "../public/assets/css/jquery-simple-mobilemenu.css";
import "../public/assets/css/animate.css";
// 4. Main theme styling
import "../public/assets/css/style.css";
// 5. Theme design tokens
import "../public/assets/css/tokens.css";

export const metadata = {
  title: "Al Qasim Institute Bannu | Learn Today. Lead Tomorrow.",
  description: "Al Qasim Institute Bannu - Dedicated to providing modern IT training, language mastery, and career empowerment in Bannu City.",
  icons: {
    icon: "/assets/images/all-img/alqasim-logo-sm.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <BootstrapClient />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}

