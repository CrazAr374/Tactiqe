import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Github, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Information */}
          <div>
            <h3 className="text-lg font-bold mb-4">Tactiqe</h3>
            <p className="text-muted-foreground mb-4">
              Web & Python-Based Development Solutions with rapid delivery times.
            </p>
            <div className="flex space-x-4">
              <Link href="https://github.com/CrazAr374" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github size={20} />
              </Link>
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <Twitter size={20} />
              </Link>
              <Link href="https://www.linkedin.com/in/atharva-rahate-272390269/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/services", label: "Services" },
                { href: "/projects", label: "Projects" },
                { href: "/contact", label: "Contact" },
                { href: "/book-quote", label: "Book a Quote" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground hover:underline transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              {[
                { href: "/services#mvp", label: "MVP Development (10 days)" },
                { href: "/services#small", label: "Small Projects (5 days)" },
                { href: "/services#mini", label: "Mini Projects (2 days)" },
                { href: "/services#web", label: "Web Development" },
                { href: "/services#python", label: "Python Development" },
              ].map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-muted-foreground hover:text-foreground hover:underline transition-colors"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Mail className="mt-0.5 h-5 w-5 text-muted-foreground" />
                <a
                  href="mailto:tactiqe@gmail.com"
                  className="text-muted-foreground hover:text-foreground hover:underline transition-colors"
                >
                  tactiqe@gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="mt-0.5 h-5 w-5 text-muted-foreground" />
                <a
                  href="tel:8149812710"
                  className="text-muted-foreground hover:text-foreground hover:underline transition-colors"
                >
                  +91 8149812710
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="mt-0.5 h-5 w-5 text-muted-foreground" />
                <span className="text-muted-foreground">
                  Nashik, Maharashtra, India
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Tactiqe. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link
              href="/privacy-policy"
              className="text-sm text-muted-foreground hover:text-foreground hover:underline transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-muted-foreground hover:text-foreground hover:underline transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}