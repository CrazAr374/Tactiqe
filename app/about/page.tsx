"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Target, Sparkles, Lightbulb, Users, Award, Github, Linkedin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h1 className="mb-6">
              About <span className="gradient-text">Tactiqe</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              We're a tech-focused software agency specializing in rapid delivery
              of high-quality software solutions. Our mission is to help businesses
              and startups launch their ideas quickly without compromising on quality.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="mb-6">Our Mission & Vision</h2>
              <p className="text-lg text-muted-foreground mb-6">
                At Tactiqe, we believe in the power of rapid development without
                sacrificing quality. Our vision is to be the go-to agency for
                businesses that need quick, efficient, and reliable software solutions.
              </p>
              <ul className="space-y-4">
                {[
                  "Help businesses launch MVPs in record time",
                  "Deliver high-quality code that scales",
                  "Make technology accessible to startups and small businesses",
                  "Build long-term partnerships with our clients",
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative"
            >
              <div className="relative h-[400px] w-full rounded-xl overflow-hidden glassmorphism flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20" />
                <div className="relative z-10 text-center p-8">
                  <Target className="h-16 w-16 mx-auto mb-6 text-primary" />
                  <h3 className="text-2xl font-bold mb-4">Our Core Values</h3>
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="bg-background/50 p-4 rounded-lg">
                      <h4 className="text-primary font-medium">Speed</h4>
                      <p className="text-sm">Rapid delivery without compromise</p>
                    </div>
                    <div className="bg-background/50 p-4 rounded-lg">
                      <h4 className="text-secondary font-medium">Quality</h4>
                      <p className="text-sm">Excellence in every line of code</p>
                    </div>
                    <div className="bg-background/50 p-4 rounded-lg">
                      <h4 className="text-accent font-medium">Innovation</h4>
                      <p className="text-sm">Cutting-edge solutions</p>
                    </div>
                    <div className="bg-background/50 p-4 rounded-lg">
                      <h4 className="text-primary font-medium">Integrity</h4>
                      <p className="text-sm">Transparent communication</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/30 rounded-full filter blur-3xl" />
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-secondary/30 rounded-full filter blur-3xl" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="mb-4">
              Why Choose <span className="gradient-text">Tactiqe</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              We deliver value through our unique approach to software development.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Rapid Delivery",
                description: "We specialize in fast turnaround times without compromising quality. MVP in 10 days, small projects in 5, mini projects in 2.",
                icon: Sparkles,
                color: "primary",
              },
              {
                title: "Industry Expertise",
                description: "Our team brings years of experience in both web development and Python-based applications across various industries.",
                icon: Lightbulb,
                color: "secondary",
              },
              {
                title: "Client-Focused Approach",
                description: "We work closely with you to understand your needs and deliver solutions that exceed expectations.",
                icon: Users,
                color: "accent",
              },
              {
                title: "Quality Assurance",
                description: "All our projects undergo rigorous testing to ensure they meet the highest standards of performance and reliability.",
                icon: CheckCircle,
                color: "primary",
              },
              {
                title: "Transparent Communication",
                description: "We believe in clear, honest communication throughout the development process.",
                icon: Award,
                color: "secondary",
              },
              {
                title: "Post-Delivery Support",
                description: "Our relationship doesn't end with delivery. We provide ongoing support to ensure your project continues to succeed.",
                icon: Users,
                color: "accent",
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="h-full border border-border hover:border-ring transition-colors">
                  <CardHeader className="pb-2">
                    <feature.icon className={`h-8 w-8 mb-2 ${
                      feature.color === "primary" ? "text-primary" :
                      feature.color === "secondary" ? "text-secondary" :
                      "text-accent"
                    }`} />
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="mb-4">
              Meet Our <span className="gradient-text">Team</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Behind Tactiqe's success is a dedicated team of experts passionate about delivering exceptional software solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="border-2 border-border hover:border-primary transition-all duration-300 overflow-hidden shadow-lg h-full">
                <div className="p-6 pb-0 flex justify-center">
                  <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl">
                  <img src="https://picsum.photos/seed/developer2/300/300" alt="Rahul Verma" className="w-full h-full object-cover"/>
                  </div>
                </div>
                <CardHeader className="text-center pt-4">
                  <CardTitle className="text-2xl mb-1">Coming Soon</CardTitle>
                  <p className="text-primary font-medium">Software Dev</p>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-6">
                    Python specialist with extensive experience in data processing, API development, and machine learning.
                    Builds scalable and efficient backend systems.
                  </p>
                  <div className="flex justify-center space-x-4">
                    <Link 
                      href="https://github.com/CrazAr374" 
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="bg-background/80 p-3 rounded-full hover:bg-primary/10 transition-colors"
                    >
                      <Github className="h-5 w-5 text-foreground" />
                    </Link>
                    <Link 
                      href="https://www.linkedin.com/in/atharva-rahate-272390269/" 
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="bg-background/80 p-3 rounded-full hover:bg-primary/10 transition-colors"
                    >
                      <Linkedin className="h-5 w-5 text-foreground" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card className="border-2 border-border hover:border-accent transition-all duration-300 overflow-hidden shadow-lg h-full">
                <div className="p-6 pb-0 flex justify-center">
                  <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-accent/20 shadow-xl">
                    <img src="https://test-animation-by-atharva.netlify.app/Screenshot_20240807-180322_Instagram.jpg" alt="Atharva Rahate" className="w-full h-full object-cover"/>
                  </div>
                </div>
                <CardHeader className="text-center pt-4">
                  <CardTitle className="text-2xl mb-1">Atharva Rahate</CardTitle>
                  <p className="text-accent font-medium">Founder & Lead Developer</p>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-6">
                    Experienced full-stack developer with expertise in React, Next.js and Python. 
                    Passionate about building high-quality software solutions with rapid delivery times.
                  </p>
                  <div className="flex justify-center space-x-4">
                    <Link 
                      href="https://github.com/CrazAr374" 
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="bg-background/80 p-3 rounded-full hover:bg-accent/10 transition-colors"
                    >
                      <Github className="h-5 w-5 text-foreground" />
                    </Link>
                    <Link 
                      href="https://www.linkedin.com/in/atharva-rahate-272390269/"
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="bg-background/80 p-3 rounded-full hover:bg-accent/10 transition-colors"
                    >
                      <Linkedin className="h-5 w-5 text-foreground" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="border-2 border-border hover:border-secondary transition-all duration-300 overflow-hidden shadow-lg h-full">
                <div className="p-6 pb-0 flex justify-center">
                  <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-secondary/20 shadow-xl">
                    <img src="https://picsum.photos/seed/developer1/300/300" alt="Maya Sharma" className="w-full h-full object-cover"/>
                  </div>
                </div>
                <CardHeader className="text-center pt-4">
                  <CardTitle className="text-2xl mb-1">Coming Soon</CardTitle>
                  <p className="text-secondary font-medium">UI/UX Designer</p>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-6">
                    Creative UI/UX designer with a keen eye for creating intuitive and engaging user experiences.
                    Specializes in modern web interfaces and mobile app design.
                  </p>
                  <div className="flex justify-center space-x-4">
                    <Link 
                      href="#" 
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="bg-background/80 p-3 rounded-full hover:bg-secondary/10 transition-colors"
                    >
                      <Github className="h-5 w-5 text-foreground" />
                    </Link>
                    <Link 
                      href="#" 
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="bg-background/80 p-3 rounded-full hover:bg-secondary/10 transition-colors"
                    >
                      <Linkedin className="h-5 w-5 text-foreground" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}