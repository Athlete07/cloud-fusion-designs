
import React from "react";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    slug: "future-of-ai-enterprise-software",
    title: "The Future of AI in Enterprise Software Development",
    excerpt: "Explore how artificial intelligence is revolutionizing the way we build and deploy enterprise applications, from automated code generation to intelligent testing.",
    author: "Sarah Chen",
    date: "2024-06-15",
    readTime: "8 min read",
    category: "AI & Technology",
    image: "/placeholder.svg",
    tags: ["AI", "Enterprise", "Development", "Automation"]
  },
  {
    id: 2,
    slug: "cloud-infrastructure-best-practices",
    title: "Cloud Infrastructure Best Practices for Scalable Applications",
    excerpt: "Learn the essential strategies for building robust cloud infrastructure that can scale with your business needs and maintain high availability.",
    author: "Michael Rodriguez",
    date: "2024-06-10",
    readTime: "12 min read",
    category: "Cloud Computing",
    image: "/placeholder.svg",
    tags: ["Cloud", "Infrastructure", "Scalability", "DevOps"]
  },
  {
    id: 3,
    slug: "data-management-strategies",
    title: "Data Management Strategies for Modern Businesses",
    excerpt: "Discover how to effectively manage, analyze, and leverage your business data to drive informed decision-making and competitive advantage.",
    author: "Emma Thompson",
    date: "2024-06-05",
    readTime: "10 min read",
    category: "Data Management",
    image: "/placeholder.svg",
    tags: ["Data", "Analytics", "Business Intelligence", "Strategy"]
  },
  {
    id: 4,
    slug: "machine-learning-process-automation",
    title: "Machine Learning Applications in Process Automation",
    excerpt: "Understanding how machine learning algorithms can transform repetitive business processes into intelligent, self-improving systems.",
    author: "David Kim",
    date: "2024-05-28",
    readTime: "15 min read",
    category: "Machine Learning",
    image: "/placeholder.svg",
    tags: ["ML", "Automation", "Process Optimization", "AI"]
  },
  {
    id: 5,
    slug: "devops-transformation",
    title: "DevOps Transformation: From Manual to Automated",
    excerpt: "A comprehensive guide to implementing DevOps practices that streamline development workflows and improve deployment reliability.",
    author: "Jennifer Wilson",
    date: "2024-05-20",
    readTime: "11 min read",
    category: "DevOps",
    image: "/placeholder.svg",
    tags: ["DevOps", "Automation", "CI/CD", "Development"]
  },
  {
    id: 6,
    slug: "integration-services-digital-ecosystem",
    title: "Integration Services: Connecting Your Digital Ecosystem",
    excerpt: "Learn how modern integration platforms can seamlessly connect disparate systems and create a unified digital experience.",
    author: "Alex Johnson",
    date: "2024-05-15",
    readTime: "9 min read",
    category: "Integration",
    image: "/placeholder.svg",
    tags: ["Integration", "APIs", "Digital Transformation", "Systems"]
  }
];

const categories = ["All", "AI & Technology", "Cloud Computing", "Data Management", "Machine Learning", "DevOps", "Integration"];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = React.useState("All");
  
  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-primary/10 to-background">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Drehill</span> Blog
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Insights, trends, and expert perspectives on AI, cloud computing, and digital transformation
              that help businesses stay ahead in today's rapidly evolving technological landscape.
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 border-b">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="rounded-full"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <Card key={post.id} className="group hover:shadow-lg transition-shadow duration-300">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-t-lg"></div>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary">{post.category}</Badge>
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-3">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Link to={`/blog/${post.slug}`}>
                      <Button className="w-full group/btn">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 bg-secondary">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-semibold mb-4">Stay Updated</h2>
            <p className="text-muted-foreground mb-8">
              Subscribe to our newsletter and get the latest insights delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg border border-input bg-background"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Blog;
