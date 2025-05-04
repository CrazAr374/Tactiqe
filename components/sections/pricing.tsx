"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const pricingPlans = [
  {
    name: "Mini Project",
    price: "₹200",
    description: "Quick solutions for simple needs",
    features: [
      "Single feature implementation",
      "Bug fixes and improvements",
      "Basic UI enhancements",
      "2-day delivery",
      "1 revision included",
    ],
    recommended: false,
  },
  {
    name: "Small Project",
    price: "₹2,000",
    description: "For startups and growing companies",
    features: [
      "Multiple feature implementation",
      "Custom UI components",
      "API integrations",
      "5-day delivery",
      "2 revisions included",
      "Technical documentation",
    ],
    recommended: true,
  },
  {
    name: "MVP Development",
    price: "₹10,000+",
    description: "Complete solutions for businesses",
    features: [
      "Full application development",
      "User authentication system",
      "Database design and integration",
      "API development",
      "10-day delivery",
      "3 revisions included",
      "Comprehensive documentation",
      "30 days of support",
    ],
    recommended: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="mb-4">Simple <span className="gradient-text">Pricing</span></h2>
          <p className="text-lg text-muted-foreground">
            Choose the plan that fits your needs. All plans include consultation,
            design, implementation, and testing.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className={`h-full border ${
                plan.recommended
                  ? "border-primary shadow-lg shadow-primary/20"
                  : "border-border"
              }`}>
                {plan.recommended && (
                  <div className="bg-primary text-primary-foreground text-center py-1 text-xs font-medium rounded-t-lg">
                    MOST POPULAR
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="mt-4 flex items-baseline">
                    <span className="text-4xl font-extrabold">{plan.price}</span>
                    {plan.name !== "MVP Development" && (
                      <span className="ml-1 text-muted-foreground">/project</span>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="ml-3 text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/book-quote" className="w-full">
                    <Button
                      className={`w-full ${
                        plan.recommended
                          ? "bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                          : ""
                      }`}
                      variant={plan.recommended ? "default" : "outline"}
                    >
                      Get Started
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}