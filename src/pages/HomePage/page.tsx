import React, { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  Moon,
  Sun,
  ExternalLink,
  Github,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Code,
  Database,
  Monitor,
  Smartphone,
  Download,
  Menu,
  X,
  ArrowRight,
  ChevronDown,
  Star,
  Award, 
  Atom,
  Code2,
  Figma,
  FileCode,
  Flame,
  GitBranch,
  Layers,
  Palette,
  Rocket,
  Server,
  Zap, 
  Braces,
  Workflow,
} from "lucide-react";

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [visibleItems, setVisibleItems] = useState(new Set());
  const [isLoading, setIsLoading] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const form = useRef<HTMLFormElement>(null);

  // Send email
  const sendEmail = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_630nyb9",
        "template_v1nuzjs",
        form.current,
        "_nC3mpObsQcam4caA"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current?.reset();
        },
        (error) => {
          alert("Failed to send message. Please try again.");
          console.error("EmailJS Error:", error.text);
        }
      );
  };

  type Project = {
    id: number;
    title: string;
    description: string;
    techStack: string[];
    demoUrl: string;
    repoUrl: string;
    image: string;
    status: string;
    category: string;
    };

  // Sample data
  const projects: Project[] = [
    {
      id: 1,
      title: "CTU Argao Boarding House Locator",
      description: "A comprehensive system designed for CTU Argao students to locate and book accredited boarding houses. Features real-time availability, virtual tours, and secure payment integration.",
      techStack: ["Django", "React", "PostgreSQL", "Google Maps API", "Stripe"],
      demoUrl: "https://demo.example.com",
      repoUrl: "https://github.com/username/project1",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&h=300&fit=crop",
      status: "Live Project",
      category: "Web Application"
    },
    {
      id: 2,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with advanced inventory management, real-time analytics, and AI-powered product recommendations. Handles 10k+ transactions monthly.",
      techStack: ["PHP", "MySQL", "JavaScript", "Bootstrap", "PayPal API"],
      demoUrl: "https://demo2.example.com",
      repoUrl: "https://github.com/username/project2",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      status: "In Development",
      category: "E-Commerce"
    },
    {
      id: 3,
      title: "Student Management System",
      description: "Comprehensive academic management platform with grade tracking, attendance monitoring, and parent-teacher communication features. Serves 500+ students.",
      techStack: ["Django", "HTML5", "CSS3", "JavaScript", "SQLite"],
      demoUrl: "https://demo3.example.com",
      repoUrl: "https://github.com/username/project3",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=500&h=300&fit=crop",
      status: "Completed",
      category: "Education"
    },
  ];

  const experiences = [
    {
      id: 1,
      title: "Full-Stack Developer",
      company: "CTU Argao Campus",
      period: "2023 - Present",
      description: "Lead developer for the boarding house locator system. Collaborated with university administration to identify requirements and delivered a complete solution from concept to deployment.",
      technologies: ["Django", "React", "PostgreSQL", "Git"],
      achievements: ["Reduced search time by 80%", "Increased booking efficiency by 60%"]
    },
    {
      id: 2,
      title: "Web Developer",
      company: "Freelance Projects",
      period: "2021 - 2023",
      description: "Developed multiple client websites and web applications. Specialized in e-commerce solutions and business management systems for local businesses in Cebu.",
      technologies: ["PHP", "MySQL", "JavaScript", "HTML/CSS"],
      achievements: ["Delivered 15+ successful projects", "98% client satisfaction rate"]
    },
    {
      id: 3,
      title: "Junior Developer",
      company: "Local Tech Startup",
      period: "2020 - 2021",
      description: "Started as an intern and grew into a junior developer role. Gained hands-on experience with full-stack development and agile methodologies.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP"],
      achievements: ["Promoted within 6 months", "Led 2 junior interns"]
    },
  ];

  const skills = [
    {
      name: "Frontend Development",
      icon: <Code className="w-6 h-6" />,
      technologies: ["HTML5", "CSS3", "JavaScript", "React", "jQuery", "Next.js", "Flutter", "Tailwind"],
      level: 85
    },
    {
      name: "Backend Development",
      icon: <Database className="w-6 h-6" />,
      technologies: ["Django", "PHP", "C#", "MySQL", "Firebase (Auth & DB)", "Sqlite", "Prisma"],
      level: 83
    },
    {
      name: "Full-Stack Projects",
      icon: <Monitor className="w-6 h-6" />,
      technologies: ["Django + React", "PHP + MySQL", "Django + Firebase", "T3 Stack (React + Prisma + tRPC)"],
      level: 88
    },
    {
      name: "Tools & Deployment",
      icon: <Smartphone className="w-6 h-6" />,
      technologies: ["Git", "GitHub", "VS Code", "Figma", "PythonAnywhere", "Github", "Vercel"],
      level: 80
    },
  ];

  const stats = [
    { number: "5+", label: "Years Experience", icon: <Calendar className="w-6 h-6" /> },
    { number: "20+", label: "Projects Completed", icon: <Award className="w-6 h-6" /> }, 
  ];

  // Loading effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  // Mouse tracking for parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleItems((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    const elements = document.querySelectorAll("[data-animate]");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [isLoading]);

  // Loading Component  
