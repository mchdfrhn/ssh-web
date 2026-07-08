import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import SiteShell from "./components/SiteShell";
import HomePage from "./pages/HomePage";
import IndustryPage from "./pages/IndustryPage";
import TemplatesPage from "./pages/TemplatesPage";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<SiteShell />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/industri/:slug" element={<IndustryPage />} />
          <Route path="/templates" element={<TemplatesPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
