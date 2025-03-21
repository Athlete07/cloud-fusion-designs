
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, X, Shield, TrendingUp, Star } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "py-3 bg-white/90 backdrop-blur-card shadow-sm"
          : "py-5 bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="relative z-10">
          <span className="text-xl font-semibold tracking-tight flex items-center">
            <Shield className="mr-2 h-5 w-5 text-primary" />
            <span className="text-gradient">Fusion</span>AI
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {["Products", "Solutions", "About", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="px-4 py-2 text-sm font-medium text-foreground/90 rounded-md transition-all hover:text-primary hover:bg-primary/5"
            >
              {item}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-2 px-4 py-2 bg-primary text-white rounded-md shadow-sm button-hover flex items-center"
          >
            <TrendingUp className="mr-1 h-4 w-4" /> Contact Us
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden relative z-10 p-2"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? (
            <X className="h-5 w-5 text-foreground" />
          ) : (
            <Menu className="h-5 w-5 text-foreground" />
          )}
        </button>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "fixed inset-0 bg-white/95 backdrop-blur-card md:hidden flex flex-col justify-center transition-all duration-300 ease-in-out",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <nav className="flex flex-col items-center space-y-6 px-6">
            {["Products", "Solutions", "About", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-lg font-medium text-foreground hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              )
            )}
            <a
              href="#contact"
              className="mt-4 px-6 py-3 bg-primary text-white rounded-md shadow-sm button-hover flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <TrendingUp className="mr-1 h-4 w-4" /> Contact Us
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
