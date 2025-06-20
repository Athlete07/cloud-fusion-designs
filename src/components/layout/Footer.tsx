import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8">
          <div className="md:col-span-4">
            <Link to="/" className="inline-block mb-4">
              <span className="text-xl font-semibold tracking-tight">
                <span className="text-gradient">Drehill</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm mb-4 max-w-md">
              Empowering businesses with cutting-edge AI solutions and enterprise cloud software that transform operations,
              boost efficiency, and drive innovation in today's digital landscape.
            </p>
            <div className="flex space-x-4">
              {/* Social Media Icons */}
              {["linkedin", "twitter", "facebook", "instagram"].map((social) => (
                <a
                  key={social}
                  href={`#${social}`}
                  className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-foreground/80 hover:text-primary transition-colors"
                >
                  <span className="sr-only">{social}</span>
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <h3 className="font-medium text-sm uppercase tracking-wider text-foreground/70 mb-4">
              Solutions
            </h3>
            <ul className="space-y-2">
              {["AI Products", "Process Automation", "Cloud Integration", "Machine Learning", "Natural Language"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="font-medium text-sm uppercase tracking-wider text-foreground/70 mb-4">
              Industries
            </h3>
            <ul className="space-y-2">
              {["Healthcare", "Manufacturing", "Retail", "Technology", "Education"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="font-medium text-sm uppercase tracking-wider text-foreground/70 mb-4">
              Company
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <a
                  href="#partners"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Partners
                </a>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="font-medium text-sm uppercase tracking-wider text-foreground/70 mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="w-4 h-4 text-primary mt-1 mr-2" />
                <span className="text-sm text-muted-foreground">
                  100 Innovation Way, Tech Park, CA 94103
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-4 h-4 text-primary mr-2" />
                <a
                  href="tel:+1234567890"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 text-primary mr-2" />
                <a
                  href="mailto:info@drehill.com"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  info@drehill.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Drehill Private Limited. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                to="/about"
                className="text-xs text-muted-foreground hover:text-primary transition-colors"
              >
                About Us
              </Link>
              <Link
                to="/careers"
                className="text-xs text-muted-foreground hover:text-primary transition-colors"
              >
                Careers
              </Link>
              <a
                href="#privacy"
                className="text-xs text-muted-foreground hover:text-primary transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#terms"
                className="text-xs text-muted-foreground hover:text-primary transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
