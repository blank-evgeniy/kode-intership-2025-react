import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { BrowserRouter } from "react-router";
import { Provider } from "react-redux";
import { ThemeProvider } from "./app/providers/theme/ThemeProvider";
import { store } from "@/app/store/store";
import App from "@/app/App";

import "@/app/styles/index.css";
import "@/app/config/i18n";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename={"/kode-intership-2025-react"}>
      <Provider store={store}>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
