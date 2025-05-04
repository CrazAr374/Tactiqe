"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full pt-36 pb-16 md:pt-44 md:pb-24 overflow-hidden">
      <div className="container-custom mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7 z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="mb-6">
                <span className="gradient-text">Build Your MVP</span>{" "}
                <br className="hidden md:block" />
                in 10 Days
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-muted-foreground">
                Web & Python-Based Development Solutions with rapid delivery times
                and exceptional quality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/book-quote">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity group"
                  >
                    Book a Quote
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link href="/services">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-primary text-primary hover:text-primary-foreground hover:bg-primary transition-colors"
                  >
                    Explore Services
                  </Button>
                </Link>
              </div>
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div className="flex items-center space-x-2">
                  <Zap className="h-5 w-5 text-accent" />
                  <span className="text-sm font-medium">MVP in 10 days</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Zap className="h-5 w-5 text-accent" />
                  <span className="text-sm font-medium">Small projects in 5 days</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Zap className="h-5 w-5 text-accent" />
                  <span className="text-sm font-medium">Mini projects in 2 days</span>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative z-10"
            >
              <div className="relative w-full max-w-[500px] mx-auto h-[400px] rounded-xl overflow-hidden glassmorphism shadow-xl">
                {/* Terminal/Code Editor Header */}
                <div className="bg-background/90 h-10 flex items-center px-4 border-b border-border">
                  <div className="flex space-x-2">
                    <div className="h-3 w-3 rounded-full bg-red-500"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-xs font-medium mx-auto text-muted-foreground">modern-solutions.tsx</div>
                </div>
                
                {/* Animated Code Section */}
                <div className="absolute inset-0 top-10 bg-gradient-to-br from-background to-background/95 p-6 flex flex-col">
                  <div className="font-mono text-sm text-left space-y-4 overflow-hidden">
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                      className="text-blue-400"
                    >
                      import &#123; createSolution &#125; from &apos;@tactiqe/core&apos;;
                    </motion.div>
                    
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8, duration: 0.5 }}
                      className="text-purple-400"
                    >
                      const buildModernSoftware = &#40;&#41; =&gt; &#123;
                    </motion.div>
                    
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.1, duration: 0.5 }}
                      className="pl-6 text-yellow-300"
                    >
                      return createSolution&#40;&#123;
                    </motion.div>
                    
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.4, duration: 0.5 }}
                      className="pl-12"
                    >
                      <span className="text-green-400">frontend:</span> <span className="text-orange-400">&apos;React&apos;</span>,
                    </motion.div>
                    
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.7, duration: 0.5 }}
                      className="pl-12"
                    >
                      <span className="text-green-400">framework:</span> <span className="text-orange-400">&apos;Next.js&apos;</span>,
                    </motion.div>
                    
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 2.0, duration: 0.5 }}
                      className="pl-12"
                    >
                      <span className="text-green-400">backend:</span> <span className="text-orange-400">&apos;Python&apos;</span>,
                    </motion.div>
                    
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 2.3, duration: 0.5 }}
                      className="pl-12"
                    >
                      <span className="text-green-400">deliveryTime:</span> <span className="text-blue-400">10</span>,
                    </motion.div>
                    
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 2.6, duration: 0.5 }}
                      className="pl-6 text-yellow-300"
                    >
                      &#125;&#41;;
                    </motion.div>
                    
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 2.9, duration: 0.5 }}
                      className="text-purple-400"
                    >
                      &#125;;
                    </motion.div>
                    
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 3.2, duration: 0.5 }}
                      className="flex items-center space-x-2 pt-4 border-t border-border/40 mt-4"
                    >
                      <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                      <span className="text-green-400 text-xs">Ready to build amazing software together</span>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Decorative elements - contained within parent */}
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-primary/30 rounded-full filter blur-2xl opacity-70" />
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-secondary/30 rounded-full filter blur-2xl opacity-70" />
          </div>
        </div>
      </div>
      
      {/* Background decorative elements - constrained to container */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl opacity-70" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full filter blur-3xl opacity-70" />
    </section>
  );
}