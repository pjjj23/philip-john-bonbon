import { useState, useEffect, useRef, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faUserCircle, faFolderOpen, faChartLine, faFileAlt, faTerminal, 
  faFilePdf, faTrashAlt, faFolderTree, faCamera, faDesktop, faHdd, 
  faDownload, faImage, faEnvelope, faPhone, faGraduationCap,
  faStar, faChartBar, faMapMarkerAlt, faTrophy, faLaptopCode, faBriefcase,
  faCloudSun, faPaw, faBell, faBuilding, faSearch, faArrowLeft, faArrowRight,
  faTimes, faInfoCircle, faLock, faVolumeUp, faWifi, faBatteryFull,
  faNavicon, faFolder, faMusic, faVideo, faFileArchive, faCog, faUser, 
  faLink, faCode, faExternalLinkAlt, faTimesCircle, faChevronLeft, faChevronRight
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faWindows } from "@fortawesome/free-brands-svg-icons";

const WALLPAPER = "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop";

const userInfo = {
  name: "Philip John Bonbon",
  role: "Software Developer",
  location: "Cebu City, Philippines",
  email: "pjjjbonbon@gmail.com",
  phone: "+63 995 957 8322",
  github: "github.com/pjjj23",
  education: "CTU - Argao Campus (2025)",
  experience: "5+ Years",
  projects: "10+ Completed",
  bio: "Full-stack developer with applied experience in Python/Django, React, and Firebase. Delivered production-level systems during internship and freelance engagements. Proficient in schema design, API integration, and interface implementation.",
};

const projectsData = [
  {
    id: 1,
    title: "Success Shared Solution",
    description: "A web-based lending and savings system built with Django and Firebase. Users can deposit savings, earn interest after a fixed period, and request withdrawals or loans. Admins manage user access and approve transactions. The system includes authentication, role-based access, email notifications (SMTP), and automated interest logic.",
    techStack: ["Django", "HTML5", "CSS3", "Javascript", "Firebase"],
    demoUrl: "https://successsharedsolution.pythonanywhere.com/",
    repoUrl: "https://github.com/pjjj23/MP3-savingsystem",
    images: [
      "images/success-shared-solution-project/cover.png",
      "images/success-shared-solution-project/gallery1.png", 
      "images/success-shared-solution-project/gallery3.png",
      "images/success-shared-solution-project/gallery4.png",
      "images/success-shared-solution-project/gallery5.png",
      "images/success-shared-solution-project/gallery6.png",
      "images/success-shared-solution-project/gallery8.png",
      "images/success-shared-solution-project/gallery7.png",
    ],
    status: "Deployed",
    category: "Web Banking Application",
    icon: faChartLine
  },
  {
    id: 2,
    title: "CTU-AC Accredited Boarding houses",
    description: "A responsive capstone project website developed for CTU-Argao Campus (CTU-AC), designed to help students conveniently find accredited boarding houses. The platform supports three user roles: Superadmin (SAO), Admin (boarding house owners), and Students each with dedicated functionalities. Key features include virtual tours, real-time room availability tracking, booking management, messaging system, and interactive location viewing, all tailored to enhance the boarding house search and management experience.",
    techStack: ["Django", "HTML5", "CSS3", "Google Maps API", "Javascript", "Firebase"],
    demoUrl: "https://accreditedboardinghousesctuac.pythonanywhere.com/",
    repoUrl: "https://github.com/pjjj23/ctu-ac-accreditedboardinghouse-datalink",
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
    icon: faBuilding
  },
  {
    id: 3,
    title: "Weather Finder",
    description: "A web application that delivers real-time weather updates for any location worldwide. It provides accurate and up-to-date information including wind speed, humidity, atmospheric pressure, and visibility based on user input. The application is seamlessly integrated with WeatherAPI.com to ensure reliable and precise weather data.",
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
    icon: faCloudSun
  },
  {
    id: 4,
    title: "Plant Quiz Game",
    description: "An interactive quiz game about plants and botany. Test your knowledge about different plant species, their characteristics, and growing conditions.",
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
    icon: faGraduationCap
  },
  {
    id: 5,
    title: "Scheduling Project",
    description: "A comprehensive scheduling system with real-time calendar management, appointment booking, and automated reminders.",
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
    category: "Project Management",
    icon: faBriefcase
  },
  {
    id: 6,
    title: "Smartpet Feeder",
    description: "An IoT-based SmartFeeder that lets you feed your pet remotely using your smartphone, requiring an internet connection for both the device and feeder. It offers convenience and peace of mind for pet owners who are frequently away from home. With real-time control and scheduling features, the SmartFeeder ensures your pet never misses a meal.",
    techStack: ["C++"],
    demoUrl: "https://www.canva.com/design/DAGCOKehpQE/Su4TLbBUVErRlamOHxALVQ/edit",
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
    category: "IoT",
    icon: faPaw
  },
  {
    id: 7,
    title: "Alert App",
    description: "A mobile application where the users can use to call for emergency numbers listed inside the application. On this application listed numbers are fire departments, police, barangay captain, and ambulance. By selecting who to call, the user will then redirect to their phone contact and automatically pasted the number of their choice. This uses the xamarin essentials.",
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
    icon: faBell
  },
  {
    id: 8,
    title: "Alay Trabaho Web",
    description: "A community-based mobile application platform connecting barangay residents with local job opportunities. Employers can post job openings, while job seekers can apply and track applications efficiently.",
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
    icon: faBriefcase
  },
];

