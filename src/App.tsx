
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
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import NotFound from "./pages/NotFound";

// Import Solution Detail Pages
import CloudInfrastructure from "./pages/solution-details/CloudInfrastructure";
import ApplicationModernization from "./pages/solution-details/ApplicationModernization";
import DataManagement from "./pages/solution-details/DataManagement";
import AiMachineLearning from "./pages/solution-details/AiMachineLearning";
import IntegrationServices from "./pages/solution-details/IntegrationServices";
import DevOpsAutomation from "./pages/solution-details/DevOpsAutomation";

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
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          
          {/* Solution Detail Routes */}
          <Route path="/solutions/cloud-infrastructure" element={<CloudInfrastructure />} />
          <Route path="/solutions/application-modernization" element={<ApplicationModernization />} />
          <Route path="/solutions/data-management" element={<DataManagement />} />
          <Route path="/solutions/ai-machine-learning" element={<AiMachineLearning />} />
          <Route path="/solutions/integration-services" element={<IntegrationServices />} />
          <Route path="/solutions/devops-automation" element={<DevOpsAutomation />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
