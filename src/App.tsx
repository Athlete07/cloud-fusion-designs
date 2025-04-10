
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import Careers from "./pages/Careers";
import Products from "./pages/Products";
import ProductsShowcase from "./pages/ProductsShowcase";
import ProductDetail from "./pages/ProductDetail";
import DrehillProducts from "./pages/DrehillProducts";
import Solutions from "./pages/Solutions";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/products" element={<Products />} />
          <Route path="/drehill-products" element={<DrehillProducts />} />
          <Route path="/products-showcase" element={<ProductsShowcase />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route path="/solutions" element={<Solutions />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