const experiencesData = [
  {
    id: 1,
    title: "AI champion for nonprofits",
    company: "Microsoft",
    period: "2025",
    description: "Microsoft 365 Copilot Quickstart Trainings for Nonprofit Organizations.",
    credentialUrl: "https://drive.google.com/file/d/1c_8ariW8ChP7AK8EURZov2EIzGsMvRz3/view?usp=sharing",
    technologies: [],
    achievements: [
      "AI & Data Security Awareness.",
      "Workflow Optimization and Hands-on Demonstrations.",
      "Understanding Microsoft 365 Copilot.",
    ],
    icon: faTrophy,
    color: "#0078D4"
  },
  {
    id: 2,
    title: "Full Stack Developer Intern",
    company: "RAFI Microfinance",
    period: "Feb 2025 - July 2025",
    description: "Interns are divided into two teams one assigned to mobile, and I am assigned to web. The tech stack used is the T3 Stack. I am responsible for creating the Services feature for the admin panel, including adding a dialog to save data to the database and updating the prisma.schema with new fields.",
    credentialUrl: "https://drive.google.com/file/d/1TPvslH3CHE7TnXqGIUJIDGlUj6uI_Q80/view?usp=sharing",
    technologies: ["T3 Stack", "React.js", "tRPC", "Prisma", "Dart", "C#", "Tailwind", "Scrum"],
    achievements: [
      "Developed a full-stack web feature (Services Page) using the T3 Stack (Next.js, Prisma, TRPC, etc.).",
      "Collaborated in sprint-based development, applying agile methodologies.",
      "Participated in code reviews, retrospectives, and sprint planning.",
      "Developed key personal habits such as taking initiative, goal-oriented planning, effective prioritization, collaborative mindset, active listening, continuous improvement, and fostering team synergy.",
    ],
    icon: faLaptopCode,
    color: "#107C10"
  },
  {
    id: 3,
    title: "Full Stack Developer",
    company: "Capstone Project",
    period: "Feb 2024 - Jan 2025",
    description: "Leader and the Core dev of the group. Responsible for coding the Mockup UI provided by my member and responsible for the backend logic.",
    credentialUrl: null,
    technologies: ["HTML", "CSS", "JavaScript", "Django", "Google Maps API", "Firebase", "SMTP"],
    achievements: [
      "Oversaw planning, execution, and team coordination.",
      "Handled core development across the full stack.",
      "Resolved technical issues under time constraints.",
      "Handled pressure and setbacks while staying focused.",
      "Built trust in your leadership and technical decisions.",
    ],
    icon: faGraduationCap,
    color: "#8764B8"
  },
  {
    id: 4,
    title: "Accepting Commissions Projects",
    company: "Freelance",
    period: "2024 - Present",
    description: "Starting to accept commissions online. Joined chats online where students and other workers gather in chat. Clients post about what they want to achieve, and developers reached out. Projects made so far are IoT, websites, mobile-app, desktop apps.",
    credentialUrl: null,
    technologies: [],
    achievements: [
      "Successfully built and deployed systems for actual clients.",
      "Translated business needs into technical requirements through direct client interaction.",
      "Balanced deadlines and features to meet client expectations.",
      "Earned client trust, which may lead to more opportunities or recommendations.",
    ],
    icon: faBriefcase,
    color: "#D83B01"
  },
  {
    id: 5,
    title: "9th TOPCIT Philippines(2023-2)/ 1st",
    company: "TOPCIT",
    period: "2023",
    description: "Qualified students are invited to take the TOPCIT exam.",
    credentialUrl: "https://drive.google.com/file/d/1nz6j412QqdtkY9cqEZZSbemdx9DM5bc-/view?usp=sharing",
    technologies: [],
    achievements: [
      "Earned placement in the 1st TOPCIT run in the Philippines, showcasing competitive technical proficiency.",
      "Gained structured feedback on strengths and areas to improve based on real-world tech scenarios.",
    ],
    icon: faTrophy,
    color: "#FFB900"
  },
];

const skills = {
  Frontend: ["React", "Next.js", "TypeScript", "TailwindCSS", "HTML/CSS"],
  Backend: ["Django", "Python", "PHP", "C#"],
  Database: ["MySQL", "Firebase", "SQLite"],
  Tools: ["Git", "Arduino", "Xamarin", "REST APIs"],
};

const desktopIcons = [
  { id: "user", name: "This User", icon: faUserCircle, type: "user" },
  { id: "projects", name: "Projects", icon: faFolderOpen, type: "projects" },
  { id: "experience", name: "Experience", icon: faChartLine, type: "experience" },
  { id: "skills", name: "Skills.txt", icon: faFileAlt, type: "skills" },
  { id: "cmd", name: "Terminal", icon: faTerminal, type: "cmd" },
  { id: "resume", name: "Resume.pdf", icon: faFilePdf, type: "resume" },
  { id: "recycle", name: "Recycle Bin", icon: faTrashAlt, type: "recycle" },
  { id: "filemanager", name: "File Manager", icon: faFolderTree, type: "filemanager" },
  { id: "camera", name: "Camera", icon: faCamera, type: "camera" },
];

// Project Detail Modal Component
function ProjectDetail({ project, onClose }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: "rgba(0,0,0,0.8)",
      zIndex: 10000,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 20
    }} onClick={onClose}>
      <div style={{
        background: "#fff",
        borderRadius: 12,
        maxWidth: 900,
        maxHeight: "90vh",
        overflow: "auto",
        width: "100%",
        position: "relative"
      }} onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} style={{
          position: "absolute",
          top: 10,
          right: 10,
          background: "rgba(0,0,0,0.5)",
          border: "none",
          borderRadius: "50%",
          width: 36,
          height: 36,
          cursor: "pointer",
          color: "#fff",
          zIndex: 1
        }}>
          <FontAwesomeIcon icon={faTimesCircle} />
        </button>
        
        {/* Image Gallery */}
        {project.images && project.images.length > 0 && (
          <div style={{ position: "relative", background: "#000", borderRadius: "12px 12px 0 0" }}>
            <img 
              src={project.images[currentImageIndex]} 
              alt={project.title}
              style={{ width: "100%", height: "auto", maxHeight: "400px", objectFit: "contain" }}
              onError={(e) => { e.target.src = "https://via.placeholder.com/800x400?text=Image+Not+Found"; }}
            />
            {project.images.length > 1 && (
              <>
                <button onClick={prevImage} style={{
                  position: "absolute",
                  left: 10,
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "rgba(0,0,0,0.5)",
                  border: "none",
                  borderRadius: "50%",
                  width: 40,
                  height: 40,
                  cursor: "pointer",
                  color: "#fff"
                }}>
                  <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <button onClick={nextImage} style={{
                  position: "absolute",
                  right: 10,
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "rgba(0,0,0,0.5)",
                  border: "none",
                  borderRadius: "50%",
                  width: 40,
                  height: 40,
                  cursor: "pointer",
                  color: "#fff"
                }}>
                  <FontAwesomeIcon icon={faChevronRight} />
                </button>
                <div style={{
                  position: "absolute",
                  bottom: 10,
                  left: "50%",
                  transform: "translateX(-50%)",
                  background: "rgba(0,0,0,0.7)",
                  padding: "4px 12px",
                  borderRadius: 20,
                  color: "#fff",
                  fontSize: 12
                }}>
                  {currentImageIndex + 1} / {project.images.length}
                </div>
              </>
            )}
          </div>
        )}
        
        <div style={{ padding: 24 }}>
          <h2 style={{ fontSize: 24, marginBottom: 8, color: "#1a1a1a" }}>{project.title}</h2>
          <div style={{ display: "flex", gap: 8, marginBottom: 16, flexWrap: "wrap" }}>
            <span style={{ fontSize: 12, padding: "4px 12px", background: project.status === "Deployed" ? "#e6f4ea" : "#e8f0fe", color: project.status === "Deployed" ? "#1e7e34" : "#1a73e8", borderRadius: 20 }}>{project.status}</span>
            <span style={{ fontSize: 12, padding: "4px 12px", background: "#f0f0f0", color: "#666", borderRadius: 20 }}>{project.category}</span>
          </div>
          <p style={{ color: "#555", lineHeight: 1.6, marginBottom: 20 }}>{project.description}</p>
          
          <div style={{ marginBottom: 20 }}>
            <h3 style={{ fontSize: 16, marginBottom: 10, display: "flex", alignItems: "center", gap: 8 }}>
              <FontAwesomeIcon icon={faCode} /> Tech Stack
            </h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {project.techStack.map((tech) => (
                <span key={tech} style={{ background: "#f0f0f0", padding: "4px 12px", borderRadius: 6, fontSize: 12 }}>{tech}</span>
              ))}
            </div>
          </div>
          
          <div style={{ display: "flex", gap: 12 }}>
            {project.demoUrl && (
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "#0078D4",
                color: "#fff",
                padding: "8px 20px",
                borderRadius: 6,
                textDecoration: "none",
                fontSize: 14
              }}>
                <FontAwesomeIcon icon={faExternalLinkAlt} /> Live Demo
              </a>
            )}
            {project.repoUrl && (
              <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "#333",
                color: "#fff",
                padding: "8px 20px",
                borderRadius: 6,
                textDecoration: "none",
                fontSize: 14
              }}>
                <FontAwesomeIcon icon={faGithub} /> GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// Experience Detail Modal
