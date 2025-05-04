"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-28 w-full relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 opacity-20" />
      
      <div className="container-custom mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mb-6 text-4xl md:text-5xl font-bold">
              Ready to Build Your <span className="gradient-text">Project</span> with Us?
            </h2>
            <p className="mb-10 text-xl text-muted-foreground max-w-3xl mx-auto">
              Get in touch today and let's discuss how we can bring your idea to life
              with our rapid development approach.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/book-quote">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity group px-8 py-6 text-lg"
                >
                  Book a Quote
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:text-primary-foreground hover:bg-primary transition-colors px-8 py-6 text-lg"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl" />
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-96 h-96 bg-secondary/10 rounded-full filter blur-3xl" />
    </section>
  );
}