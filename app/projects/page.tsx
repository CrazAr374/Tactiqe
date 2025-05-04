"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Code, Database, SearchCode, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogFooter, DialogClose } from "@/components/ui/dialog";

const projects = [
  {
    title: "Intervee",
    description: "A platform to help students practice mock interviews and improve communication skills",
    image: "https://ideogram.ai/assets/progressive-image/balanced/response/f-7PP6-kSJi4pN2zLcKqPA",
    category: ["python", "mvp", "edtech"],
    technologies: ["React", "Node.js", "MongoDB", "WebRTC"],
    challenge: "Creating a real-time platform for mock interviews with feedback, scheduling, and performance analysis in under 10 days.",
    solution: "We implemented a WebRTC-based real-time video system, integrated scheduling with calendar sync, and included AI-generated feedback. MongoDB stores user progress, while React powers a dynamic and clean UI.",
    liveSite: "https://intervee.vercel.app/",
    days: 10
  },
  {
    title: "Stega Shield",
    description: "A security tool for hiding sensitive information inside images using steganography",
    image: "https://ideogram.ai/assets/image/lossless/response/dfRpo2X9Q6Geku6CAg9ZEw",
    category: ["python", "security", "tool"],
    technologies: ["Python", "Tkinter", "PIL", "NumPy"],
    challenge: "Building a GUI-based tool for securely embedding and extracting data from images using steganography.",
    solution: "Using LSB (Least Significant Bit) steganography, we developed a Python app with a user-friendly Tkinter interface that allows users to encode/decode text within images. PIL and NumPy were used for image processing.",
    liveSite: "https://staga-sheild.onrender.com/",
    days: 4
  },
  {
    title: "Lunar Creator",
    description: "An AI-powered design tool that generates creative content and art with lunar-inspired themes",
    image: "https://imgs.search.brave.com/qhIVdCSfyfIHL_gP9XVc2zQ1DTxINFb62UkekEsoBV8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zY2ll/bmNlLm5hc2EuZ292/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIz/LzAzL2x1bmFyZmFy/c2lkZWxyb2MucG5n/P3c9NzY4",
    category: ["ai", "creative", "tool"],
    technologies: ["Python", "OpenAI API", "Flask", "React"],
    challenge: "Developing a creative content tool that blends AI text generation and visual aesthetics inspired by the moon.",
    solution: "We used OpenAI's API for generating poetic text and lunar themes, combined with a Flask backend and React frontend. Users could generate artwork titles, captions, and short poems with a single click.",
    liveSite: "#",
    days: 6
  },
  {
    title: "Healpred AI",
    description: "AI-based health prediction and recommendation system",
    image: "https://images.pexels.com/photos/26545224/pexels-photo-26545224/free-photo-of-a-3d-model-of-a-ball-on-ice.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: ["ai", "healthtech", "mvp"],
    technologies: ["Python", "Scikit-learn", "Flask", "HTML/CSS"],
    challenge: "Creating an intelligent system that predicts health risks and gives recommendations based on user input.",
    solution: "We trained machine learning models using health datasets and deployed them with Flask. The system takes user input (like age, symptoms, etc.) and returns disease probability along with preventive suggestions.",
    liveSite: "https://healthprediction-1.onrender.com/",
    days: 7
  },
  {
    title: "AI Chatbot",
    description: "Conversational chatbot that answers questions and provides assistance on general topics",
    image: "https://imgs.search.brave.com/WOe5E0dJlZuHWpRVJEC3uSfw3mxkr3bC3sIyp9xRqtM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA2LzA1LzIwLzE0/LzM2MF9GXzYwNTIw/MTQ0N180aFNWcmtk/Z3RQTXhReG1LQ1lP/aVJGMEZuSzRJaWFF/Wi5qcGc",
    category: ["ai", "small", "tool"],
    technologies: ["Python", "NLTK", "Flask", "HTML/CSS"],
    challenge: "Creating a rule-based and ML-enhanced chatbot with basic understanding of natural language queries.",
    solution: "We combined rule-based logic with a small trained model using NLTK to understand and respond to user inputs. The backend is in Flask, while the frontend uses a clean HTML/CSS interface for interaction.",
    liveSite: "#",
    days: 3
  },
  {
    title: "Text to Speech Converter",
    description: "Simple web-based tool to convert typed text into natural-sounding speech",
    image: "https://imgs.search.brave.com/aFBYDOGdoHg-xulJ7-UwdfYvWZLNTR4H6EdsQSxnk-Q/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMtaGIuY2xpcHAu/YWkvc3RhdGljLWZp/bGVzLzgzYzFnYjdn/L3RleHQtdG8tc3Bl/ZWNoLWF1ZGlvLXVw/bG9hZC1pbnRlcmZh/Y2UuanBnLndlYnA",
    category: ["web", "mini", "tool"],
    technologies: ["HTML", "CSS", "JavaScript", "SpeechSynthesis API"],
    challenge: "Developing a lightweight and responsive text-to-speech app that works across browsers.",
    solution: "We used the built-in JavaScript SpeechSynthesis API for generating speech from input text. The app includes voice selection, playback control, and a clean interface with responsive styling.",
    liveSite: "https://tts-by-atharva.netlify.app/",
    days: 2
  },
  {
    title: "Sound Visualizer",
    description: "Real-time visual representation of audio frequencies and beats",
    image: "https://images.pexels.com/photos/164821/pexels-photo-164821.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: ["web", "mini", "creative"],
    technologies: ["HTML", "CSS", "JavaScript", "Web Audio API", "Canvas"],
    challenge: "Building a responsive and animated visualizer that reacts to audio input in real time.",
    solution: "We utilized the Web Audio API and Canvas to process live audio and display dynamic shapes and waveforms. The app includes microphone input and music file support with visual effects synced to sound.",
    liveSite: "https://voice-visualiser-by-atharva.netlify.app/",
    days: 2
  },
  {
    title: "Animated Landing Page with GSAP",
    description: "A modern landing page with smooth animations and scroll-triggered effects using GSAP",
    image: "https://imgs.search.brave.com/uJtTWxf48nPDkrGfSV1raVpb8gaNZFlo9iAc57PAfAA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/ZHJpYmJibGUuY29t/L3VzZXJ1cGxvYWQv/NDQ4OTQyNy9maWxl/L29yaWdpbmFsLTMz/YzMwNWVjMzc1MjQ3/Njc3ZWE1ZDg5OTM3/ZGQ4MjYzLnBuZz9y/ZXNpemU9NDAweDA",
    category: ["web", "small", "design"],
    technologies: ["HTML", "CSS", "JavaScript", "GSAP"],
    challenge: "Designing a highly interactive and animated landing page to showcase branding and content flow.",
    solution: "GSAP was used for scroll animations, fade-ins, and transitions. The page is fully responsive and optimized for performance with elegant design elements and smooth entry animations.",
    liveSite: "https://test-animation-by-atharva.netlify.app/",
    days: 2
  },
  {
    title: "Sorting Algorithm Visualizer",
    description: "Interactive visualizer to demonstrate how various sorting algorithms work in real-time",
    image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: ["web", "mini", "visualisation"],
    technologies: ["HTML", "CSS", "JavaScript"],
    challenge: "Creating a smooth, animated visual representation of sorting algorithms to help learners understand the logic.",
    solution: "We built a responsive and educational tool that visualizes the process of Bubble Sort, Selection Sort, Insertion Sort, and more using DOM manipulation and delay functions. Users can adjust the array size and speed.",
    liveSite: "https://sorting-algo-visualiser-by-atharva.netlify.app/",
    days: 2
  },  
];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = selectedCategory === "all"
    ? projects
    : projects.filter(project => project.category.includes(selectedCategory));

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "web", name: "Web Development" },
    { id: "python", name: "Python Development" },
    { id: "mvp", name: "MVP Projects" },
    { id: "small", name: "Small Projects" },
    { id: "mini", name: "Mini Projects" },
  ];

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
              Our <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Explore our portfolio of web and Python-based projects delivered with
              rapid turnaround times and exceptional quality.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                className={selectedCategory === category.id ? "bg-primary hover:bg-primary/90" : ""}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </Button>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full overflow-hidden border border-border hover:border-ring transition-colors group">
                  <div className="relative h-48 overflow-hidden">
                    <img src={project.image} alt={project.title}className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                    <div className="absolute top-3 right-3 flex space-x-2">
                      {project.category.includes("mvp") && (
                        <Badge className="bg-primary text-primary-foreground">MVP</Badge>
                      )}
                      {project.category.includes("small") && (
                        <Badge className="bg-secondary text-secondary-foreground">Small</Badge>
                      )}
                      {project.category.includes("mini") && (
                        <Badge className="bg-accent text-accent-foreground">Mini</Badge>
                      )}
                    </div>
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <span>Delivered in {project.days} days</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={() => setSelectedProject(project)}
                    >
                      View Details
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Project Details Dialog */}
      <Dialog open={selectedProject !== null} onOpenChange={(open) => !open && setSelectedProject(null)}>
        <DialogContent className="sm:max-w-2xl overflow-auto max-h-[90vh]">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold">{selectedProject.title}</DialogTitle>
                <DialogDescription className="text-lg">
                  {selectedProject.description}
                </DialogDescription>
              </DialogHeader>
              <div className="relative h-64 overflow-hidden rounded-md my-4">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-4">
                <div>
                  <h3 className="text-lg font-bold mb-2 flex items-center">
                    <SearchCode className="h-5 w-5 mr-2 text-primary" />
                    Challenge
                  </h3>
                  <p className="text-muted-foreground">{selectedProject.challenge}</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2 flex items-center">
                    <Code className="h-5 w-5 mr-2 text-primary" />
                    Solution
                  </h3>
                  <p className="text-muted-foreground">{selectedProject.solution}</p>
                </div>
              </div>
              <div className="mb-4">
                <h3 className="text-lg font-bold mb-2 flex items-center">
                  <Database className="h-5 w-5 mr-2 text-primary" />
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, i) => (
                    <Badge key={i} className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                <span>Project Category: {selectedProject.category.map(c => c.charAt(0).toUpperCase() + c.slice(1)).join(", ")}</span>
                <span>Delivered in {selectedProject.days} days</span>
              </div>
              <DialogFooter>
                <Button variant="outline" asChild>
                  <DialogClose>
                    <X className="h-4 w-4 mr-2" />
                    Close
                  </DialogClose>
                </Button>
                <Button
                  className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
                  asChild
                >
                  <a href={selectedProject.liveSite} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Visit Project
                  </a>
                </Button>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}