"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { PlusCircle } from "lucide-react";

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
  show: { opacity: 1, y: 0 },
};

const techStacks = [
  {
    category: "Frontend",
    stack: [
      { name: "React", color: "blue" },
      { name: "Next.js", color: "gray" },
      { name: "TypeScript", color: "blue" },
      { name: "TailwindCSS", color: "teal" },
      { name: "Redux", color: "purple" },
      { name: "Framer Motion", color: "pink" },
    ],
  },
  {
    category: "Backend",
    stack: [
      { name: "Node.js", color: "green" },
      { name: "Express", color: "gray" },
      { name: "Python", color: "yellow" },
      { name: "Django", color: "green" },
      { name: "FastAPI", color: "teal" },
      { name: "Flask", color: "gray" },
    ],
  },
  {
    category: "Database",
    stack: [
      { name: "MongoDB", color: "green" },
      { name: "PostgreSQL", color: "blue" },
      { name: "MySQL", color: "blue" },
      { name: "Redis", color: "red" },
      { name: "Firebase", color: "yellow" },
      { name: "Supabase", color: "green" },
    ],
  },
];

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-28 w-full bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 -translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl" />
      <div className="absolute bottom-0 right-0 translate-x-1/2 w-96 h-96 bg-secondary/10 rounded-full filter blur-3xl" />
      
      <div className="container-custom mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <h2 className="mb-6 text-4xl md:text-5xl">
            Our <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We use modern technologies to build scalable, robust, and
            high-performance applications.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
        >
          {techStacks.map((category, index) => (
            <motion.div key={index} variants={item} className="flex flex-col">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-3">{category.category}</h3>
                <div className="h-1.5 w-24 mx-auto rounded-full bg-gradient-to-r from-primary to-secondary" />
              </div>
              <div className="flex-1 glassmorphism rounded-xl p-6 md:p-8 shadow-lg grid grid-cols-2 gap-4">
                {category.stack.map((tech, techIndex) => (
                  <motion.div
                    key={techIndex}
                    whileHover={{ scale: 1.05 }}
                    className={cn(
                      "p-4 rounded-lg flex items-center justify-center text-center font-medium",
                      tech.color === "blue" && "bg-blue-500/10 text-blue-500",
                      tech.color === "green" && "bg-green-500/10 text-green-500",
                      tech.color === "red" && "bg-red-500/10 text-red-500",
                      tech.color === "yellow" && "bg-yellow-500/10 text-yellow-500",
                      tech.color === "purple" && "bg-purple-500/10 text-purple-500",
                      tech.color === "pink" && "bg-pink-500/10 text-pink-500",
                      tech.color === "teal" && "bg-teal-500/10 text-teal-500",
                      tech.color === "gray" && "bg-gray-500/10 text-gray-500"
                    )}
                  >
                    {tech.name}
                  </motion.div>
                ))}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="p-4 rounded-lg flex items-center justify-center bg-muted text-muted-foreground"
                >
                  <PlusCircle className="h-5 w-5 mr-2" />
                  More
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}