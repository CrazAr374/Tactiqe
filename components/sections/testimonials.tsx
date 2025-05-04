"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Amit Sharma",
    role: "CEO at TechStart",
    content:
      "Tactiqe delivered our MVP in just 9 days, exceeding our expectations. Their team was professional, responsive, and committed to quality. We've already lined up future projects with them.",
    stars: 5,
  },
  {
    name: "Priya Patel",
    role: "Founder, EduTech Solutions",
    content:
      "Working with Tactiqe on our educational platform was a game-changer. Their Python expertise helped us implement complex algorithms for personalized learning paths. Highly recommended!",
    stars: 5,
  },
  {
    name: "Rahul Mehta",
    role: "Product Manager, FinTech Inc",
    content:
      "We needed a quick turnaround for a client dashboard, and Tactiqe delivered in just 5 days. The quality of their work and attention to detail made a huge difference for our project.",
    stars: 5,
  },
  {
    name: "Sneha Gupta",
    role: "CTO, HealthAI",
    content:
      "Their expertise in both web and Python development was exactly what we needed. Tactiqe helped us build a complex health monitoring system with a beautiful frontend in record time.",
    stars: 4,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-28 w-full bg-card">
      <div className="container-custom mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <h2 className="mb-6 text-4xl md:text-5xl">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
            Don't just take our word for it. Here's what our clients have to say
            about our rapid development services.
          </p>
          <p className="text-sm text-muted-foreground italic">
            (Note: These testimonials are sample data for demonstration purposes)
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-2 border-border hover:border-ring transition-colors shadow-md hover:shadow-lg">
                <CardContent className="pt-8 p-6 md:p-8">
                  <Quote className="h-12 w-12 text-primary/20 mb-6" />
                  <p className="text-foreground text-lg leading-relaxed">{testimonial.content}</p>
                </CardContent>
                <CardFooter className="flex justify-between items-center p-6 md:p-8 pt-4">
                  <div>
                    <p className="font-medium text-lg">{testimonial.name}</p>
                    <p className="text-base text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < testimonial.stars
                            ? "text-accent fill-accent"
                            : "text-muted-foreground"
                        }`}
                      />
                    ))}
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}