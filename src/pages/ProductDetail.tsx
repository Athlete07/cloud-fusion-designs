
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Product } from "@/types/product";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { 
  ArrowLeft, 
  CheckCircle2, 
  Share2, 
  Tag, 
  ShoppingCart, 
  Star 
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const { toast } = useToast();
  
  useEffect(() => {
    // Find the product with the matching ID
    const foundProduct = products.find(p => p.id === productId);
    setProduct(foundProduct || null);
    
    // Find related products (same category, excluding current product)
    if (foundProduct) {
      const related = products
        .filter(p => p.category === foundProduct.category && p.id !== foundProduct.id)
        .slice(0, 3);
      setRelatedProducts(related);
    }
  }, [productId]);

  const handlePurchase = () => {
    toast({
      title: "Product Added",
      description: "This product has been added to your cart.",
    });
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "Link Copied",
      description: "Product link has been copied to clipboard.",
    });
  };

  if (!product) {
    return (
      <Layout>
        <div className="container max-w-7xl mx-auto py-20 px-4">
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
            <p className="text-muted-foreground mb-6">
              The product you're looking for doesn't seem to exist.
            </p>
            <Link to="/products-showcase">
              <Button>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Products
              </Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="bg-muted/30">
        <div className="container max-w-7xl mx-auto py-4 px-4">
          <div className="flex items-center text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/products-showcase" className="hover:text-primary">Products</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">{product.title}</span>
          </div>
        </div>
      </div>

      {/* Product Detail */}
      <section className="py-12">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Product Image/Icon */}
            <div className="bg-muted/20 rounded-lg flex items-center justify-center p-12">
              <div className="text-9xl">{product.icon}</div>
            </div>
            
            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <div className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                  {product.category}
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">{product.title}</h1>
                <p className="text-xl text-muted-foreground mb-4">{product.shortDesc}</p>
              </div>
              
              <div className="border-t border-b py-4 my-6">
                <h3 className="text-lg font-medium mb-4">Key Features</h3>
                <ul className="space-y-3">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-wrap gap-3 mt-6">
                <Button size="lg" onClick={handlePurchase}>
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Request Demo
                </Button>
                <Button variant="outline" size="lg" onClick={handleShare}>
                  <Share2 className="mr-2 h-5 w-5" />
                  Share
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Description */}
      <section className="py-12 bg-muted/10">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Product Description</h2>
            <div className="prose max-w-none">
              <p className="text-lg mb-6">{product.longDesc}</p>
              
              <div className="bg-white p-6 rounded-lg border mt-8">
                <div className="flex items-center mb-4">
                  <Tag className="h-5 w-5 text-primary mr-2" />
                  <h3 className="text-lg font-medium">Why Choose {product.title}</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Star className="h-4 w-4 text-amber-500 mr-2" />
                    <span>Industry-leading technology and innovation</span>
                  </li>
                  <li className="flex items-center">
                    <Star className="h-4 w-4 text-amber-500 mr-2" />
                    <span>Seamless integration with existing systems</span>
                  </li>
                  <li className="flex items-center">
                    <Star className="h-4 w-4 text-amber-500 mr-2" />
                    <span>Dedicated support and training resources</span>
                  </li>
                  <li className="flex items-center">
                    <Star className="h-4 w-4 text-amber-500 mr-2" />
                    <span>Regular updates and feature enhancements</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-12">
          <div className="container max-w-7xl mx-auto px-4">
            <SectionHeading
              title="Related Products"
              subtitle="You might also be interested in these products from our catalog"
            />
            
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              {relatedProducts.map((relatedProduct) => (
                <Link 
                  key={relatedProduct.id} 
                  to={`/product/${relatedProduct.id}`}
                  className="bg-white rounded-lg border border-border p-6 transition-all hover:border-primary/50 hover:shadow-md"
                >
                  <div className="text-3xl mb-4">{relatedProduct.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{relatedProduct.title}</h3>
                  <p className="text-muted-foreground">{relatedProduct.shortDesc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
};

export default ProductDetail;
