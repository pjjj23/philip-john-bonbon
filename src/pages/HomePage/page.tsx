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
  ChevronLeft,
  ChevronRight,
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
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    setIsSubmitting(true);
    emailjs
      .sendForm(
        "service_630nyb9",
        "template_v1nuzjs",
        form.current,
        "_nC3mpObsQcam4caA"
      )
      .then(
        () => {
          setModalMessage({
            type: "success",
            title: "Message Sent Successfully!",
            message:
              "Thank you for reaching out. I will get back to you as soon as possible.",
          });
          setShowModal(true);
          setIsSubmitting(false);
          if (form.current) {
            form.current.reset();
          }
        },
        (error) => {
          setModalMessage({
            type: "error",
            title: "Failed to Send Message",
            message:
              "Something went wrong. Please try again or contact me directly via email.",
          });
          setShowModal(true);
          setIsSubmitting(false);
          console.error(error);
        }
      );
  };

  // Sample data
  const projects = [
    {
      id: 1,
      title: "Success Shared Solution",
      description:
        "A web-based lending and savings system built with Django and Firebase. Users can deposit savings, earn interest after a fixed period, and request withdrawals or loans. Admins manage user access and approve transactions. The system includes authentication, role-based access, email notifications (SMTP), and automated interest logic.",
      techStack: ["Django", "HTML5", "CSS3", "Javascript", "Firebase"],
      demoUrl: "https://successsharedsolution.pythonanywhere.com/",
      repoUrl: "https://github.com/pjjj23/MP3-savingsystem",
      images: [
        "images/success-shared-solution-project/cover.png",
        "images/success-shared-solution-project/gallery1.png",
        "images/success-shared-solution-project/gallery2.png",
        "images/success-shared-solution-project/gallery3.png",
        "images/success-shared-solution-project/gallery4.png",
        "images/success-shared-solution-project/gallery5.png",
        "images/success-shared-solution-project/gallery6.png",
        "images/success-shared-solution-project/gallery8.png",
        "images/success-shared-solution-project/gallery7.png",
      ],
      status: "Deployed",
      category: "Web Banking Application",
    },
    {
      id: 2,
      title: "CTU-AC Accredited Boarding houses",
      description:
        "A responsive capstone project website developed for CTU-Argao Campus (CTU-AC), designed to help students conveniently find accredited boarding houses. The platform supports three user roles: Superadmin (SAO), Admin (boarding house owners), and Students each with dedicated functionalities. Key features include virtual tours, real-time room availability tracking, booking management, messaging system, and interactive location viewing, all tailored to enhance the boarding house search and management experience.",
      techStack: [
        "Django",
        "HTML5",
        "CSS3",
        "Google Maps API",
        "Javascript",
        "Firebase",
      ],
      demoUrl: "https://accreditedboardinghousesctuac.pythonanywhere.com/",
      repoUrl:
        "https://github.com/pjjj23/ctu-ac-accreditedboardinghouse-datalink",
      images: [
        "images/ctu-accredited-project/cover.png",
        "images/ctu-accredited-project/gallery1.png",
        "images/ctu-accredited-project/gallery2.png",
        "images/ctu-accredited-project/gallery3.png",
        "images/ctu-accredited-project/gallery4.png",
        "images/ctu-accredited-project/gallery5.png",
        "images/ctu-accredited-project/gallery6.png",
        "images/ctu-accredited-project/gallery7.png",
      ],
      status: "Completed",
      category: "Web Application",
    },
    {
      id: 3,
      title: "Weather Finder",
      description:
        "A web application that delivers real-time weather updates for any location worldwide. It provides accurate and up-to-date information including wind speed, humidity, atmospheric pressure, and visibility based on user input. The application is seamlessly integrated with WeatherAPI.com to ensure reliable and precise weather data.",
      techStack: ["HTML5", "CSS3", "JavaScript", "Weather API"],
      demoUrl: "https://weatherfinder-alpha.vercel.app/",
      repoUrl: "https://github.com/pjjj23/weatherfinder",
      images: [
        "images/weather-finder-project/cover.png",
        "images/weather-finder-project/gallery1.png",
        "images/weather-finder-project/gallery2.png",
      ],
      status: "Deployed",
      category: "Web Application",
    },
    {
      id: 4,
      title: "Plant Quiz Game",
      description:
        "An augmented reality application that allows users to visualize furniture in their space before making a purchase decision. The app uses advanced AR technologies to accurately place 3D models of furniture in the real world, with features for measuring spaces, custom color selection, and saving layouts.",
      techStack: ["HTML5", "CSS3", "JavaScript", "Php"],
      demoUrl: "",
      repoUrl: "https://github.com/pjjj23/PlantQuizGame",
      images: [
        "images/plant-quiz-project/cover.png",
        "images/plant-quiz-project/gallery1.png",
        "images/plant-quiz-project/gallery2.png",
        "images/plant-quiz-project/gallery3.png",
        "images/plant-quiz-project/gallery4.png",
        "images/plant-quiz-project/gallery5.png",
      ],
      status: "Completed",
      category: "Education",
    },
    {
      id: 5,
      title: "Scheduling Project",
      description:
        "A comprehensive analytics dashboard with real-time data visualization, custom charts, and interactive reporting features. The dashboard includes customizable widgets, role-based access control, data export capabilities, and automated report generation to help businesses make data-driven decisions.",
      techStack: ["HTML5", "CSS3", "JavaScript", "Php"],
      demoUrl: "",
      repoUrl: "https://github.com/pjjj23/schedule-project",
      images: [
        "images/scheduling-project/cover.png",
        "images/scheduling-project/gallery1.png",
        "images/scheduling-project/gallery2.png",
        "images/scheduling-project/gallery3.png",
      ],
      status: "Completed",
      category: "Quiz Game Education",
    },
    {
      id: 6,
      title: "Smartpet Feeder",
      description:
        "An IoT-based SmartFeeder that lets you feed your pet remotely using your smartphone, requiring an internet connection for both the device and feeder. It offers convenience and peace of mind for pet owners who are frequently away from home. With real-time control and scheduling features, the SmartFeeder ensures your pet never misses a meal.",
      techStack: ["C++"],
      demoUrl:
        "https://www.canva.com/design/DAGCOKehpQE/Su4TLbBUVErRlamOHxALVQ/edit?utm_content=DAGCOKehpQE&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
      repoUrl: "",
      images: [
        "images/smartpet-feeder-project/cover.png",
        "images/smartpet-feeder-project/gallery3.jfif",
        "images/smartpet-feeder-project/gallery1.jfif",
        "images/smartpet-feeder-project/gallery2.jfif",
        "images/smartpet-feeder-project/gallery4.jfif",
        "images/smartpet-feeder-project/gallery5.jfif",
        "images/smartpet-feeder-project/gallery6.jfif",
        "images/smartpet-feeder-project/gallery7.jfif",
        "images/smartpet-feeder-project/gallery8.jfif",
        "images/smartpet-feeder-project/gallery9.jfif",
      ],
      status: "Completed",
      category: "Quiz Game Education",
    },
    {
      id: 7,
      title: "Alert App",
      description:
        "A mobile application where the users can use to call for emergency numbers listed inside the application. On this application listed numbers are fire departments, police, barangay captain, and ambulance. By selecting who to call, the user will then redirect to their phone contact and automatically pasted the number of their choice. This uses the xamarin essentials.",
      techStack: ["C#", "Xamarin"],
      demoUrl: "",
      repoUrl: "https://github.com/pjjj23/CallEmergencyHotline_Xamarin",
      images: [
        "images/alert-app-project/cover.png",
        "images/alert-app-project/gallery1.jfif",
        "images/alert-app-project/gallery2.jfif",
        "images/alert-app-project/gallery3.jfif",
      ],
      status: "Completed",
      category: "Mobile Application",
    },
    {
      id: 8,
      title: "Alay Trabaho Web",
      description:
        "A community-based mobile application platform connecting barangay residents with local job opportunities. Employers can post job openings, while job seekers can apply and track applications efficiently.",
      techStack: ["React", "Shadcn", "TailwindCss", "Typescript"],
      demoUrl: "",
      repoUrl: "https://github.com/pjjj23/alay-trabaho-web",
      images: [
        "images/alay-trabaho-project/cover.png",
        "images/alay-trabaho-project/gallery1.png",
        "images/alay-trabaho-project/gallery2.png",
        "images/alay-trabaho-project/gallery3.png",
      ],
      status: "Completed",
      category: "Web Application",
    },
  ];

  const experiences = [
    {
      id: 1,
      title: "AI champion for nonprofits",
      company: "Microsoft",
      period: "2025",
      description:
        "Microsoft 365 Copilot Quickstart Trainings for Nonprofit Organizations. <a href='https://drive.google.com/file/d/1c_8ariW8ChP7AK8EURZov2EIzGsMvRz3/view?usp=sharing' target='_blank' rel='noopener noreferrer' class='text-blue-600 dark:text-blue-400 hover:underline'>View Credential</a>",
      technologies: [],
      achievements: [
        "AI & Data Security Awareness.",
        "Workflow Optimization and Hands-on Demonstrations.",
        "Understanding Microsoft 365 Copilot.",
      ],
    },
    {
      id: 2,
      title: "Full Stack Developer Intern",
      company: "RAFI Microfinance",
      period: "Feb 2025 - July 2025",
      description:
        "Interns are divided into two teams one assigned to mobile, and I am assigned to web. The tech stack used is the T3 Stack. I am responsible for creating the Services feature for the admin panel, including adding a dialog to save data to the database and updating the prisma.schema with new fields. <a href='https://drive.google.com/file/d/1TPvslH3CHE7TnXqGIUJIDGlUj6uI_Q80/view?usp=sharing' target='_blank' rel='noopener noreferrer' class='text-blue-600 dark:text-blue-400 hover:underline'>View Credential</a>",
      technologies: [
        "T3 Stack",
        "React.js",
        "tRPC",
        "Prisma",
        "Dart",
        "C#",
        "Tailwind",
        "Scrum",
      ],
      achievements: [
        "Developed a full-stack web feature (Services Page) using the T3 Stack (Next.js, Prisma, TRPC, etc.).",
        "Collaborated in sprint-based development, applying agile methodologies.",
        "Participated in code reviews, retrospectives, and sprint planning.",
        "Developed key personal habits such as taking initiative, goal-oriented planning, effective prioritization, collaborative mindset, active listening, continuous improvement, and fostering team synergy.",
      ],
    },
    {
      id: 3,
      title: "Full Stack Developer",
      company: "Capstone Project",
      period: "Feb 2024 - Jan 2025",
      description:
        "Leader and the Core dev of the group. Responsible for coding the Mockup UI provided by my member and responsibe for the backend logic.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Django",
        "Google Maps API",
        "Firebase",
        "SMTP",
      ],
      achievements: [
        "Oversaw planning, execution, and team coordination.",
        "Handled core development across the full stack.",
        "Resolved technical issues under time constraints.",
        "Handled pressure and setbacks while staying focused.",
        "Built trust in your leadership and technical decisions.",
      ],
    },
    {
      id: 4,
      title: "Accepting Commissions Projects",
      company: "",
      period: "2024 - Present",
      description:
        "Starting to accept commissions online. Joined chats online where students and other workers gather in chat. Clients post about what they want to achieve, and developers reached out. Projects made so far are IoT, websites, mobile-app, desktop apps.",
      technologies: [],
      achievements: [
        "Successfully built and deployed systems for actual clients.",
        "Translated business needs into technical requirements through direct client interaction.",
        "Balanced deadlines and features to meet client expectations.",
        "Earned client trust, which may lead to more opportunities or recommendations.",
      ],
    },
    {
      id: 5,
      title: "9th TOPCIT Philippines(2023-2)/ 1st",
      company: "TOPCIT",
      period: "2023",
      description:
        "Qualified students are invited to take the TOPCIT exam. <a href='https://drive.google.com/file/d/1nz6j412QqdtkY9cqEZZSbemdx9DM5bc-/view?usp=sharing' target='_blank' rel='noopener noreferrer' class='text-blue-600 dark:text-blue-400 hover:underline'>View Credential</a>",
      technologies: [],
      achievements: [
        "Earned placement in the 1st TOPCIT run in the Philippines, showcasing competitive technical proficiency.",
        "Gained structured feedback on strengths and areas to improve based on real-world tech scenarios.",
      ],
    },
  ];

  const skills = [
    {
      name: "Frontend Development",
      icon: <Code className="w-6 h-6" />,
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React",
        "jQuery",
        "Next.js",
        "Flutter",
        "Tailwind",
      ],
      level: 85,
    },
    {
      name: "Backend/Database",
      icon: <Database className="w-6 h-6" />,
      technologies: [
        "Django",
        "PHP",
        "C#",
        "MySQL",
        "Firebase (Auth & DB)",
        "Sqlite",
        "Prisma",
      ],
      level: 83,
    },
    {
      name: "Full-Stack Projects",
      icon: <Monitor className="w-6 h-6" />,
      technologies: [
        "Django + React",
        "PHP + MySQL",
        "Django + Firebase",
        "T3 Stack (React + Prisma + tRPC)",
      ],
      level: 88,
    },
    {
      name: "Tools & Deployment",
      icon: <Smartphone className="w-6 h-6" />,
      technologies: [
        "Git",
        "GitHub",
        "VS Code",
        "Figma",
        "PythonAnywhere",
        "Github",
        "Vercel",
      ],
      level: 80,
    },
  ];

  const stats = [
    {
      number: "5+",
      label: "Years Experience",
      icon: <Calendar className="w-6 h-6" />,
    },
    {
      number: "10+",
      label: "Projects Completed",
      icon: <Award className="w-6 h-6" />,
    },
  ];

  // Loading effect
  useEffect(() => {
    document.title = "My Portfolio | Philip John Bonbon";
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  // Mouse tracking for parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
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
      { threshold: 0.1, rootMargin: "50px" }
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

  <link
    rel="icon"
    type="image/png"
    href="images/philip-john-bonbon/pj-logo.png"
  />
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  const handleDownloadCV = () => {
    // Track download event (you can add analytics here)
    console.log("CV Download initiated");

    // Show success message
    setModalMessage({
      type: "success",
      title: "CV Download Started!",
      message:
        "Your download should begin shortly. If it doesn't start automatically, please check your downloads folder or try again.",
    });
    setShowModal(true);

    // Open the Google Drive download link
    const downloadUrl =
      "https://drive.google.com/uc?export=download&id=1GGmuO82F1WVow5ESMlMpon_TGCL5GyqD";

    // Create a temporary link and click it for download
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.download = "Philip_John_Bonbon_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const MessageModal = ({
    isOpen,
    onClose,
    type,
    title,
    message,
  }: {
    isOpen: boolean;
    onClose: () => void;
    type: string;
    title: string;
    message: string;
  }) => {
    if (!isOpen) return null;

    return (
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            onClose();
          }
        }}
      >
        <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-md w-full shadow-2xl border border-white/20 dark:border-gray-700/20">
          <div className="p-8 text-center">
            <div className="mb-6">
              {type === "success" ? (
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-green-600 dark:text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
              ) : (
                <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-red-600 dark:text-red-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </div>
              )}
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                {title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {message}
              </p>
            </div>

            <button
              onClick={onClose}
              className={`w-full px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 ${
                type === "success"
                  ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:shadow-lg"
                  : "bg-gradient-to-r from-red-500 to-rose-500 text-white hover:shadow-lg"
              }`}
            >
              Got it!
            </button>
          </div>
        </div>
      </div>
    );
  };

  const ProjectModal = ({
    project,
    isOpen,
    onClose,
  }: {
    project: any;
    isOpen: boolean;
    onClose: () => void;
  }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Reset image index when modal opens or project changes
    useEffect(() => {
      if (isOpen) {
        setCurrentImageIndex(0);
      }
    }, [isOpen, project?.id]);

    // Keyboard navigation
    useEffect(() => {
      if (!isOpen) return;

      const handleKeyPress = (e: KeyboardEvent) => {
        if (e.key === "ArrowLeft") {
          prevImage();
        } else if (e.key === "ArrowRight") {
          nextImage();
        } else if (e.key === "Escape") {
          onClose();
        }
      };

      window.addEventListener("keydown", handleKeyPress);
      return () => window.removeEventListener("keydown", handleKeyPress);
    }, [isOpen, currentImageIndex]);

    if (!isOpen) return null;

    const nextImage = () => {
      setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    };

    const prevImage = () => {
      setCurrentImageIndex(
        (prev) => (prev - 1 + project.images.length) % project.images.length
      );
    };

    return (
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          <div className="relative">
            {/* Image Carousel */}
            <div className="relative h-64 overflow-hidden rounded-t-2xl">
              <img
                src={project.images[currentImageIndex]}
                alt={`${project.title} - Image ${currentImageIndex + 1}`}
                className="w-full h-full object-cover transition-transform duration-300"
              />

              {/* Navigation Arrows */}
              {project.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}

              {/* Image Indicators */}
              {project.images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {project.images.map((_: any, index: number) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentImageIndex
                          ? "bg-white scale-125"
                          : "bg-white/50 hover:bg-white/75"
                      }`}
                    />
                  ))}
                </div>
              )}

              {/* Image Counter */}
              {project.images.length > 1 && (
                <div className="absolute top-4 left-4 px-3 py-1 bg-black/50 text-white text-sm rounded-full">
                  {currentImageIndex + 1} / {project.images.length}
                </div>
              )}
            </div>

            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors z-10"
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

            {/* Image Thumbnails */}
            {project.images.length > 1 && (
              <div className="mb-8">
                <h4 className="font-semibold text-xl mb-4 text-gray-900 dark:text-white">
                  Project Gallery
                </h4>
                <div className="grid grid-cols-4 gap-3">
                  {project.images.map((image: string, index: number) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`relative aspect-video rounded-lg overflow-hidden transition-all duration-300 ${
                        index === currentImageIndex
                          ? "ring-2 ring-blue-500 scale-105"
                          : "hover:scale-105 hover:ring-2 hover:ring-gray-300"
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${project.title} - Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                      {index === currentImageIndex && (
                        <div className="absolute inset-0 bg-blue-500/20 flex items-center justify-center">
                          <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                            <svg
                              className="w-3 h-3 text-white"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}
            <div className="flex gap-4">
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r border-2 border-gray-200 dark:border-gray-600 from-white-600 to-white-600 text-white rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300"
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

  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState({
    type: "",
    title: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <div
      className={`min-h-screen transition-all duration-500 ${
        darkMode ? "dark" : ""
      }`}
    >
      {/* Background with animated gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 -z-10">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)`,
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
                {darkMode ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden flex items-center gap-2">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
              >
                {darkMode ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
              >
                {isMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
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
        <section
          id="about"
          className="min-h-screen flex items-center pt-20 px-4 sm:px-6 lg:px-8"
          data-animate
        >
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
                      <div
                        className="flex items-center gap-2 px-3 py-2 bg-orange-500/10 border border-orange-500/20 rounded-lg"
                        title="HTML5"
                      >
                        <Code className="w-4 h-4 text-orange-500" />
                        <span className="text-sm text-orange-500 font-medium">
                          HTML5
                        </span>
                      </div>
                      <div
                        className="flex items-center gap-2 px-3 py-2 bg-blue-500/10 border border-blue-500/20 rounded-lg"
                        title="CSS3"
                      >
                        <Palette className="w-4 h-4 text-blue-500" />
                        <span className="text-sm text-blue-500 font-medium">
                          CSS3
                        </span>
                      </div>
                      <div
                        className="flex items-center gap-2 px-3 py-2 bg-yellow-500/10 border border-yellow-500/20 rounded-lg"
                        title="JavaScript"
                      >
                        <Zap className="w-4 h-4 text-yellow-500" />
                        <span className="text-sm text-yellow-500 font-medium">
                          JS
                        </span>
                      </div>
                      <div
                        className="flex items-center gap-2 px-3 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-lg"
                        title="React"
                      >
                        <Atom className="w-4 h-4 text-cyan-500" />
                        <span className="text-sm text-cyan-500 font-medium">
                          React
                        </span>
                      </div>
                      <div
                        className="flex items-center gap-2 px-3 py-2 bg-gray-900/10 border border-gray-600/20 rounded-lg"
                        title="Next.js"
                      >
                        <Rocket className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                        <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">
                          Next.js
                        </span>
                      </div>
                      <div
                        className="flex items-center gap-2 px-3 py-2 bg-orange-600/10 border border-orange-600/20 rounded-lg"
                        title="jQuery"
                      >
                        <Braces className="w-4 h-4 text-orange-600" />
                        <span className="text-sm text-orange-600 font-medium">
                          jQuery
                        </span>
                      </div>

                      {/* Backend */}
                      <div
                        className="flex items-center gap-2 px-3 py-2 bg-purple-600/10 border border-purple-600/20 rounded-lg"
                        title="PHP"
                      >
                        <Server className="w-4 h-4 text-purple-600" />
                        <span className="text-sm text-purple-600 font-medium">
                          PHP
                        </span>
                      </div>
                      <div
                        className="flex items-center gap-2 px-3 py-2 bg-green-700/10 border border-green-700/20 rounded-lg"
                        title="Django"
                      >
                        <Layers className="w-4 h-4 text-green-700" />
                        <span className="text-sm text-green-700 font-medium">
                          Django
                        </span>
                      </div>
                      <div
                        className="flex items-center gap-2 px-3 py-2 bg-purple-700/10 border border-purple-700/20 rounded-lg"
                        title="C# .NET"
                      >
                        <Code2 className="w-4 h-4 text-purple-700" />
                        <span className="text-sm text-purple-700 font-medium">
                          C#
                        </span>
                      </div>
                      <div
                        className="flex items-center gap-2 px-3 py-2 bg-blue-600/10 border border-blue-600/20 rounded-lg"
                        title="Python"
                      >
                        <FileCode className="w-4 h-4 text-blue-600" />
                        <span className="text-sm text-blue-600 font-medium">
                          Python
                        </span>
                      </div>

                      {/* Database & Tools */}
                      <div
                        className="flex items-center gap-2 px-3 py-2 bg-orange-600/10 border border-orange-600/20 rounded-lg"
                        title="MySQL"
                      >
                        <Database className="w-4 h-4 text-orange-600" />
                        <span className="text-sm text-orange-600 font-medium">
                          MySQL
                        </span>
                      </div>
                      <div
                        className="flex items-center gap-2 px-3 py-2 bg-teal-600/10 border border-teal-600/20 rounded-lg"
                        title="Firebase"
                      >
                        <Flame className="w-4 h-4 text-teal-600" />
                        <span className="text-sm text-teal-600 font-medium">
                          Firebase
                        </span>
                      </div>
                      <div
                        className="flex items-center gap-2 px-3 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-lg"
                        title="SQLite"
                      >
                        <Database className="w-4 h-4 text-cyan-500" />
                        <span className="text-sm text-cyan-500 font-medium">
                          SQLite
                        </span>
                      </div>

                      {/* Mobile & Design */}
                      <div
                        className="flex items-center gap-2 px-3 py-2 bg-blue-400/10 border border-blue-400/20 rounded-lg"
                        title="Flutter"
                      >
                        <Smartphone className="w-4 h-4 text-blue-400" />
                        <span className="text-sm text-blue-400 font-medium">
                          Flutter
                        </span>
                      </div>
                      <div
                        className="flex items-center gap-2 px-3 py-2 bg-purple-500/10 border border-purple-500/20 rounded-lg"
                        title="Figma"
                      >
                        <Figma className="w-4 h-4 text-purple-500" />
                        <span className="text-sm text-purple-500 font-medium">
                          Figma
                        </span>
                      </div>

                      {/* Version Control */}
                      <div
                        className="flex items-center gap-2 px-3 py-2 bg-gray-800/10 border border-gray-600/20 rounded-lg"
                        title="Git"
                      >
                        <GitBranch className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                        <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">
                          Git
                        </span>
                      </div>
                      <div
                        className="flex items-center gap-2 px-3 py-2 bg-yellow-500/10 border border-yellow-500/20 rounded-lg"
                        title="Scrum"
                      >
                        <Workflow className="w-4 h-4 text-yellow-500" />
                        <span className="text-sm text-yellow-500 font-medium">
                          Scrum/Agile
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 items-center lg:items-start">
                    <button
                      onClick={() => scrollToSection("projects")}
                      className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
                    >
                      Featured Projects I made
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>

                    <button
                      onClick={handleDownloadCV}
                      className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 flex items-center gap-2 hover:scale-105 transform"
                    >
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
                          <img
                            src="images/philip-john-bonbon.jpg"
                            alt="Philip John Bonbon"
                          />
                        </div>
                      </div>

                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        Philip John Bonbon
                      </h2>
                      <p className="text-lg text-blue-600 dark:text-blue-400 mb-6">
                        Software Developer • Cebu, Philippines • Cebu
                        Technological University-Argao Campus (2025)
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
                        {
                          icon: Github,
                          href: "https://github.com/pjjj23",
                          label: "GitHub",
                        },
                        {
                          icon: Mail,
                          href: "mailto:pjjbonbon@gmail.com",
                          label: "Email",
                        },
                        {
                          icon: Phone,
                          href: "tel:+639959578322",
                          label: "Phone",
                        },
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
                visibleItems.has("about")
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
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
                        style={{
                          width: visibleItems.has("about")
                            ? `${skill.level}%`
                            : "0%",
                        }}
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
        <section
          id="projects"
          className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-gray-800/50"
          data-animate
        >
          <div className="max-w-7xl mx-auto">
            <div
              data-animate
              className={`text-center mb-16 transition-all duration-1000 ${
                visibleItems.has("projects")
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
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
                        src={project.images[0]}
                        alt={project.title}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-blue-600/90 text-white text-sm rounded-full backdrop-blur-sm">
                          {project.status}
                        </span>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                        <span className="text-white font-medium">
                          Click to view details
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-full">
                          {project.category}
                        </span>
                        <div className="flex items-center gap-1 text-yellow-500">
                          <Star className="w-4 h-4 fill-current" />
                          <span className="text-xs text-gray-600 dark:text-gray-400">
                            Featured
                          </span>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3 mb-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.techStack
                          .slice(0, 3)
                          .map((tech: string, techIndex: number) => (
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
        <section
          id="experience"
          className="py-20 px-4 sm:px-6 lg:px-8"
          data-animate
        >
          <div className="max-w-4xl mx-auto">
            <div
              data-animate
              className={`text-center mb-16 transition-all duration-1000 ${
                visibleItems.has("experience")
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                My Experiences
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
                      <div className="flex items-center gap-3">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                          {experience.title}
                        </h3>
                        {experience.company === "Microsoft" &&(
                          <span className="px-2 py-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-medium rounded-full">
                            CERTIFIED
                          </span>
                        )}
                        {experience.company === "RAFI Microfinance" &&(
                          <span className="px-2 py-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-medium rounded-full">
                            CERTIFIED
                          </span>
                        )}
                        {experience.company === "TOPCIT" &&(
                          <span className="px-2 py-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-medium rounded-full">
                            CERTIFIED
                          </span>
                        )}
                      </div>
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

                    <div
                      className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed"
                      dangerouslySetInnerHTML={{
                        __html: experience.description,
                      }}
                    />

                    {experience.achievements && (
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                          Key Achievements:
                        </h4>
                        <ul className="space-y-2">
                          {experience.achievements.map(
                            (achievement, achIndex) => (
                              <li
                                key={achIndex}
                                className="flex items-center gap-2 text-gray-600 dark:text-gray-400"
                              >
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                {achievement}
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    )}

                    {experience.technologies &&
                      experience.technologies.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map(
                            (tech: string, techIndex: number) => (
                              <span
                                key={techIndex}
                                className="px-3 py-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                              >
                                {tech}
                              </span>
                            )
                          )}
                        </div>
                      )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-gray-800/50"
          data-animate
        >
          <div className="max-w-4xl mx-auto">
            <div
              data-animate
              className={`text-center mb-16 transition-all duration-1000 ${
                visibleItems.has("contact")
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Let's Work Together
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Ready to bring your project to life? Let's discuss how I can
                help
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
                        <p className="font-medium text-gray-900 dark:text-white">
                          Email
                        </p>
                        <a
                          href="mailto:pjjbonbon@gmail.com"
                          className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                          pjjbonbon@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 group">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">
                          Phone
                        </p>
                        <a
                          href="tel:+639959578322"
                          className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                          +63 995 957 8322
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 group">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">
                          Location
                        </p>
                        <p className="text-gray-600 dark:text-gray-300">
                          Cebu City, Philippines
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Follow me on social media:
                    </p>
                    <div className="flex gap-4">
                      {[
                        {
                          icon: Github,
                          href: "https://github.com/pjjj23",
                          label: "GitHub",
                          color: "from-white-600 to-gray-800",
                        },
                        {
                          icon: Mail,
                          href: "mailto:pjjbonbon@gmail.com",
                          label: "Email",
                          color: "from-white-500 to-pink-600",
                        },
                        {
                          icon: Phone,
                          href: "tel:+639959578322",
                          label: "Phone",
                          color: "from-white-500 to-green-600",
                        },
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
                        Subject Matter *
                      </label>
                      <select
                        name="subject"
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700/50 dark:text-white transition-all duration-300 backdrop-blur-sm"
                      >
                        <option value={"Web Application"}>
                          Web Application
                        </option>
                        <option value={"E-Commerece Platform"}>
                          E-Commerce Platform
                        </option>
                        <option value={"Management System"}>
                          Management System
                        </option>
                        <option value={"API Development"}>
                          API Development
                        </option>
                        <option
                          value={"Subject for this message is other matter"}
                        >
                          Other matter
                        </option>
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
                        placeholder="Tell me about your message, for collaboration or anything..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full px-6 py-4 rounded-xl focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300 font-medium flex items-center justify-center gap-2 ${
                        isSubmitting
                          ? "bg-gray-400 cursor-not-allowed"
                          : "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-xl transform hover:scale-105"
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <svg
                            className="w-5 h-5 animate-spin"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                            ></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        "Send Message"
                      )}
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
                A Software developer with applied experience in full-stack
                development, specializing in Python/Django, React, and Firebase.
                Delivered production-level systems during internship and
                freelance engagements. Proficient in schema design, API
                integration, and interface implementation. Adaptable to new
                technologies and capable of learning domain-specific stacks as
                required. Focused on building maintainable, scalable, and
                deployment-ready applications.
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
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                Quick Links
              </h4>
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
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                Accepts Commission Project
              </h4>
              <div className="space-y-2 text-gray-600 dark:text-gray-400">
                <p>Web Applications</p>
                <p>Desktop Apps</p>
                <p>Mobile Applications</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 dark:border-gray-700 pt-8 text-center">
            <p className="text-gray-600 dark:text-gray-400">
              © 2025 Philip John Bonbon. All rights reserved.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
              I love sushi!
            </p>
          </div>
        </div>
      </footer>

      {/* Message Modal */}
      <MessageModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        type={modalMessage.type}
        title={modalMessage.title}
        message={modalMessage.message}
      />
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
