"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Zap, LineChart, Calendar, Code, Database, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    id: "mvp",
    title: "MVP Development",
    description: "Launch your product quickly with our 10-day MVP development service",
    icon: Zap,
    days: 10,
    features: [
      "User authentication system",
      "Core functionality",
      "Basic frontend design",
      "Database integration",
      "Deployment ready",
    ],
    color: "primary",
    longDescription: "Our MVP development service is designed to help you launch your product quickly and efficiently. In just 10 days, we'll build a functional version of your application with the core features you need to validate your idea in the market. This includes user authentication, basic UI/UX design, core functionality, and database integration."
  },
  {
    id: "small",
    title: "Small Projects",
    description: "Complete small-scale projects with quick turnaround",
    icon: LineChart,
    days: 5,
    features: [
      "Dashboard implementation",
      "Integration with third-party APIs",
      "Custom UI components",
      "Data visualization",
      "Performance optimization",
    ],
    color: "secondary",
    longDescription: "Our small project service is perfect for businesses that need specific features or components developed quickly. In just 5 days, we can implement dashboards, integrate third-party APIs, create custom UI components, or add data visualization features to your existing application."
  },
  {
    id: "mini",
    title: "Mini Projects",
    description: "Implement specific features or components in just 2 days",
    icon: Calendar,
    days: 2,
    features: [
      "Single feature implementation",
      "Bug fixes and improvements",
      "UI/UX enhancements",
      "Performance optimization",
      "Documentation",
    ],
    color: "accent",
    longDescription: "Need a specific feature implemented or a bug fixed? Our mini project service delivers results in just 2 days. This is ideal for small UI/UX enhancements, performance optimizations, or implementing single features in your existing application."
  },
  {
    id: "web",
    title: "Web Development",
    description: "Create modern, responsive websites with cutting-edge technologies",
    icon: Code,
    features: [
      "React/Next.js development",
      "Responsive design",
      "SEO optimization",
      "Performance tuning",
      "Accessibility compliance",
    ],
    color: "primary",
    longDescription: "Our web development services focus on creating modern, responsive websites using the latest technologies. We specialize in React and Next.js to build fast, scalable, and SEO-friendly applications. Our team ensures your website is optimized for all devices and adheres to accessibility standards."
  },
  {
    id: "python",
    title: "Python Development",
    description: "Build robust backend systems and data processing solutions",
    icon: Database,
    features: [
      "API development",
      "Data processing",
      "Automation scripts",
      "Machine learning integration",
      "Backend systems",
    ],
    color: "secondary",
    longDescription: "Our Python development services cover everything from API development to complex data processing systems. We can build robust backend services, automate workflows, implement machine learning models, and create efficient data processing pipelines tailored to your specific needs."
  },
];

