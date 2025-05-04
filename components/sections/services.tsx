"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Calendar, Code, Database, Zap, LineChart } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const services = [
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Services() {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mb-4">Our <span className="gradient-text">Services</span></h2>
            <p className="text-lg text-muted-foreground">
              We offer a range of development services with rapid delivery times,
              focusing on quality and speed to help you reach your goals.
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full border border-border hover:border-ring transition-colors overflow-hidden group">
                <CardHeader className={cn(
                  "pb-2",
                  service.color === "primary" && "bg-primary/5",
                  service.color === "secondary" && "bg-secondary/5",
                  service.color === "accent" && "bg-accent/5",
                )}>
                  <div className="flex items-center justify-between mb-2">
                    <service.icon className={cn(
                      "h-8 w-8",
                      service.color === "primary" && "text-primary",
                      service.color === "secondary" && "text-secondary",
                      service.color === "accent" && "text-accent",
                    )} />
                    {service.days && (
                      <span className="inline-flex items-center rounded-full bg-background px-2.5 py-0.5 text-xs font-medium">
                        {service.days} days
                      </span>
                    )}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="pt-2">
                  <div className={cn(
                    "w-full h-1 rounded-full overflow-hidden",
                    service.color === "primary" && "bg-primary/20",
                    service.color === "secondary" && "bg-secondary/20",
                    service.color === "accent" && "bg-accent/20",
                  )}>
                    <div className={cn(
                      "h-full transition-all duration-500 ease-out group-hover:w-full",
                      service.color === "primary" && "bg-primary",
                      service.color === "secondary" && "bg-secondary",
                      service.color === "accent" && "bg-accent",
                    )} style={{ width: service.days ? `${(service.days / 10) * 100}%` : "70%" }} />
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}