//   if (isLoading) {
//     return (
//       <div className="fixed inset-0 bg-gradient-to-br flex items-center justify-center z-5">
//         <div className="text-center">
//           <img 
//             src="https://cdn.dribbble.com/userupload/20289598/file/original-b4266d331bdba055ff510c7b0a6c938f.gif" 
//             alt="Loading..." 
//             className="w-32 h-32 mx-auto mb-8"
//           />
//           <div className="text-white text-2xl font-bold mb-4">Loading Portfolio...</div>
//           <div className="w-64 h-2 bg-white/20 rounded-full mx-auto overflow-hidden">
//             <div className="h-full bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse"></div>
//           </div>
//         </div>
//       </div>
//     );
//   }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  type ProjectModalProps = {
    project: Project;
    isOpen: boolean;
    onClose: () => void;
    };

  const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          <div className="relative">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover rounded-t-2xl"
            />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="absolute bottom-4 left-4">
              <span className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full">
                {project.status}
              </span>
            </div>
          </div>
          
          <div className="p-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                {project.title}
              </h3>
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-sm rounded-full">
                {project.category}
              </span>
            </div>
            
            <p className="text-gray-600 dark:text-gray-300 text-lg mb-6 leading-relaxed">
              {project.description}
            </p>
            
            <div className="mb-8">
              <h4 className="font-semibold text-xl mb-4 text-gray-900 dark:text-white">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-3">
                {project.techStack.map((tech: string, index: number) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="flex gap-4">
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                <ExternalLink className="w-5 h-5" />
                View Live Demo
              </a>
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300"
              >
                <Github className="w-5 h-5" />
                Source Code
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className={`min-h-screen transition-all duration-500 ${darkMode ? "dark" : ""}`}>
      {/* Background with animated gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 -z-10">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)`
          }}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              PJ Bonbon
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {["about", "projects", "experience", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize font-medium transition-all duration-300 hover:scale-105 ${
                    activeSection === section
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  }`}
                >
                  {section}
                </button>
              ))}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-105"
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden flex items-center gap-2">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-t border-gray-200/50 dark:border-gray-700/50">
            <div className="px-4 py-2 space-y-1">
              {["about", "projects", "experience", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left px-3 py-3 capitalize font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

    <main className="px-4 sm:px-6 lg:px-8 lg:ml-16">
      {/* Hero Section */}
      <section id="about" className="min-h-screen flex items-center pt-20 px-4 sm:px-6 lg:px-8" data-animate>
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Hero Content */}
            <div
              data-animate
              className={`transition-all duration-1000 ${
                visibleItems.has("about")
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              <div className="text-center lg:text-left">
                <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-500/20 mb-6">
                  <span className="text-blue-600 dark:text-blue-400 font-medium">
                    Software Developer
                  </span>
                </div>
                
                <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                  Philip John
                  <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                    Bonbon
                  </span>
                </h1>
                
                {/* Tech Stack Icons */}
                <div className="mb-8">
                  <div className="flex flex-wrap gap-3 justify-center lg:justify-start max-w-2xl">
                    {/* Frontend */}
                    <div className="flex items-center gap-2 px-3 py-2 bg-orange-500/10 border border-orange-500/20 rounded-lg" title="HTML5">
                      <Code className="w-4 h-4 text-orange-500" />
                      <span className="text-sm text-orange-500 font-medium">HTML5</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-2 bg-blue-500/10 border border-blue-500/20 rounded-lg" title="CSS3">
                      <Palette className="w-4 h-4 text-blue-500" />
                      <span className="text-sm text-blue-500 font-medium">CSS3</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-2 bg-yellow-500/10 border border-yellow-500/20 rounded-lg" title="JavaScript">
                      <Zap className="w-4 h-4 text-yellow-500" />
                      <span className="text-sm text-yellow-500 font-medium">JS</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-lg" title="React">
                      <Atom className="w-4 h-4 text-cyan-500" />
                      <span className="text-sm text-cyan-500 font-medium">React</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-2 bg-gray-900/10 border border-gray-600/20 rounded-lg" title="Next.js">
                      <Rocket className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                      <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">Next.js</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-2 bg-orange-600/10 border border-orange-600/20 rounded-lg" title="jQuery">
                      <Braces className="w-4 h-4 text-orange-600" />
                      <span className="text-sm text-orange-600 font-medium">jQuery</span>
                    </div>
                    
                    {/* Backend */}
                    <div className="flex items-center gap-2 px-3 py-2 bg-purple-600/10 border border-purple-600/20 rounded-lg" title="PHP">
                      <Server className="w-4 h-4 text-purple-600" />
                      <span className="text-sm text-purple-600 font-medium">PHP</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-2 bg-green-700/10 border border-green-700/20 rounded-lg" title="Django">
                      <Layers className="w-4 h-4 text-green-700" />
                      <span className="text-sm text-green-700 font-medium">Django</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-2 bg-purple-700/10 border border-purple-700/20 rounded-lg" title="C# .NET">
                      <Code2 className="w-4 h-4 text-purple-700" />
                      <span className="text-sm text-purple-700 font-medium">C#</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-2 bg-blue-600/10 border border-blue-600/20 rounded-lg" title="Python">
                      <FileCode className="w-4 h-4 text-blue-600" />
                      <span className="text-sm text-blue-600 font-medium">Python</span>
                    </div>
                    
                    {/* Database & Tools */}
                    <div className="flex items-center gap-2 px-3 py-2 bg-orange-600/10 border border-orange-600/20 rounded-lg" title="MySQL">
                      <Database className="w-4 h-4 text-orange-600" />
                      <span className="text-sm text-orange-600 font-medium">MySQL</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-2 bg-teal-600/10 border border-teal-600/20 rounded-lg" title="Firebase">
                      <Flame className="w-4 h-4 text-teal-600" />
                      <span className="text-sm text-teal-600 font-medium">Firebase</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-lg" title="SQLite">
                      <Database className="w-4 h-4 text-cyan-500" />
                      <span className="text-sm text-cyan-500 font-medium">SQLite</span>
                    </div>
                    
                    {/* Mobile & Design */}
                    <div className="flex items-center gap-2 px-3 py-2 bg-blue-400/10 border border-blue-400/20 rounded-lg" title="Flutter">
                      <Smartphone className="w-4 h-4 text-blue-400" />
                      <span className="text-sm text-blue-400 font-medium">Flutter</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-2 bg-purple-500/10 border border-purple-500/20 rounded-lg" title="Figma">
                      <Figma className="w-4 h-4 text-purple-500" />
                      <span className="text-sm text-purple-500 font-medium">Figma</span>
                    </div>
                    
                    {/* Version Control */}
                    <div className="flex items-center gap-2 px-3 py-2 bg-gray-800/10 border border-gray-600/20 rounded-lg" title="Git">
                      <GitBranch className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                      <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">Git</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-2 bg-yellow-500/10 border border-yellow-500/20 rounded-lg" title="Scrum">
                      <Workflow className="w-4 h-4 text-yellow-500" />
                      <span className="text-sm text-yellow-500 font-medium">Scrum/Agile</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 items-center lg:items-start">
                  <button 
                    onClick={() => scrollToSection('projects')}
                    className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
                  >
                    Relevant Experiences
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  
                  <button className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 flex items-center gap-2">
                    <Download className="w-5 h-5" />
                    Download CV
                  </button>
                </div>
              </div>
            </div>

            {/* Right Side - Profile Card */}
            <div
              data-animate
              className={`transition-all duration-1000 delay-300 ${
                visibleItems.has("about")
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              <div className="relative">
                {/* Floating background elements */}
                <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
                
                <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/20 dark:border-gray-700/20">
                  <div className="text-center mb-8">
                    <div className="w-48 h-48 mx-auto mb-6 rounded-3xl overflow-hidden bg-gradient-to-br p-1 scale-130">
                      <div className="w-full h-full rounded-3xl flex items-center justify-center"> 
                          <img src="images/philip-john-bonbon.jpg" alt="Philip John Bonbon" /> 
                      </div>
                    </div>
                    
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      Philip John Bonbon
                    </h2>
                    <p className="text-lg text-blue-600 dark:text-blue-400 mb-6">
                      Software Developer • Cebu, Philippines • Cebu Technological University-Argao Campus (2025)
                    </p>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {stats.map((stat, index) => (
                      <div 
                        key={index}
                        className="text-center p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl hover:scale-105 transition-transform duration-300"
                      >
                        <div className="text-blue-600 dark:text-blue-400 mb-2 flex justify-center">
                          {stat.icon}
                        </div>
                        <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                          {stat.number}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-300">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div> 

                  {/* Social Links */}
                  <div className="flex justify-center gap-4">
                    {[
                      { icon: Github, href: "#", label: "GitHub" },
                      { icon: Mail, href: "mailto:pj.bonbon@example.com", label: "Email" },
                      { icon: Phone, href: "tel:+63123456789", label: "Phone" }
                    ].map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-xl flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-110"
                        title={social.label}
                      >
                        <social.icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-6 h-6 text-gray-400" />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" data-animate>
        <div className="max-w-7xl mx-auto">
          <div
            data-animate
            className={`text-center mb-16 transition-all duration-1000 ${
              visibleItems.has("about") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              My Expertise
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Technologies I work with to bring ideas to life
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                data-animate
                className={`group transition-all duration-1000 ${
                  visibleItems.has("about")
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 border border-white/20 dark:border-gray-700/20">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                      {skill.icon}
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white text-lg">
                      {skill.name}
                    </h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {skill.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: visibleItems.has("about") ? `${skill.level}%` : '0%' }}
                    ></div>
                  </div>
                  <div className="text-right text-sm text-gray-500 dark:text-gray-400 mt-1">
                    {skill.level}%
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-gray-800/50" data-animate>
        <div className="max-w-7xl mx-auto">
          <div
            data-animate
            className={`text-center mb-16 transition-all duration-1000 ${
              visibleItems.has("projects") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Real-world solutions I've built and deployed
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                data-animate
                className={`group cursor-pointer transition-all duration-1000 ${
                  visibleItems.has("projects")
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
                onClick={() => setSelectedProject(project)}
              >
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:scale-105 border border-white/20 dark:border-gray-700/20">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-blue-600/90 text-white text-sm rounded-full backdrop-blur-sm">
                        {project.status}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                      <span className="text-white font-medium">Click to view details</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-full">
                        {project.category}
                      </span>
                      <div className="flex items-center gap-1 text-yellow-500">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="text-xs text-gray-600 dark:text-gray-400">Featured</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techStack.slice(0, 3).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-full">
                          +{project.techStack.length - 3} more
                        </span>
                      )}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        View Project →
                      </span>
                      <div className="flex gap-2">
                        <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                        <Github className="w-4 h-4 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8" data-animate>
        <div className="max-w-4xl mx-auto">
          <div
            data-animate
            className={`text-center mb-16 transition-all duration-1000 ${
              visibleItems.has("experience") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Professional Journey
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              My career progression and key achievements
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>

            {experiences.map((experience, index) => (
              <div
                key={experience.id}
                data-animate
                className={`relative mb-12 transition-all duration-1000 ${
                  visibleItems.has("experience")
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-10"
                }`}
                style={{ transitionDelay: `${index * 300}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white dark:border-gray-900 shadow-lg"></div>

                {/* Content */}
                <div className="ml-16 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-102 border border-white/20 dark:border-gray-700/20">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {experience.title}
                    </h3>
                    <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 mt-2 sm:mt-0">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm font-medium bg-blue-100 dark:bg-blue-900 px-3 py-1 rounded-full">
                        {experience.period}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-4">
                    {experience.company}
                  </p>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    {experience.description}
                  </p>
                  
                  {experience.achievements && (
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {experience.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-gray-800/50" data-animate>
        <div className="max-w-4xl mx-auto">
          <div
            data-animate
            className={`text-center mb-16 transition-all duration-1000 ${
              visibleItems.has("contact") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Let's Work Together
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Ready to bring your project to life? Let's discuss how I can help
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div
              data-animate
              className={`transition-all duration-1000 ${
                visibleItems.has("contact")
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-white/20 dark:border-gray-700/20">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                  Get In Touch
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">Email</p>
                      <a href="mailto:pj.bonbon@example.com" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        pj.bonbon@example.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">Phone</p>
                      <a href="tel:+63123456789" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        +63 123 456 7890
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">Location</p>
                      <p className="text-gray-600 dark:text-gray-300">
                        Cebu City, Philippines
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-gray-600 dark:text-gray-300 mb-4">Follow me on social media:</p>
                  <div className="flex gap-4">
                    {[
                      { icon: Github, href: "#", label: "GitHub", color: "from-white-600 to-gray-800" },
                      { icon: Mail, href: "mailto:pj.bonbon@example.com", label: "Email", color: "from-white-500 to-pink-600" },
                      { icon: Phone, href: "tel:+63123456789", label: "Phone", color: "from-white-500 to-green-600" }
                    ].map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        className={`w-12 h-12 bg-gradient-to-r rounded-xl flex items-center justify-center text-white hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl`}
                        title={social.label}
                      >
                        <social.icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div
              data-animate
              className={`transition-all duration-1000 ${
                visibleItems.has("contact")
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-white/20 dark:border-gray-700/20">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                  Send a Message
                </h3>
                
                <form ref={form} onSubmit={sendEmail} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="user_name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700/50 dark:text-white transition-all duration-300 backdrop-blur-sm"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="user_email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700/50 dark:text-white transition-all duration-300 backdrop-blur-sm"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Project Type
                    </label>
                    <select name="subject" className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700/50 dark:text-white transition-all duration-300 backdrop-blur-sm">
                      <option value={"Web Application"}>Web Application</option>
                      <option value={"E-Commerece Platform"}>E-Commerce Platform</option>
                      <option value={"Management System"}>Management System</option>
                      <option value={"API Development"}>API Development</option>
                      <option value={"Subject for this message is other matter"}>Other matter</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Message Details *
                    </label>
                    <textarea
                      rows={5}
                      name="message"
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700/50 dark:text-white transition-all duration-300 resize-none backdrop-blur-sm"
                      placeholder="Tell me about your project requirements, timeline, and budget..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-xl focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300 font-medium transform hover:scale-105"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      </main>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-200/50 dark:border-gray-700/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                PJ Bonbon
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Full-Stack Developer specializing in Django, PHP, and modern web technologies. 
                Building digital solutions that make a difference.
              </p>
              <div className="flex gap-4">
                {[Github, Mail, Phone].map((Icon, index) => (
                  <div
                    key={index}
                    className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 cursor-pointer"
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h4>
              <div className="space-y-2">
                {["About", "Projects", "Experience", "Contact"].map((link) => (
                  <button
                    key={link}
                    onClick={() => scrollToSection(link.toLowerCase())}
                    className="block text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {link}
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Services</h4>
              <div className="space-y-2 text-gray-600 dark:text-gray-400">
                <p>Web Application Development</p>
                <p>E-Commerce Solutions</p>
                <p>Database Design</p>
                <p>API Development</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-200 dark:border-gray-700 pt-8 text-center">
            <p className="text-gray-600 dark:text-gray-400">
              © 2025 PJ Bonbon. All rights reserved. Built with React & Tailwind CSS.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
              Designed with ❤️ in Cebu, Philippines
            </p>
          </div>
        </div>
      </footer>

      {/* Project Modal */}
      <ProjectModal 
        project={selectedProject} 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </div>
    );
  };

export default Portfolio;