export default function ServicesPage() {
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
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              We offer a range of development services with rapid delivery times,
              focusing on quality and speed to help you reach your goals.
            </p>
          </motion.div>

          <Tabs defaultValue="delivery" className="mb-16">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="delivery">By Delivery Time</TabsTrigger>
                <TabsTrigger value="technology">By Technology</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="delivery" className="space-y-16">
              {services.slice(0, 3).map((service, index) => (
                <div 
                  key={index} 
                  id={service.id}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                >
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="flex items-center space-x-3 mb-4">
                      <service.icon className={`h-8 w-8 ${
                        service.color === "primary" ? "text-primary" :
                        service.color === "secondary" ? "text-secondary" :
                        "text-accent"
                      }`} />
                      <h2 className="text-3xl font-bold">{service.title}</h2>
                    </div>
                    <div className="inline-flex items-center rounded-full bg-background border border-border px-3 py-1 text-sm font-medium mb-4">
                      {service.days} days delivery
                    </div>
                    <p className="text-lg text-muted-foreground mb-6">
                      {service.longDescription}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start space-x-3">
                          <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href="/book-quote">
                      <Button
                        className={`${
                          service.color === "primary" ? "bg-gradient-to-r from-primary to-secondary" :
                          service.color === "secondary" ? "bg-gradient-to-r from-secondary to-primary" :
                          "bg-gradient-to-r from-accent to-secondary"
                        } hover:opacity-90 transition-opacity group`}
                      >
                        Book a Quote
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <div className={`relative p-8 rounded-lg glassmorphism overflow-hidden border ${
                      service.color === "primary" ? "border-primary/30" :
                      service.color === "secondary" ? "border-secondary/30" :
                      "border-accent/30"
                    }`}>
                      <div className={`absolute top-0 left-0 h-1 w-full ${
                        service.color === "primary" ? "bg-primary" :
                        service.color === "secondary" ? "bg-secondary" :
                        "bg-accent"
                      }`} />
                      <h3 className="text-xl font-bold mb-6">What's included:</h3>
                      <div className="space-y-6">
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">Initial consultation</span>
                          <div className={`h-2 w-2 rounded-full ${
                            service.color === "primary" ? "bg-primary" :
                            service.color === "secondary" ? "bg-secondary" :
                            "bg-accent"
                          }`} />
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">Requirement analysis</span>
                          <div className={`h-2 w-2 rounded-full ${
                            service.color === "primary" ? "bg-primary" :
                            service.color === "secondary" ? "bg-secondary" :
                            "bg-accent"
                          }`} />
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">Design mockups</span>
                          <div className={`h-2 w-2 rounded-full ${
                            service.color === "primary" ? "bg-primary" :
                            service.color === "secondary" ? "bg-secondary" :
                            "bg-accent"
                          }`} />
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">Development</span>
                          <div className={`h-2 w-2 rounded-full ${
                            service.color === "primary" ? "bg-primary" :
                            service.color === "secondary" ? "bg-secondary" :
                            "bg-accent"
                          }`} />
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">Testing</span>
                          <div className={`h-2 w-2 rounded-full ${
                            service.color === "primary" ? "bg-primary" :
                            service.color === "secondary" ? "bg-secondary" :
                            "bg-accent"
                          }`} />
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">Deployment</span>
                          <div className={`h-2 w-2 rounded-full ${
                            service.color === "primary" ? "bg-primary" :
                            service.color === "secondary" ? "bg-secondary" :
                            "bg-accent"
                          }`} />
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">Basic documentation</span>
                          <div className={`h-2 w-2 rounded-full ${
                            service.color === "primary" ? "bg-primary" :
                            service.color === "secondary" ? "bg-secondary" :
                            "bg-accent"
                          }`} />
                        </div>
                      </div>
                      <div className={`mt-8 h-2 rounded-full overflow-hidden bg-muted`}>
                        <div className={`h-full transition-all duration-500 ease-out ${
                          service.color === "primary" ? "bg-primary" :
                          service.color === "secondary" ? "bg-secondary" :
                          "bg-accent"
                        }`} style={{ width: `${(service.days / 10) * 100}%` }} />
                      </div>
                      <div className="mt-2 text-right text-sm text-muted-foreground">
                        {service.days} days delivery
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </TabsContent>
            
            <TabsContent value="technology" className="space-y-16">
              {services.slice(3).map((service, index) => (
                <div 
                  key={index + 3} 
                  id={service.id}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                >
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="flex items-center space-x-3 mb-4">
                      <service.icon className={`h-8 w-8 ${
                        service.color === "primary" ? "text-primary" :
                        "text-secondary"
                      }`} />
                      <h2 className="text-3xl font-bold">{service.title}</h2>
                    </div>
                    <p className="text-lg text-muted-foreground mb-6">
                      {service.longDescription}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start space-x-3">
                          <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href="/book-quote">
                      <Button
                        className={`${
                          service.color === "primary" ? "bg-gradient-to-r from-primary to-secondary" :
                          "bg-gradient-to-r from-secondary to-primary"
                        } hover:opacity-90 transition-opacity group`}
                      >
                        Book a Quote
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="relative"
                  >
                    <div className={`relative p-8 rounded-lg glassmorphism overflow-hidden border ${
                      service.color === "primary" ? "border-primary/30" :
                      "border-secondary/30"
                    }`}>
                      <div className={`absolute top-0 left-0 h-1 w-full ${
                        service.color === "primary" ? "bg-primary" :
                        "bg-secondary"
                      }`} />
                      <h3 className="text-xl font-bold mb-6">Technologies we use:</h3>
                      <div className="grid grid-cols-2 gap-3">
                        {(service.id === "web" ? [
                          "React", "Next.js", "TypeScript", "TailwindCSS", "Node.js", "Express", "MongoDB", "PostgreSQL"
                        ] : [
                          "Django", "Flask", "FastAPI", "NumPy", "Pandas", "TensorFlow", "PyTorch", "SQLAlchemy"
                        ]).map((tech, i) => (
                          <div
                            key={i}
                            className={`p-3 rounded-lg text-center font-medium text-sm ${
                              service.color === "primary" ? "bg-primary/10 text-primary" :
                              "bg-secondary/10 text-secondary"
                            }`}
                          >
                            {tech}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Decorative elements */}
                    <div className={`absolute -top-10 -left-10 w-40 h-40 ${
                      service.color === "primary" ? "bg-primary/30" : "bg-secondary/30"
                    } rounded-full filter blur-3xl opacity-70`} />
                    <div className={`absolute -bottom-10 -right-10 w-40 h-40 ${
                      service.color === "primary" ? "bg-secondary/30" : "bg-primary/30"
                    } rounded-full filter blur-3xl opacity-70`} />
                  </motion.div>
                </div>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  );
}