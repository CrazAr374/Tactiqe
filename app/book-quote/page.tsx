"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { CheckCircle, ArrowRight, ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const steps = [
  { id: "project-type", title: "Project Type" },
  { id: "technology", title: "Technology" },
  { id: "budget", title: "Budget" },
  { id: "timeline", title: "Timeline" },
  { id: "contact", title: "Contact Details" },
];

export default function BookQuotePage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    projectType: "",
    technology: [],
    budget: 2000,
    timeline: "",
    name: "",
    email: "",
    phone: "",
    details: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      handleSubmit();
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    try {
      const projectTypeLabel = formData.projectType === "mvp" ? "MVP Development" :
                              formData.projectType === "small" ? "Small Project" :
                              formData.projectType === "mini" ? "Mini Project" : "Custom Project";
      
      const timelineLabel = formData.timeline === "asap" ? "As soon as possible" :
                            formData.timeline === "within-month" ? "Within a month" :
                            formData.timeline === "flexible" ? "Flexible" : "Specific date";
      
      const response = await fetch('https://formsubmit.co/14aa2197a38857dd34078f7311986fe8', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          projectType: projectTypeLabel,
          technologies: formData.technology.join(", "),
          budget: `₹${formData.budget.toLocaleString()}`,
          timeline: timelineLabel,
          details: formData.details || "None provided",
          _subject: `Quote Request: ${projectTypeLabel}`,
          _captcha: 'false',
          _template: 'table'
        })
      });

      if (response.ok) {
        setSubmitted(true);
        toast({
          title: "Quote request received!",
          description: "We'll reach out to you within 6 hours.",
        });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      toast({
        title: "Error submitting quote request",
        description: "Please try again or email us directly at tactiqe@gmail.com",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const updateFormData = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const toggleTechnology = (tech) => {
    if (formData.technology.includes(tech)) {
      updateFormData(
        "technology",
        formData.technology.filter((t) => t !== tech)
      );
    } else {
      updateFormData("technology", [...formData.technology, tech]);
    }
  };

  const isCurrentStepValid = () => {
    switch (currentStep) {
      case 0:
        return formData.projectType !== "";
      case 1:
        return formData.technology.length > 0;
      case 2:
        return true; // Budget has default value
      case 3:
        return formData.timeline !== "";
      case 4:
        return (
          formData.name !== "" && 
          formData.email !== "" && 
          formData.phone !== ""
        );
      default:
        return true;
    }
  };

  return (
    <section className="pt-32 pb-20 bg-background">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h1 className="mb-6">
            Book a <span className="gradient-text">Quote</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Fill out the form below to get a personalized quote for your project.
            We'll reach out within 6 hours to discuss your needs.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {!submitted ? (
            <>
              <div className="mb-8">
                <div className="flex justify-between mb-2">
                  {steps.map((step, index) => (
                    <div key={index} className="text-center">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2 ${
                          index === currentStep
                            ? "bg-primary text-primary-foreground"
                            : index < currentStep
                            ? "bg-primary/20 text-primary"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {index + 1}
                      </div>
                      <span
                        className={`text-xs hidden sm:block ${
                          index === currentStep
                            ? "text-foreground font-medium"
                            : "text-muted-foreground"
                        }`}
                      >
                        {step.title}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="relative h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="absolute top-0 left-0 h-full bg-primary transition-all duration-300"
                    style={{
                      width: `${((currentStep + 1) / steps.length) * 100}%`,
                    }}
                  />
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="border border-border">
                    <CardHeader>
                      <CardTitle>{steps[currentStep].title}</CardTitle>
                      <CardDescription>
                        {currentStep === 0 && "Select the type of project you need"}
                        {currentStep === 1 && "Select the technologies you want to use"}
                        {currentStep === 2 && "Select your budget range"}
                        {currentStep === 3 && "When do you need the project completed?"}
                        {currentStep === 4 && "Provide your contact details"}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      {/* Step 1: Project Type */}
                      {currentStep === 0 && (
                        <RadioGroup
                          value={formData.projectType}
                          onValueChange={(value) => updateFormData("projectType", value)}
                          className="space-y-4"
                        >
                          {[
                            {
                              value: "mvp",
                              title: "MVP Development",
                              description: "Full product with core features (10 days)",
                            },
                            {
                              value: "small",
                              title: "Small Project",
                              description: "Multi-feature implementation (5 days)",
                            },
                            {
                              value: "mini",
                              title: "Mini Project",
                              description: "Single feature or component (2 days)",
                            },
                            {
                              value: "custom",
                              title: "Custom Project",
                              description: "Specific requirements & timeline",
                            },
                          ].map((option) => (
                            <div
                              key={option.value}
                              className={`flex items-center space-x-3 rounded-lg border p-4 cursor-pointer hover:border-primary transition-colors ${
                                formData.projectType === option.value
                                  ? "border-primary bg-primary/5"
                                  : "border-border"
                              }`}
                              onClick={() => updateFormData("projectType", option.value)}
                            >
                              <RadioGroupItem
                                value={option.value}
                                id={option.value}
                                className="sr-only"
                              />
                              <div className="flex-1">
                                <Label
                                  htmlFor={option.value}
                                  className="text-base font-medium cursor-pointer"
                                >
                                  {option.title}
                                </Label>
                                <p className="text-sm text-muted-foreground">
                                  {option.description}
                                </p>
                              </div>
                              {formData.projectType === option.value && (
                                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                              )}
                            </div>
                          ))}
                        </RadioGroup>
                      )}

                      {/* Step 2: Technology */}
                      {currentStep === 1 && (
                        <div className="space-y-4">
                          <p className="text-sm text-muted-foreground mb-4">
                            Select all that apply
                          </p>
                          <div className="grid grid-cols-2 gap-3">
                            {[
                              "React", "Next.js", "TypeScript", "Node.js", 
                              "Python", "Django", "Flask", "MongoDB", 
                              "PostgreSQL", "Firebase", "AWS", "Other"
                            ].map((tech) => (
                              <div
                                key={tech}
                                className={`rounded-lg border p-3 cursor-pointer flex items-center space-x-2 hover:border-primary transition-colors ${
                                  formData.technology.includes(tech)
                                    ? "border-primary bg-primary/5"
                                    : "border-border"
                                }`}
                                onClick={() => toggleTechnology(tech)}
                              >
                                <div className="flex-1">{tech}</div>
                                {formData.technology.includes(tech) && (
                                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Step 3: Budget */}
                      {currentStep === 2 && (
                        <div className="space-y-8">
                          <div>
                            <div className="flex justify-between mb-2">
                              <span className="text-sm text-muted-foreground">Budget (₹)</span>
                              <span className="text-sm font-medium">₹{formData.budget.toLocaleString()}</span>
                            </div>
                            <Slider
                              value={[formData.budget]}
                              onValueChange={(value) => updateFormData("budget", value[0])}
                              min={200}
                              max={50000}
                              step={100}
                              className="w-full"
                            />
                            <div className="flex justify-between mt-2">
                              <span className="text-xs text-muted-foreground">₹200</span>
                              <span className="text-xs text-muted-foreground">₹50,000+</span>
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-3 gap-4 pt-4">
                            {[
                              { value: 2000, label: "₹2,000" },
                              { value: 10000, label: "₹10,000" },
                              { value: 25000, label: "₹25,000" },
                            ].map((preset) => (
                              <Button
                                key={preset.value}
                                type="button"
                                variant={formData.budget === preset.value ? "default" : "outline"}
                                className={formData.budget === preset.value ? "bg-primary" : ""}
                                onClick={() => updateFormData("budget", preset.value)}
                              >
                                {preset.label}
                              </Button>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Step 4: Timeline */}
                      {currentStep === 3 && (
                        <div className="space-y-4">
                          <RadioGroup
                            value={formData.timeline}
                            onValueChange={(value) => updateFormData("timeline", value)}
                            className="space-y-4"
                          >
                            {[
                              {
                                value: "asap",
                                title: "As soon as possible",
                                description: "We'll start immediately",
                              },
                              {
                                value: "within-month",
                                title: "Within a month",
                                description: "Flexible timeline, but soon",
                              },
                              {
                                value: "flexible",
                                title: "Flexible",
                                description: "No specific deadline",
                              },
                              {
                                value: "specific",
                                title: "Specific date",
                                description: "I have a fixed deadline",
                              },
                            ].map((option) => (
                              <div
                                key={option.value}
                                className={`flex items-center space-x-3 rounded-lg border p-4 cursor-pointer hover:border-primary transition-colors ${
                                  formData.timeline === option.value
                                    ? "border-primary bg-primary/5"
                                    : "border-border"
                                }`}
                                onClick={() => updateFormData("timeline", option.value)}
                              >
                                <RadioGroupItem
                                  value={option.value}
                                  id={`timeline-${option.value}`}
                                  className="sr-only"
                                />
                                <div className="flex-1">
                                  <Label
                                    htmlFor={`timeline-${option.value}`}
                                    className="text-base font-medium cursor-pointer"
                                  >
                                    {option.title}
                                  </Label>
                                  <p className="text-sm text-muted-foreground">
                                    {option.description}
                                  </p>
                                </div>
                                {formData.timeline === option.value && (
                                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                                )}
                              </div>
                            ))}
                          </RadioGroup>
                          
                          {formData.timeline === "specific" && (
                            <div className="pt-4">
                              <Label htmlFor="deadline">Deadline</Label>
                              <Input 
                                id="deadline" 
                                type="date" 
                                className="mt-1" 
                                min={new Date().toISOString().split('T')[0]}
                              />
                            </div>
                          )}
                        </div>
                      )}

                      {/* Step 5: Contact */}
                      {currentStep === 4 && (
                        <div className="space-y-4">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="name">Name</Label>
                              <Input
                                id="name"
                                value={formData.name}
                                onChange={(e) => updateFormData("name", e.target.value)}
                                placeholder="Your name"
                                required
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="email">Email</Label>
                              <Input
                                id="email"
                                type="email"
                                value={formData.email}
                                onChange={(e) => updateFormData("email", e.target.value)}
                                placeholder="Your email"
                                required
                              />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="phone">Phone</Label>
                            <Input
                              id="phone"
                              value={formData.phone}
                              onChange={(e) => updateFormData("phone", e.target.value)}
                              placeholder="Your phone number"
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="details">Project Details</Label>
                            <Textarea
                              id="details"
                              value={formData.details}
                              onChange={(e) => updateFormData("details", e.target.value)}
                              placeholder="Additional details about your project..."
                              className="h-32"
                            />
                          </div>
                        </div>
                      )}
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button
                        variant="outline"
                        onClick={handleBack}
                        disabled={currentStep === 0}
                      >
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Back
                      </Button>
                      <Button
                        onClick={handleNext}
                        disabled={!isCurrentStepValid() || isSubmitting}
                        className={
                          currentStep === steps.length - 1
                            ? "bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                            : ""
                        }
                      >
                        {currentStep === steps.length - 1 ? "Submit" : "Next"}
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              </AnimatePresence>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="border border-border text-center">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Quote Request Submitted!</CardTitle>
                  <CardDescription className="text-lg">
                    Thank you for your interest in our services
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">
                    We've received your project details and will get back to you within 6 hours
                    to discuss your needs and provide a personalized quote.
                  </p>
                  <div className="bg-muted p-4 rounded-lg mb-6 max-w-sm mx-auto">
                    <p className="font-medium">Project Summary:</p>
                    <p className="text-sm text-muted-foreground">
                      Type: {formData.projectType === "mvp" ? "MVP Development" :
                            formData.projectType === "small" ? "Small Project" :
                            formData.projectType === "mini" ? "Mini Project" : "Custom Project"}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Budget: ₹{formData.budget.toLocaleString()}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Timeline: {formData.timeline === "asap" ? "As soon as possible" :
                              formData.timeline === "within-month" ? "Within a month" :
                              formData.timeline === "flexible" ? "Flexible" : "Specific date"}
                    </p>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-center">
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSubmitted(false);
                      setCurrentStep(0);
                      setFormData({
                        projectType: "",
                        technology: [],
                        budget: 2000,
                        timeline: "",
                        name: "",
                        email: "",
                        phone: "",
                        details: "",
                      });
                    }}
                  >
                    Request Another Quote
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}