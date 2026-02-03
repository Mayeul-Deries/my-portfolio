import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import "./styles/index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/routes.tsx";
import { ThemeProvider } from "./providers/ThemeProvider.tsx";
import "./lib/i18n";
import { Toaster } from "./components/ui/sonner";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HelmetProvider>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <RouterProvider router={router} />
        <Toaster />
      </ThemeProvider>
    </HelmetProvider>
  </StrictMode>,
);
