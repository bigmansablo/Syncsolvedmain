import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages";
import About from "./pages/about";
import AuditRequested from "./pages/audit-requested";
import { ThemeProvider } from "@/components/theme-provider";

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/audit-requested" element={<AuditRequested />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