function ExperienceDetail({ experience, onClose }) {
  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: "rgba(0,0,0,0.8)",
      zIndex: 10000,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 20
    }} onClick={onClose}>
      <div style={{
        background: "#fff",
        borderRadius: 12,
        maxWidth: 700,
        maxHeight: "90vh",
        overflow: "auto",
        width: "100%",
        position: "relative",
        padding: 24
      }} onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} style={{
          position: "absolute",
          top: 10,
          right: 10,
          background: "rgba(0,0,0,0.5)",
          border: "none",
          borderRadius: "50%",
          width: 36,
          height: 36,
          cursor: "pointer",
          color: "#fff"
        }}>
          <FontAwesomeIcon icon={faTimesCircle} />
        </button>
        
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
          <FontAwesomeIcon icon={experience.icon} style={{ fontSize: 32, color: experience.color }} />
          <div>
            <h2 style={{ fontSize: 22, marginBottom: 4 }}>{experience.title}</h2>
            <div style={{ color: experience.color, fontWeight: 500 }}>{experience.company}</div>
            <div style={{ color: "#888", fontSize: 13 }}>{experience.period}</div>
          </div>
        </div>
        
        <p style={{ color: "#555", lineHeight: 1.6, marginBottom: 20 }}>{experience.description}</p>
        
        {experience.credentialUrl && (
          <a href={experience.credentialUrl} target="_blank" rel="noopener noreferrer" style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: "#0078D4",
            color: "#fff",
            padding: "8px 20px",
            borderRadius: 6,
            textDecoration: "none",
            fontSize: 14,
            marginBottom: 20
          }}>
            <FontAwesomeIcon icon={faLink} /> View Credential
          </a>
        )}
        
        {experience.technologies.length > 0 && (
          <div style={{ marginBottom: 20 }}>
            <h3 style={{ fontSize: 16, marginBottom: 10 }}>Technologies</h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {experience.technologies.map((tech) => (
                <span key={tech} style={{ background: "#f0f0f0", padding: "4px 12px", borderRadius: 6, fontSize: 12 }}>{tech}</span>
              ))}
            </div>
          </div>
        )}
        
        {experience.achievements.length > 0 && (
          <div>
            <h3 style={{ fontSize: 16, marginBottom: 10 }}>Key Achievements</h3>
            <ul style={{ paddingLeft: 20 }}>
              {experience.achievements.map((achievement, idx) => (
                <li key={idx} style={{ marginBottom: 8, color: "#555" }}>{achievement}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

function FileManagerWindow({ onNotify }) {
  const [currentPath, setCurrentPath] = useState("This PC");
  const [selectedItem, setSelectedItem] = useState(null);

  const sidebarItems = [
    { name: "This PC", icon: faDesktop, path: "This PC" },
    { name: "Local Disk (C:)", icon: faHdd, path: "C:" },
    { name: "Downloads", icon: faDownload, path: "Downloads" },
    { name: "Pictures", icon: faImage, path: "Pictures" },
  ];

  const personalPhotos = [
    { name: "PJ Profile", file: "pj.jpg", type: "image", icon: faImage },
    { name: "PJ Photo 2", file: "pj32.jpg", type: "image", icon: faImage },
    { name: "PJ Photo 3", file: "pj-2.jpg", type: "image", icon: faImage },
  ];

  const getItemsForPath = () => {
    const files = {
      "This PC": [
        { name: "Local Disk (C:)", type: "folder", icon: faHdd },
        { name: "Downloads", type: "folder", icon: faDownload },
        { name: "Pictures", type: "folder", icon: faImage },
        { name: "Documents", type: "folder", icon: faFolder }
      ],
      "C:": [
        { name: "Program Files", type: "folder", icon: faFolder },
        { name: "Windows", type: "folder", icon: faFolder },
        { name: "Users", type: "folder", icon: faUser },
        { name: "pagefile.sys", type: "file", icon: faFileAlt }
      ],
      "Downloads": [
        { name: "project_archive.zip", type: "file", icon: faFileArchive },
        { name: "setup.exe", type: "file", icon: faCog },
        { name: "notes.txt", type: "file", icon: faFileAlt },
        { name: "image.png", type: "file", icon: faImage }
      ],
      "Pictures": personalPhotos.map(photo => ({
        name: photo.name,
        type: "image",
        icon: faImage,
        imagePath: `images/myself/${photo.file}`
      }))
    };
    return files[currentPath] || files["This PC"];
  };

  const items = getItemsForPath();

  const openItem = (item) => {
    if (item.type === "folder") {
      if (item.name === "Local Disk (C:)") setCurrentPath("C:");
      else if (item.name === "Downloads") setCurrentPath("Downloads");
      else if (item.name === "Pictures") setCurrentPath("Pictures");
      else if (item.name === "Documents") onNotify?.("Opening Documents folder");
      else setCurrentPath(item.name);
    } else if (item.type === "image" && item.imagePath) {
      window.open(item.imagePath, "_blank");
      onNotify?.(`Opening ${item.name}`);
    } else {
      onNotify?.(`Opening ${item.name}`);
    }
  };

  return (
    <div style={{ display: "flex", height: "100%", background: "#fff", fontFamily: "'Segoe UI', sans-serif" }}>
      <div style={{ width: 220, background: "#f8f8f8", borderRight: "1px solid #ddd", padding: "12px 8px" }}>
        <div style={{ marginBottom: 20 }}>
          <div style={{ fontWeight: 600, fontSize: 12, color: "#6e6e6e", marginBottom: 10, paddingLeft: 8 }}>
            <FontAwesomeIcon icon={faNavicon} style={{ marginRight: 8, fontSize: 11 }} /> Quick Access
          </div>
          {sidebarItems.map((item) => (
            <div
              key={item.name}
              onClick={() => setCurrentPath(item.path)}
              style={{
                display: "flex", alignItems: "center", gap: 12, padding: "8px 12px",
                borderRadius: 8, cursor: "pointer", marginBottom: 2,
                background: currentPath === item.path ? "#e0e0e0" : "transparent",
                transition: "background 0.1s",
              }}
              onMouseEnter={(e) => { if (currentPath !== item.path) e.currentTarget.style.background = "#e9e9e9"; }}
              onMouseLeave={(e) => { if (currentPath !== item.path) e.currentTarget.style.background = "transparent"; }}
            >
              <FontAwesomeIcon icon={item.icon} style={{ width: 20, fontSize: 16, color: "#0078D4" }} />
              <span style={{ fontSize: 13, fontWeight: 500 }}>{item.name}</span>
            </div>
          ))}
        </div>
        <div>
          <div style={{ fontWeight: 600, fontSize: 12, color: "#6e6e6e", marginBottom: 10, paddingLeft: 8 }}>
            <FontAwesomeIcon icon={faFolder} style={{ marginRight: 8 }} /> Folders
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <div style={{ padding: "8px 12px", display: "flex", alignItems: "center", gap: 12, borderRadius: 6, cursor: "pointer" }} onClick={() => onNotify?.("Opening Music")}>
              <FontAwesomeIcon icon={faMusic} style={{ color: "#0078D4" }} /><span>Music</span>
            </div>
            <div style={{ padding: "8px 12px", display: "flex", alignItems: "center", gap: 12, borderRadius: 6, cursor: "pointer" }} onClick={() => onNotify?.("Opening Videos")}>
              <FontAwesomeIcon icon={faVideo} style={{ color: "#0078D4" }} /><span>Videos</span>
            </div>
            <div style={{ padding: "8px 12px", display: "flex", alignItems: "center", gap: 12, borderRadius: 6, cursor: "pointer" }} onClick={() => onNotify?.("Opening Documents")}>
              <FontAwesomeIcon icon={faFileAlt} style={{ color: "#0078D4" }} /><span>Documents</span>
            </div>
          </div>
        </div>
      </div>
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <div style={{ padding: "10px 16px", borderBottom: "1px solid #eee", background: "#fafafa", display: "flex", alignItems: "center", gap: 12 }}>
          <FontAwesomeIcon icon={faArrowLeft} style={{ color: "#888", cursor: "pointer", opacity: 0.5 }} />
          <FontAwesomeIcon icon={faArrowRight} style={{ color: "#ccc", cursor: "default" }} />
          <div style={{ flex: 1, background: "#fff", border: "1px solid #ddd", borderRadius: 20, padding: "5px 12px", fontSize: 13, display: "flex", alignItems: "center" }}>
            <FontAwesomeIcon icon={faSearch} style={{ color: "#aaa", marginRight: 8, fontSize: 12 }} />
            <span>{currentPath}</span>
          </div>
        </div>
        <div style={{ padding: 20, display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))", gap: 16, overflowY: "auto", flex: 1 }}>
          {items.map((item, idx) => (
            <div
              key={idx}
              style={{
                display: "flex", flexDirection: "column", alignItems: "center", padding: "12px 8px",
                borderRadius: 8, cursor: "pointer", transition: "background 0.1s",
                background: selectedItem === item.name ? "#e5f3ff" : "transparent"
              }}
              onClick={() => setSelectedItem(item.name)}
              onDoubleClick={() => openItem(item)}
            >
              <FontAwesomeIcon icon={item.icon} style={{ fontSize: 36, color: item.type === "folder" ? "#F2C94C" : "#7f8c8d", marginBottom: 8 }} />
              <span style={{ fontSize: 12, textAlign: "center", wordBreak: "break-word" }}>{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function CameraWindow({ onNotify }) {
  const videoRef = useRef(null);
  const [hasCamera, setHasCamera] = useState(true);
  const [streamActive, setStreamActive] = useState(false);

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: { facingMode: "user" } })
      .then(stream => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.play();
          setStreamActive(true);
        }
      })
      .catch(err => {
        console.error("Camera error:", err);
        setHasCamera(false);
        onNotify?.("Camera access denied or not available. Please allow camera permissions.");
      });

    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        const tracks = videoRef.current.srcObject.getTracks();
        tracks.forEach(track => track.stop());
      }
    };
  }, [onNotify]);

  const capturePhoto = () => {
    if (videoRef.current && streamActive) {
      const canvas = document.createElement('canvas');
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
      canvas.toBlob(blob => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `snapshot-${Date.now()}.png`;
        a.click();
        URL.revokeObjectURL(url);
        onNotify?.("Screenshot saved to Downloads!");
      });
    }
  };

  return (
    <div style={{ background: "#111", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 20 }}>
      {!hasCamera ? (
        <div style={{ textAlign: "center", color: "#fff" }}>
          <FontAwesomeIcon icon={faCameraSlash} style={{ fontSize: 48, marginBottom: 16, opacity: 0.6 }} />
          <p>Camera not available. Please allow camera permissions.</p>
        </div>
      ) : (
        <>
          <div style={{ background: "#000", borderRadius: 12, overflow: "hidden", maxWidth: "90%", maxHeight: "70%", boxShadow: "0 10px 30px rgba(0,0,0,0.5)" }}>
            <video ref={videoRef} autoPlay playsInline muted style={{ width: "100%", height: "auto", maxHeight: "55vh", objectFit: "cover" }} />
          </div>
          <button onClick={capturePhoto} style={{ marginTop: 24, background: "#0078D4", border: "none", color: "#fff", padding: "10px 28px", borderRadius: 40, cursor: "pointer", fontWeight: 600, fontSize: 16, display: "flex", alignItems: "center", gap: 10 }}>
            <FontAwesomeIcon icon={faCamera} /> Capture Photo
          </button>
          <p style={{ color: "#ccc", fontSize: 12, marginTop: 16 }}><FontAwesomeIcon icon={faInfoCircle} /> Front camera active</p>
        </>
      )}
    </div>
  );
}

function CmdWindow() {
  const [lines, setLines] = useState([
    { t: "sys", v: "Microsoft Windows [Version 11.0.22631.0]" },
    { t: "sys", v: "(c) Microsoft Corporation. All rights reserved." },
    { t: "sys", v: "" },
    { t: "sys", v: "C:\\Users\\Philip> Type 'help' for available commands." },
    { t: "sys", v: "" },
  ]);
  const [input, setInput] = useState("");
  const bottomRef = useRef(null);

  const cmds = {
    help: () => ["Available commands:", "  about     Show personal information", "  projects  List all projects", "  skills    Display technical skills", "  exp       Show work experience", "  contact   Display contact info", "  clear     Clear the terminal", "  whoami    Current user"],
    about: () => [`Name:      ${userInfo.name}`, `Role:      ${userInfo.role}`, `Location:  ${userInfo.location}`, `Education: ${userInfo.education}`, `Bio:       ${userInfo.bio}`],
    projects: () => projectsData.map((p) => `  [${p.status.padEnd(9)}]  ${p.title}  (${p.category})`),
    skills: () => Object.entries(skills).flatMap(([cat, arr]) => [`  ${cat}:`, ...arr.map((s) => `    • ${s}`)]),
    exp: () => experiencesData.map((e) => `  ${e.title} @ ${e.company} (${e.period})`),
    contact: () => [`Email:   ${userInfo.email}`, `GitHub:  ${userInfo.github}`, `Phone:   ${userInfo.phone}`],
    whoami: () => [`${userInfo.name} — ${userInfo.role}`],
  };

  const run = (cmd) => {
    const c = cmd.trim().toLowerCase();
    const newLines = [...lines, { t: "in", v: `C:\\Users\\Philip> ${cmd}` }];
    if (c === "") { setLines(newLines); setInput(""); return; }
    if (c === "clear") { setLines([]); setInput(""); return; }
    const fn = cmds[c];
    if (fn) fn().forEach((l) => newLines.push({ t: "out", v: l }));
    else newLines.push({ t: "err", v: `'${cmd}' is not recognized as an internal or external command.` });
    newLines.push({ t: "sys", v: "" });
    setLines(newLines);
    setInput("");
  };

  useEffect(() => { bottomRef.current?.scrollIntoView(); }, [lines]);

  return (
    <div style={{ background: "#0C0C0C", height: "100%", display: "flex", flexDirection: "column", fontFamily: "'Cascadia Code', 'Consolas', monospace", fontSize: 13 }} onClick={() => document.getElementById("cmd-input")?.focus()}>
      <div style={{ flex: 1, overflowY: "auto", padding: "8px 12px" }}>
        {lines.map((l, i) => (
          <div key={i} style={{ color: l.t === "in" ? "#4EC9B0" : l.t === "err" ? "#F48771" : l.t === "out" ? "#D4D4D4" : "#9CDCFE", lineHeight: 1.5, whiteSpace: "pre-wrap" }}>{l.v}</div>
        ))}
        <div style={{ display: "flex", color: "#4EC9B0" }}>
          <span>C:\Users\Philip&gt;&nbsp;</span>
          <input id="cmd-input" value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === "Enter" && run(input)} style={{ flex: 1, background: "transparent", border: "none", outline: "none", color: "#4EC9B0", fontFamily: "inherit", fontSize: "inherit" }} autoFocus />
        </div>
        <div ref={bottomRef} />
      </div>
    </div>
  );
}

function WindowContent({ type, onNotify, setSelectedProject, setSelectedExperience }) {
  if (type === "user") return (
    <div style={{ padding: 24 }}>
      <div style={{ display: "flex", gap: 20, alignItems: "center", marginBottom: 20, paddingBottom: 20, borderBottom: "1px solid #e0e0e0" }}>
        <div style={{ width: 80, height: 80, borderRadius: "50%", background: "linear-gradient(135deg,#0078D4,#8764B8)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 28, fontWeight: 700, flexShrink: 0 }}>PJ</div>
        <div>
          <div style={{ fontSize: 22, fontWeight: 700, color: "#1a1a1a" }}>{userInfo.name}</div>
          <div style={{ color: "#0078D4", fontSize: 14, fontWeight: 500 }}>{userInfo.role}</div>
          <div style={{ color: "#666", fontSize: 13 }}><FontAwesomeIcon icon={faMapMarkerAlt} /> {userInfo.location}</div>
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 16 }}>
        {[
          [faEnvelope, "Email", userInfo.email],
          [faPhone, "Phone", userInfo.phone],
          [faGithub, "GitHub", userInfo.github],
          [faGraduationCap, "Education", userInfo.education],
          [faStar, "Experience", userInfo.experience],
          [faChartBar, "Projects", userInfo.projects],
        ].map(([ico, label, val]) => (
          <div key={label} style={{ background: "#f8f8f8", borderRadius: 8, padding: "10px 14px" }}>
            <div style={{ fontSize: 11, color: "#888", marginBottom: 2 }}><FontAwesomeIcon icon={ico} style={{ marginRight: 4 }} /> {label}</div>
            <div style={{ fontSize: 13, color: "#222", fontWeight: 500 }}>{val}</div>
          </div>
        ))}
      </div>
      <div style={{ background: "#f0f6ff", borderRadius: 8, padding: 14, borderLeft: "3px solid #0078D4" }}>
        <div style={{ fontSize: 12, color: "#888", marginBottom: 4 }}>Bio</div>
        <div style={{ fontSize: 13, color: "#333", lineHeight: 1.6 }}>{userInfo.bio}</div>
      </div>
    </div>
  );

  if (type === "projects") return (
    <div style={{ padding: 20, overflowY: "auto", height: "100%" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        {projectsData.map((project) => (
          <div 
            key={project.id} 
            style={{ 
              border: "1px solid #e0e0e0", 
              borderRadius: 10, 
              padding: 14, 
              transition: "box-shadow .2s, transform .2s", 
              cursor: "pointer", 
              background: "#fff",
              hover: { transform: "translateY(-2px)" }
            }}
            onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,120,212,.15)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "translateY(0)"; }}
            onClick={() => setSelectedProject(project)}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
              <FontAwesomeIcon icon={project.icon} style={{ fontSize: 24, color: "#0078D4" }} />
              <span style={{ fontSize: 11, padding: "2px 8px", background: project.status === "Deployed" ? "#e6f4ea" : "#e8f0fe", color: project.status === "Deployed" ? "#1e7e34" : "#1a73e8", borderRadius: 20, fontWeight: 600 }}>{project.status}</span>
            </div>
            <div style={{ fontWeight: 600, fontSize: 15, color: "#1a1a1a", marginBottom: 4 }}>{project.title}</div>
            <div style={{ fontSize: 12, color: "#888", marginBottom: 10 }}>{project.category}</div>
            <div style={{ fontSize: 12, color: "#666", lineHeight: 1.4, marginBottom: 10 }}>
              {project.description.substring(0, 100)}...
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {project.techStack.slice(0, 3).map((tech) => (
                <span key={tech} style={{ fontSize: 10, padding: "2px 6px", background: "#f0f0f0", color: "#555", borderRadius: 4 }}>{tech}</span>
              ))}
              {project.techStack.length > 3 && (
                <span style={{ fontSize: 10, padding: "2px 6px", background: "#f0f0f0", color: "#555", borderRadius: 4 }}>+{project.techStack.length - 3}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  if (type === "experience") return (
    <div style={{ padding: 24, overflowY: "auto", height: "100%" }}>
      <div style={{ position: "relative", paddingLeft: 24 }}>
        <div style={{ position: "absolute", left: 7, top: 0, bottom: 0, width: 2, background: "#e0e0e0" }} />
        {experiencesData.map((exp) => (
          <div key={exp.id} style={{ position: "relative", marginBottom: 24, cursor: "pointer" }} onClick={() => setSelectedExperience(exp)}>
            <div style={{ position: "absolute", left: -24, top: 2, width: 16, height: 16, borderRadius: "50%", background: exp.color, border: "2px solid #fff", boxShadow: `0 0 0 2px ${exp.color}` }} />
            <div style={{ background: "#fafafa", border: "1px solid #e0e0e0", borderRadius: 10, padding: 14, transition: "box-shadow .2s" }}
              onMouseEnter={(e) => e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.1)"}
              onMouseLeave={(e) => e.currentTarget.style.boxShadow = "none"}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 8 }}>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 600, fontSize: 15, color: "#1a1a1a", marginBottom: 4 }}>
                    <FontAwesomeIcon icon={exp.icon} style={{ marginRight: 8, color: exp.color }} /> {exp.title}
                  </div>
                  <div style={{ fontSize: 13, color: exp.color, fontWeight: 500 }}>{exp.company}</div>
                  <div style={{ fontSize: 12, color: "#666", marginTop: 6 }}>{exp.description.substring(0, 80)}...</div>
                </div>
                <span style={{ fontSize: 11, color: "#888", background: "#f0f0f0", padding: "2px 8px", borderRadius: 20, whiteSpace: "nowrap" }}>{exp.period}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  if (type === "skills") return (
    <div style={{ padding: 20, fontFamily: "'Cascadia Code','Consolas',monospace", background: "#1e1e1e", height: "100%", color: "#d4d4d4", overflowY: "auto" }}>
      <div style={{ color: "#9CDCFE", marginBottom: 12, fontSize: 12 }}>{"// Skills.txt — Technical Profile"}</div>
      {Object.entries(skills).map(([cat, arr]) => (
        <div key={cat} style={{ marginBottom: 16 }}>
          <div style={{ color: "#4EC9B0", fontSize: 12, marginBottom: 6 }}>[{cat}]</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
            {arr.map((s) => (<span key={s} style={{ background: "#264F78", color: "#9CDCFE", padding: "3px 10px", borderRadius: 4, fontSize: 12 }}>{s}</span>))}
          </div>
        </div>
      ))}
    </div>
  );

  if (type === "cmd") return <CmdWindow />;
  if (type === "filemanager") return <FileManagerWindow onNotify={onNotify} />;
  if (type === "camera") return <CameraWindow onNotify={onNotify} />;
  if (type === "recycle") return <div style={{ padding: 40, textAlign: "center", color: "#666" }}><FontAwesomeIcon icon={faTrashAlt} style={{ fontSize: 48, marginBottom: 16, opacity: 0.5 }} /><p>Recycle Bin is empty</p></div>;

  return <div style={{ padding: 24, color: "#666" }}>Loading...</div>;
}

function WinFrame({ win, isActive, onClose, onFocus, position, onDragStart }) {
  const iconMap = {
    user: faUserCircle, projects: faFolderOpen, experience: faChartLine,
    skills: faFileAlt, cmd: faTerminal, resume: faFilePdf,
    recycle: faTrashAlt, filemanager: faFolderTree, camera: faCamera
  };

  return (
    <div
      style={{
        position: "fixed", left: position.x, top: position.y, width: win.w, height: win.h,
        zIndex: win.z, display: "flex", flexDirection: "column", borderRadius: 10,
        overflow: "hidden", boxShadow: isActive ? "0 20px 60px rgba(0,0,0,.45)" : "0 8px 24px rgba(0,0,0,.25)",
        border: isActive ? "1px solid rgba(0,120,212,0.3)" : "1px solid rgba(0,0,0,0.15)",
        background: win.type === "cmd" ? "#0C0C0C" : "#fff",
      }}
      onMouseDown={onFocus}
    >
      <div
        style={{
          background: win.type === "cmd" ? "#0C0C0C" : isActive ? "rgba(240,240,240,.98)" : "rgba(230,230,230,.98)",
          backdropFilter: "blur(20px)", padding: "0 12px", height: 36,
          display: "flex", alignItems: "center", justifyContent: "space-between",
          cursor: "move", flexShrink: 0, borderBottom: win.type === "cmd" ? "1px solid #333" : "1px solid rgba(0,0,0,.08)",
          userSelect: "none",
        }}
        onMouseDown={(e) => onDragStart(e, win.id)}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: win.type === "cmd" ? "#d4d4d4" : "#1a1a1a", fontWeight: 500 }}>
          <FontAwesomeIcon icon={iconMap[win.type] || faFolderOpen} style={{ fontSize: 14 }} />
          {win.title}
        </div>
        <button onClick={onClose} style={{ width: 28, height: 28, border: "none", borderRadius: 4, cursor: "pointer", background: "transparent", fontSize: 14, display: "flex", alignItems: "center", justifyContent: "center", color: win.type === "cmd" ? "#888" : "#666" }}
          onMouseEnter={(e) => { e.currentTarget.style.background = "#E81123"; e.currentTarget.style.color = "#fff"; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = win.type === "cmd" ? "#888" : "#666"; }}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>
      <div style={{ flex: 1, overflowY: win.type === "cmd" ? "hidden" : "auto", background: win.type === "cmd" ? "#0C0C0C" : "#fff" }}>
        <WindowContent type={win.type} onNotify={(msg) => { if (window.notifyFn) window.notifyFn(msg); }} setSelectedProject={(project) => { if (window.setSelectedProjectFn) window.setSelectedProjectFn(project); }} setSelectedExperience={(exp) => { if (window.setSelectedExperienceFn) window.setSelectedExperienceFn(exp); }} />
      </div>
    </div>
  );
}

function TaskBtn({ children, onClick, active, title }) {
  const [hover, setHover] = useState(false);
  return (
    <button title={title} onClick={onClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        width: 44, height: 40, border: "none", borderRadius: 6, cursor: "pointer",
        background: hover ? "rgba(255,255,255,.18)" : active ? "rgba(255,255,255,.12)" : "transparent",
        display: "flex", alignItems: "center", justifyContent: "center",
        transition: "background .15s", color: "#fff", fontSize: 18,
        borderBottom: active ? "2px solid #0078D4" : "2px solid transparent",
      }}>
      {children}
    </button>
  );
}

export default function App() {
  const [phase, setPhase] = useState("loading");
  const [progress, setProgress] = useState(0);
  const [time, setTime] = useState({ h: "", d: "" });
  const [windows, setWindows] = useState([]);
  const [zCounter, setZCounter] = useState(10);
  const [positions, setPositions] = useState({});
  const [activeWin, setActiveWin] = useState(null);
  const [dragging, setDragging] = useState(null);
  const [startMenu, setStartMenu] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQ, setSearchQ] = useState("");
  const [notification, setNotification] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedExperience, setSelectedExperience] = useState(null);
  const dragRef = useRef(null);

  window.notifyFn = (msg) => { setNotification(msg); setTimeout(() => setNotification(null), 3000); };
  window.setSelectedProjectFn = (project) => { setSelectedProject(project); };
  window.setSelectedExperienceFn = (exp) => { setSelectedExperience(exp); };

  useEffect(() => {
    const tick = () => { const n = new Date(); setTime({ h: n.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" }), d: n.toLocaleDateString("en-US", { month: "short", day: "numeric" }) }); };
    tick(); const id = setInterval(tick, 1000); return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setProgress((p) => { if (p >= 100) { clearInterval(id); setTimeout(() => setPhase("lock"), 400); return 100; } return p + 1.8; });
    }, 30);
    return () => clearInterval(id);
  }, []);

  const notify = (msg) => { setNotification(msg); setTimeout(() => setNotification(null), 3000); };

  const openWindow = (type) => {
    if (type === "resume") { window.open("https://drive.google.com/uc?export=download&id=1GGmuO82F1WVow5ESMlMpon_TGCL5GyqD", "_blank"); notify("Opening Resume.pdf…"); return; }
    const titles = { user: "This User — Philip John Bonbon", projects: "Projects Portfolio", experience: "Work Experience", skills: "Skills.txt", cmd: "Command Prompt", recycle: "Recycle Bin", filemanager: "File Manager", camera: "Camera" };
    const sizes = { user: [680, 540], projects: [780, 600], experience: [700, 560], skills: [540, 420], cmd: [680, 480], recycle: [500, 400], filemanager: [950, 580], camera: [640, 520] };
    const existing = windows.find((w) => w.type === type);
    if (existing) { const z = zCounter + 1; setZCounter(z); setWindows((ws) => ws.map((w) => w.type === type ? { ...w, z } : w)); setActiveWin(existing.id); return; }
    const z = zCounter + 1; setZCounter(z); const [w, h] = sizes[type] || [700, 520]; const offset = windows.length * 30;
    const newId = `${type}_${Date.now()}`;
    setWindows((ws) => [...ws, { id: newId, type, title: titles[type], w, h, z }]);
    setPositions((ps) => ({ ...ps, [newId]: { x: 100 + offset % 200, y: 60 + offset % 150 } }));
    setActiveWin(newId); setStartMenu(false); setSearchOpen(false);
  };

  const closeWindow = (id) => { setWindows((ws) => ws.filter((w) => w.id !== id)); if (activeWin === id) setActiveWin(null); };
  const focusWindow = (id) => { const z = zCounter + 1; setZCounter(z); setWindows((ws) => ws.map((w) => w.id === id ? { ...w, z } : w)); setActiveWin(id); };
  const startDrag = useCallback((e, id) => { e.preventDefault(); const pos = positions[id] || { x: 100, y: 50 }; dragRef.current = { id, ox: e.clientX - pos.x, oy: e.clientY - pos.y }; setDragging(id); focusWindow(id); }, [positions]);
  useEffect(() => { if (!dragging) return; const move = (e) => { const { id, ox, oy } = dragRef.current; setPositions((ps) => ({ ...ps, [id]: { x: Math.max(0, e.clientX - ox), y: Math.max(0, e.clientY - oy) } })); }; const up = () => setDragging(null); window.addEventListener("mousemove", move); window.addEventListener("mouseup", up); return () => { window.removeEventListener("mousemove", move); window.removeEventListener("mouseup", up); }; }, [dragging]);

  if (phase === "loading") return (
    <div style={{ width: "100vw", height: "100vh", background: "#000", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", fontFamily: "'Segoe UI', sans-serif" }}>
      <div style={{ marginBottom: 48 }}><svg width="72" height="72" viewBox="0 0 100 100"><rect x="5" y="5" width="42" height="42" rx="4" fill="#F25022" /><rect x="53" y="5" width="42" height="42" rx="4" fill="#7FBA00" /><rect x="5" y="53" width="42" height="42" rx="4" fill="#00A4EF" /><rect x="53" y="53" width="42" height="42" rx="4" fill="#FFB900" /></svg></div>
      <div style={{ width: 240, height: 3, background: "#1a1a1a", borderRadius: 2, overflow: "hidden", marginBottom: 16 }}><div style={{ height: "100%", width: `${progress}%`, background: "linear-gradient(90deg,#0078D4,#00BCF2)", transition: "width .1s linear" }} /></div>
      <div style={{ color: "#555", fontSize: 13 }}>Starting Windows...</div>
    </div>
  );

  if (phase === "lock") return (
    <div style={{ width: "100vw", height: "100vh", backgroundImage: `url(${WALLPAPER})`, backgroundSize: "cover", backgroundPosition: "center", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }} onClick={() => setPhase("desktop")}>
      <div style={{ textAlign: "center", color: "#fff", textShadow: "0 2px 8px rgba(0,0,0,.6)" }}>
        <div style={{ fontSize: 72, fontWeight: 200, lineHeight: 1 }}>{time.h}</div>
        <div style={{ fontSize: 20, fontWeight: 300, marginBottom: 48 }}>{time.d}</div>
        <div style={{ fontSize: 14, opacity: .8, letterSpacing: 2, background: "rgba(0,0,0,0.4)", padding: "8px 24px", borderRadius: 40, backdropFilter: "blur(10px)" }}>CLICK TO UNLOCK <FontAwesomeIcon icon={faArrowRight} /></div>
      </div>
    </div>
  );

  const filteredIcons = searchQ ? desktopIcons.filter((i) => i.name.toLowerCase().includes(searchQ.toLowerCase())) : [];

  return (
    <div style={{ width: "100vw", height: "100vh", position: "relative", overflow: "hidden", fontFamily: "'Segoe UI', sans-serif", userSelect: "none" }} onClick={() => { setStartMenu(false); setSearchOpen(false); }}>
      <div style={{ position: "fixed", inset: 0, backgroundImage: `url(${WALLPAPER})`, backgroundSize: "cover", backgroundPosition: "center" }} />
      <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,.1)" }} />

      <div style={{ position: "fixed", top: 20, left: 20, display: "grid", gridTemplateColumns: "repeat(3, 100px)", gap: "32px 48px", zIndex: 5 }} onClick={(e) => e.stopPropagation()}>
        {desktopIcons.map((icon) => (
          <div key={icon.id} style={{ display: "flex", flexDirection: "column", alignItems: "center", width: 90, cursor: "pointer", padding: "8px 4px", borderRadius: 8, transition: "background .15s", background: "transparent" }} onDoubleClick={() => openWindow(icon.type)} onClick={(e) => e.stopPropagation()}>
            <FontAwesomeIcon icon={icon.icon} style={{ fontSize: 32, color: "#fff", filter: "drop-shadow(0 2px 5px rgba(0,0,0,0.6))", marginBottom: 8 }} />
            <span style={{ color: "#fff", fontSize: 12, textShadow: "0 1px 3px rgba(0,0,0,.8)", fontWeight: 500, textAlign: "center" }}>{icon.name}</span>
          </div>
        ))}
      </div>

      {windows.map((win) => (<WinFrame key={win.id} win={win} isActive={activeWin === win.id} position={positions[win.id] || { x: 100, y: 50 }} onClose={() => closeWindow(win.id)} onFocus={() => focusWindow(win.id)} onDragStart={startDrag} />))}

      {selectedProject && <ProjectDetail project={selectedProject} onClose={() => setSelectedProject(null)} />}
      {selectedExperience && <ExperienceDetail experience={selectedExperience} onClose={() => setSelectedExperience(null)} />}

      {notification && (<div style={{ position: "fixed", bottom: 70, left: "50%", transform: "translateX(-50%)", background: "rgba(30,30,38,0.95)", backdropFilter: "blur(16px)", color: "#fff", padding: "10px 20px", borderRadius: 40, fontSize: 13, display: "flex", alignItems: "center", gap: 8, zIndex: 10000, border: "1px solid rgba(255,255,255,0.2)" }}><FontAwesomeIcon icon={faInfoCircle} /> {notification}</div>)}

      {startMenu && (<div style={{ position: "fixed", bottom: 52, left: 12, width: 480, background: "rgba(35,35,45,.96)", backdropFilter: "blur(24px)", borderRadius: 12, boxShadow: "0 24px 64px rgba(0,0,0,.6)", zIndex: 200, border: "1px solid rgba(255,255,255,.12)", overflow: "hidden" }} onClick={(e) => e.stopPropagation()}>
        <div style={{ padding: "20px 24px 16px", borderBottom: "1px solid rgba(255,255,255,.08)" }}><div style={{ display: "flex", alignItems: "center", gap: 14 }}><FontAwesomeIcon icon={faUserCircle} style={{ fontSize: 44, color: "#0078D4" }} /><div><div style={{ color: "#fff", fontWeight: 600, fontSize: 14 }}>{userInfo.name}</div><div style={{ color: "rgba(255,255,255,.5)", fontSize: 12 }}>{userInfo.role}</div></div></div></div>
        <div style={{ padding: "16px 24px" }}><div style={{ color: "rgba(255,255,255,.5)", fontSize: 12, marginBottom: 10 }}>PINNED</div><div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 8 }}>{desktopIcons.map((icon) => (<div key={icon.id} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6, padding: "10px 8px", borderRadius: 8, cursor: "pointer", transition: "background .15s" }} onMouseEnter={(e) => e.currentTarget.style.background = "rgba(255,255,255,.1)"} onMouseLeave={(e) => e.currentTarget.style.background = "transparent"} onClick={() => openWindow(icon.type)}><FontAwesomeIcon icon={icon.icon} style={{ fontSize: 24, color: "#fff" }} /><span style={{ color: "rgba(255,255,255,.85)", fontSize: 11, textAlign: "center" }}>{icon.name}</span></div>))}</div></div>
        <div style={{ padding: "12px 24px 16px", borderTop: "1px solid rgba(255,255,255,.08)", display: "flex", justifyContent: "flex-end" }}><button style={{ background: "rgba(255,255,255,.08)", border: "none", color: "rgba(255,255,255,.7)", padding: "6px 14px", borderRadius: 6, cursor: "pointer", fontSize: 12, display: "flex", alignItems: "center", gap: 6 }} onClick={() => setPhase("lock")}><FontAwesomeIcon icon={faLock} /> Lock</button></div>
      </div>)}

      {searchOpen && (<div style={{ position: "fixed", bottom: 52, left: "50%", transform: "translateX(-50%)", width: 480, background: "rgba(35,35,45,.96)", backdropFilter: "blur(24px)", borderRadius: 12, boxShadow: "0 24px 64px rgba(0,0,0,.6)", zIndex: 200, border: "1px solid rgba(255,255,255,.12)", padding: 20 }} onClick={(e) => e.stopPropagation()}>
        <div style={{ display: "flex", alignItems: "center", background: "rgba(255,255,255,.08)", borderRadius: 8, padding: "8px 14px", marginBottom: 16 }}><FontAwesomeIcon icon={faSearch} style={{ marginRight: 8, color: "#aaa" }} /><input autoFocus placeholder="Type here to search" value={searchQ} onChange={(e) => setSearchQ(e.target.value)} style={{ flex: 1, background: "transparent", border: "none", outline: "none", color: "#fff", fontSize: 14 }} /></div>
        {filteredIcons.length > 0 && (<div>{filteredIcons.map((icon) => (<div key={icon.id} style={{ display: "flex", alignItems: "center", gap: 12, padding: "8px 10px", borderRadius: 6, cursor: "pointer", color: "#fff" }} onMouseEnter={(e) => e.currentTarget.style.background = "rgba(255,255,255,.08)"} onMouseLeave={(e) => e.currentTarget.style.background = "transparent"} onClick={() => { openWindow(icon.type); setSearchOpen(false); setSearchQ(""); }}><FontAwesomeIcon icon={icon.icon} style={{ fontSize: 20 }} /><span style={{ fontSize: 14 }}>{icon.name}</span></div>))}</div>)}
      </div>)}

      <div style={{ position: "fixed", bottom: 0, left: 0, right: 0, height: 48, background: "rgba(20,20,30,.92)", backdropFilter: "blur(20px)", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 12px", zIndex: 100, borderTop: "1px solid rgba(255,255,255,.06)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 2 }}>
          <TaskBtn onClick={(e) => { e.stopPropagation(); setStartMenu((s) => !s); setSearchOpen(false); }} active={startMenu} title="Start"><FontAwesomeIcon icon={faWindows} /></TaskBtn>
          <TaskBtn onClick={(e) => { e.stopPropagation(); setSearchOpen((s) => !s); setStartMenu(false); }} active={searchOpen} title="Search"><FontAwesomeIcon icon={faSearch} /></TaskBtn>
          <div style={{ width: 1, height: 24, background: "rgba(255,255,255,.1)", margin: "0 4px" }} />
          <TaskBtn onClick={() => openWindow("filemanager")} title="File Manager"><FontAwesomeIcon icon={faFolderTree} /></TaskBtn>
          <TaskBtn onClick={() => openWindow("cmd")} title="Terminal"><FontAwesomeIcon icon={faTerminal} /></TaskBtn>
          <TaskBtn onClick={() => openWindow("camera")} title="Camera"><FontAwesomeIcon icon={faCamera} /></TaskBtn>
          <TaskBtn onClick={() => openWindow("recycle")} title="Recycle Bin"><FontAwesomeIcon icon={faTrashAlt} /></TaskBtn>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 4 }}>{windows.map((w) => (<div key={w.id} onClick={() => focusWindow(w.id)} style={{ padding: "4px 12px", borderRadius: 4, cursor: "pointer", fontSize: 12, background: activeWin === w.id ? "rgba(255,255,255,.15)" : "rgba(255,255,255,.05)", color: activeWin === w.id ? "#fff" : "rgba(255,255,255,.6)", borderBottom: activeWin === w.id ? "2px solid #0078D4" : "2px solid transparent", maxWidth: 120, overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>{w.title.split("—")[0].trim()}</div>))}</div>
        <div style={{ display: "flex", alignItems: "center", gap: 8, color: "rgba(255,255,255,.85)", fontSize: 13 }}><FontAwesomeIcon icon={faVolumeUp} /><FontAwesomeIcon icon={faWifi} /><FontAwesomeIcon icon={faBatteryFull} /><div style={{ width: 1, height: 20, background: "rgba(255,255,255,.1)" }} /><div style={{ textAlign: "right", lineHeight: 1.4 }}><div style={{ fontSize: 13, fontWeight: 500 }}>{time.h}</div><div style={{ fontSize: 11, color: "rgba(255,255,255,.5)" }}>{time.d}</div></div></div>
      </div>
    </div>
  );
}