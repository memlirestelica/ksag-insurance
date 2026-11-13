import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { CookieBanner } from "./components/CookieBanner";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { LanguageProvider } from "./i18n/LanguageContext";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { HealthComparePage } from "./pages/HealthComparePage";
import { HomePage } from "./pages/HomePage";
import { ImprintPage } from "./pages/ImprintPage";
import { PrivacyPage } from "./pages/PrivacyPage";
import { ProductDetailPage } from "./pages/ProductDetailPage";
import { ProductsPage } from "./pages/ProductsPage";
import { RecommendPage } from "./pages/RecommendPage";
import { TaxPage } from "./pages/TaxPage";

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, "")}>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/uber-uns" element={<AboutPage />} />
            <Route path="/krankenkassenvergleich" element={<HealthComparePage />} />
            <Route path="/privatkunden" element={<ProductsPage kind="private" />} />
            <Route
              path="/privatkunden/:slug"
              element={<ProductDetailPage kind="private" />}
            />
            <Route path="/firmenkunden" element={<ProductsPage kind="business" />} />
            <Route
              path="/firmenkunden/:slug"
              element={<ProductDetailPage kind="business" />}
            />
            <Route path="/steuerberatung" element={<TaxPage />} />
            <Route path="/empfehlen" element={<RecommendPage />} />
            <Route path="/kontakt" element={<ContactPage />} />
            <Route path="/datenschutz" element={<PrivacyPage />} />
            <Route path="/impressum" element={<ImprintPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
        <CookieBanner />
      </BrowserRouter>
    </LanguageProvider>
  );
}
