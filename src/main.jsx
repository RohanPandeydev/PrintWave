import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ContextWrapper } from "./contexts/Context.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CartContextWrapper } from "./contexts/CartContext.jsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
        <CartContextWrapper>
      <ContextWrapper>
          <App />
      </ContextWrapper>
        </CartContextWrapper>
    </BrowserRouter>
  </QueryClientProvider>
);
