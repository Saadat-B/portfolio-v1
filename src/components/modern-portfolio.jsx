"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Github,
  Linkedin,
  Mail,
  Moon,
  Sun,
  ExternalLink,
  Menu,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const techIcons = [
  { name: "React", icon: "⚛️" },
  { name: "JavaScript", icon: "JS" },
  { name: "TypeScript", icon: "TS" },
  { name: "Node.js", icon: "🟢" },
  { name: "Python", icon: "🐍" },
  { name: "GraphQL", icon: "◈" },
  { name: "Next.js", icon: "N" },
  { name: "TailwindCSS", icon: "🌊" },
];

export default function ModernPortfolio() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
    document.documentElement.classList.toggle("dark");
  };

  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const projectsInView = useInView(projectsRef, { once: true, amount: 0.3 });
  const contactInView = useInView(contactRef, { once: true, amount: 0.3 });

  return (
    <div
      className={`min-h-screen bg-background text-foreground ${
        isDarkMode ? "dark" : ""
      }`}
    >
      <style jsx global>{`
        @keyframes accent-color-animation {
          0% {
            color: #7928ca;
          }
          25% {
            color: #ff0080;
          }
          50% {
            color: #0070f3;
          }
          75% {
            color: #00dfd8;
          }
          100% {
            color: #7928ca;
          }
        }
        .accent-text {
          animation: accent-color-animation 20s infinite;
        }
      `}</style>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <motion.h1
            className="text-2xl font-bold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Saadat
          </motion.h1>
          <nav className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              About
            </Button>
            <Button variant="ghost" size="sm">
              Projects
            </Button>
            <Button variant="ghost" size="sm">
              Contact
            </Button>
            {/* <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button> */}
          </nav>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
                <SheetDescription>
                  Navigate through the portfolio
                </SheetDescription>
              </SheetHeader>
              <div className="grid gap-4 py-4">
                <Button variant="ghost" size="sm">
                  About
                </Button>
                <Button variant="ghost" size="sm">
                  Projects
                </Button>
                <Button variant="ghost" size="sm">
                  Contact
                </Button>
                <Button variant="ghost" size="sm" onClick={toggleTheme}>
                  {isDarkMode ? "Light Mode" : "Dark Mode"}
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <main className="container mx-auto px-4 pt-24 pb-12">
        {/* Combined Hero, About, and Skills Section */}
        <section className="min-h-[calc(100vh-6rem)] py-16 flex flex-col justify-center">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl font-bold mb-4">
                Hello 👋🏻, I'm <span className="accent-text">Saadat</span>
              </h2>
              <p className="text-2xl text-muted-foreground mb-6">
                I make the web a little more{" "}
                <span className="accent-text">awesome</span> 🚀
              </p>
              <p className="text-lg mb-6">
                Full-stack JavaScript developer (2+ years of experience) with
                expertise in building dynamic, scalable web applications using
                modern frameworks like React, Next.js, Node.js, Express, Prisma,
                and PostgreSQL. Passionate about crafting efficient,
                user-focused solutions. 💻✨
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <Button>View Projects</Button>
                <Button variant="outline">Contact Me</Button>
              </div>
              <h3 className="text-2xl font-semibold mb-4">
                <span className="accent-text">Skills</span>
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {techIcons.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    className="bg-card text-card-foreground rounded-lg p-2 text-center text-sm"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {tech.name}
                  </motion.div>
                ))}
              </div>
            </motion.div>
            {/* <div className="relative w-full h-[400px] overflow-hidden rounded-xl">
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                style={{
                  transform: `translate(${
                    (mousePosition.x - window.innerWidth / 2) / 30
                  }px, ${(mousePosition.y - window.innerHeight / 2) / 30}px)`,
                }}
              >
                {[...Array(3)].map((_, index) => (
                  <motion.div
                    key={index}
                    className="absolute rounded-full border border-primary/50"
                    style={{
                      width: `${(index + 1) * 100}px`,
                      height: `${(index + 1) * 100}px`,
                    }}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.1, 0.3, 0.1],
                    }}
                    transition={{
                      duration: 4 + index,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                ))}
                {techIcons.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    className="absolute flex items-center justify-center w-12 h-12 rounded-full bg-card text-card-foreground shadow-md"
                    animate={{
                      rotate: 360,
                      x:
                        Math.cos((index / techIcons.length) * Math.PI * 2) *
                        120,
                      y:
                        Math.sin((index / techIcons.length) * Math.PI * 2) *
                        120,
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    {tech.icon}
                  </motion.div>
                ))}
              </motion.div>
            </div> */}

            <DotLottieReact
              src="https://lottie.host/1f0ea62d-2937-4bce-ad99-614ee1e1133e/rTTC7FCYKY.lottie"
              loop
              autoplay
            />
          </div>
        </section>

        {/* Projects Section */}
        <motion.section
          ref={projectsRef}
          className="py-16"
          initial={{ opacity: 0, y: 50 }}
          animate={projectsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold mb-8">
            Featured <span className="accent-text">Projects</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "E-commerce Platform",
                description:
                  "A full-stack e-commerce solution with real-time inventory management.",
                image: "/placeholder.svg?height=200&width=400",
              },
              {
                title: "Task Management App",
                description:
                  "A React-based task management application with drag-and-drop functionality.",
                image: "/placeholder.svg?height=200&width=400",
              },
              {
                title: "Portfolio Website",
                description:
                  "A modern, responsive portfolio website built with Next.js and TailwindCSS.",
                image: "/placeholder.svg?height=200&width=400",
              },
              {
                title: "Weather Dashboard",
                description:
                  "A weather dashboard that provides real-time weather data and forecasts.",
                image: "/placeholder.svg?height=200&width=400",
              },
            ].map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={projectsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card>
                  <CardContent className="p-0">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <div className="p-6">
                      <h4 className="text-xl font-semibold mb-2">
                        {project.title}
                      </h4>
                      <p className="text-muted-foreground mb-4">
                        {project.description}
                      </p>
                      <div className="flex space-x-2">
                        <Button variant="secondary" size="sm">
                          View Project <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          Source Code
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          ref={contactRef}
          className="py-16"
          initial={{ opacity: 0, y: 50 }}
          animate={contactInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold mb-8">
            Get in <span className="accent-text">Touch</span>
          </h3>
          <Card>
            <CardContent className="p-6">
              <p className="text-lg mb-4">
                I'm always open to new opportunities and collaborations. Feel
                free to reach out!
              </p>
              <div className="flex flex-wrap gap-4">
                <Button>
                  <Mail className="mr-2 h-4 w-4" /> Email Me
                </Button>
                <Button variant="outline">
                  <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                </Button>
                <Button variant="outline">
                  <Github className="mr-2 h-4 w-4" /> GitHub
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.section>
      </main>

      <footer className="bg-muted py-6">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          © 2024 Saadat Badgujar. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
