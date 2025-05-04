"use client";

import React, { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Zap, Clock, Trophy, Star } from "lucide-react";

const stats = [
  {
    value: 50,
    label: "Projects Completed",
    icon: Trophy,
    color: "primary",
  },
  {
    value: 98,
    label: "Satisfaction Rate",
    suffix: "%",
    icon: Star,
    color: "accent",
  },
  {
    value: 7,
    label: "Average Delivery Days",
    icon: Clock,
    color: "secondary",
  },
  {
    value: 24,
    label: "Hour Response Time",
    icon: Zap,
    color: "primary",
  },
];

interface CounterProps {
  value: number;
  duration?: number;
  suffix?: string;
}

function Counter({ value, duration = 2, suffix = "" }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = value;
      const incrementTime = (duration * 1000) / end;
      
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start >= end) clearInterval(timer);
      }, incrementTime);
      
      return () => clearInterval(timer);
    }
  }, [inView, value, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Stats() {
  return (
    <section className="py-28 w-full bg-card">
      <div className="container-custom mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="flex justify-center mb-6">
                <div className={`p-5 rounded-full ${
                  stat.color === "primary" ? "bg-primary/10" :
                  stat.color === "secondary" ? "bg-secondary/10" :
                  "bg-accent/10"
                }`}>
                  <stat.icon className={`h-8 w-8 ${
                    stat.color === "primary" ? "text-primary" :
                    stat.color === "secondary" ? "text-secondary" :
                    "text-accent"
                  }`} />
                </div>
              </div>
              <h3 className="text-4xl md:text-5xl font-bold mb-3">
                <Counter value={stat.value} suffix={stat.suffix} />
              </h3>
              <p className="text-lg text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}