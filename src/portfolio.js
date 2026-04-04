/* Soumyadip Changder — AI/ML Engineer Portfolio */

// Website related settings
const settings = {
  isSplash: true,
};

// SEO
const seo = {
  title: "Soumyadip Changder — AI/ML Engineer",
  description:
    "AI/ML Engineer specializing in Generative AI, RAG pipelines, and multi-agent workflows. Building production-ready intelligent systems using LangGraph, LangChain, and LLM APIs.",
  og: {
    title: "Soumyadip Changder Portfolio",
    type: "website",
    url: "https://soumadipchangder.github.io/",
  },
};

// Home Page
const greeting = {
  title: "Soumyadip Changder",
  logo_name: "SoumyadipChangder",
  nickname: "rockstar_soumyadip",
  subTitle:
    "AI/ML Engineer specializing in Generative AI, RAG pipelines, and multi-agent workflows. I build production-ready intelligent systems using LangGraph, LangChain, and LLM APIs.",
  resumeLink:
    "https://drive.google.com/file/d/1yiOylkmUSSsfazcyjT2xq_2b0QSOoKzC/view?usp=sharing",
  portfolio_repository: "https://github.com/soumadipchangder",
  githubProfile: "https://github.com/soumadipchangder",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/soumadipchangder",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/soumyadip-changder-4852b3278",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
  },
  {
    name: "X",
    link: "https://x.com/SOUMYADIPCHANG3",
    fontAwesomeIcon: "fa-x-twitter",
    backgroundColor: "#000000",
  },
  {
    name: "Gmail",
    link: "mailto:soumyadipchangder7@gmail.com",
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836",
  },
  {
    name: "Google Scholar",
    link: "https://scholar.google.com/citations?user=3KUhk60AAAAJ&hl=en",
    fontAwesomeIcon: "fa-graduation-cap",
    iconClass: "fas",
    backgroundColor: "#4285F4",
  },
  {
    name: "HuggingFace",
    link: "https://huggingface.co/Soumya79",
    svgPath:
      'M12.025 1.13c-5.77 0-10.449 4.647-10.449 10.378 0 1.112.178 2.181.503 3.185.064-.222.203-.444.416-.577a.96.96 0 0 1 .524-.15c.293 0 .584.124.84.284.278.173.48.408.71.694.226.282.458.611.684.951v-.014c.017-.324.106-.622.264-.874s.403-.487.762-.543c.3-.047.596.06.787.203s.31.313.4.467c.15.257.212.468.233.542.01.026.653 1.552 1.657 2.54.616.605 1.01 1.223 1.082 1.912.055.537-.096 1.059-.38 1.572.637.121 1.294.187 1.967.187.657 0 1.298-.063 1.921-.178-.287-.517-.44-1.041-.384-1.581.07-.69.465-1.307 1.081-1.913 1.004-.987 1.647-2.513 1.657-2.539.021-.074.083-.285.233-.542.09-.154.208-.323.4-.467a1.08 1.08 0 0 1 .787-.203c.359.056.604.29.762.543s.247.55.265.874v.015c.225-.34.457-.67.683-.952.23-.286.432-.52.71-.694.257-.16.547-.284.84-.285a.97.97 0 0 1 .524.151c.228.143.373.388.43.625l.006.04a10.3 10.3 0 0 0 .534-3.273c0-5.731-4.678-10.378-10.449-10.378M8.327 6.583a1.5 1.5 0 0 1 .713.174 1.487 1.487 0 0 1 .617 2.013c-.183.343-.762-.214-1.102-.094-.38.134-.532.914-.917.71a1.487 1.487 0 0 1 .69-2.803m7.486 0a1.487 1.487 0 0 1 .689 2.803c-.385.204-.536-.576-.916-.71-.34-.12-.92.437-1.103.094a1.487 1.487 0 0 1 .617-2.013 1.5 1.5 0 0 1 .713-.174m-10.68 1.55a.96.96 0 1 1 0 1.921.96.96 0 0 1 0-1.92m13.838 0a.96.96 0 1 1 0 1.92.96.96 0 0 1 0-1.92M8.489 11.458c.588.01 1.965 1.157 3.572 1.164 1.607-.007 2.984-1.155 3.572-1.164.196-.003.305.12.305.454 0 .886-.424 2.328-1.563 3.202-.22-.756-1.396-1.366-1.63-1.32q-.011.001-.02.006l-.044.026-.01.008-.03.024q-.018.017-.035.036l-.032.04a1 1 0 0 0-.058.09l-.014.025q-.049.088-.11.19a1 1 0 0 1-.083.116 1.2 1.2 0 0 1-.173.18q-.035.029-.075.058a1.3 1.3 0 0 1-.251-.243 1 1 0 0 1-.076-.107c-.124-.193-.177-.363-.337-.444-.034-.016-.104-.008-.2.022q-.094.03-.216.087-.06.028-.125.063l-.13.074q-.067.04-.136.086a3 3 0 0 0-.135.096 3 3 0 0 0-.26.219 2 2 0 0 0-.12.121 2 2 0 0 0-.106.128l-.002.002a2 2 0 0 0-.09.132l-.001.001a1.2 1.2 0 0 0-.105.212q-.013.036-.024.073c-1.139-.875-1.563-2.317-1.563-3.203 0-.334.109-.457.305-.454m.836 10.354c.824-1.19-.766-2.082-.365-3.194-1.13-1.112-1.789-2.738-1.789-2.738s-.246-.945-.806-.858-.97 1.499.202 2.362c1.173.864-.233 1.45-.685.64-.45-.812-1.683-2.896-2.322-3.295s-1.089-.175-.938.647 2.822 2.813 2.562 3.244-1.176-.506-1.176-.506-2.866-2.567-3.49-1.898.473 1.23 2.037 2.16c1.564.932 1.686 1.178 1.464 1.53s-3.675-2.511-4-1.297c-.323 1.214 3.524 1.567 3.287 2.405-.238.839-2.71-1.587-3.216-.642-.506.946 3.49 2.056 3.522 2.064 1.29.33 4.568 1.028 5.713-.624m5.349 0c-.824-1.19-.766-2.082.365-3.194 1.13-1.112 1.789-2.738 1.789-2.738s.246-.945.806-.858.97 1.499-.202 2.362c-1.173.864.233 1.45.685.64.451-.812 1.683-2.896 2.322-3.295s1.089-.175.938.647-2.822 2.813-2.562 3.244 1.176-.506 1.176-.506 2.866-2.567 3.49-1.898-.473 1.23-2.037 2.16c-1.564.932-1.686 1.178-1.464 1.53s3.675-2.511 4-1.297c.323 1.214-3.524 1.567-3.287 2.405.238.839 2.71-1.587 3.216-.642.506.946-3.49 2.056-3.522 2.064-1.29.33-4.568 1.028-5.713-.624"',
    backgroundColor: "#FF9D00",
  },
  {
    name: "Google Developer",
    link: "https://g.dev/soumyadipchangder",
    fontAwesomeIcon: "fa-code",
    iconClass: "fas",
    backgroundColor: "#0F9D58",
  },
];

// Skills
const skills = {
  data: [
    {
      title: "AI / ML & Generative AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Building multi-agent RAG systems with LangGraph & LangChain for enterprise-grade AI workflows",
        "⚡ Developing conversational AI with context-aware retrieval and reasoning capabilities",
        "⚡ Training & deploying deep learning models (CNNs, NLP) for real-world applications like medical imaging",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "TensorFlow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },
    {
      title: "Tech Stack & Frameworks",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building AI-powered web applications with Flask, Streamlit, and REST APIs",
        "⚡ Developing data pipelines and backend systems with Python, Java, and SQL",
        "⚡ Integrating LLM APIs (OpenAI, Groq, Gemini) into production applications",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "logos-java",
          style: {
            color: "#007396",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Flask",
          fontAwesomeClassname: "simple-icons:flask",
          style: {
            color: "#ffffff",
          },
        },
        {
          skillName: "Streamlit",
          fontAwesomeClassname: "simple-icons:streamlit",
          style: {
            color: "#FF4B4B",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
      ],
    },
    {
      title: "Tools & Infrastructure",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Working with vector databases (ChromaDB, Pinecone) for semantic search and RAG pipelines",
        "⚡ Deploying AI models and applications on AWS cloud infrastructure",
        "⚡ Version control, CI/CD, and MLOps best practices with Git and Linux environments",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#F05032",
          },
        },
        {
          skillName: "Linux",
          fontAwesomeClassname: "simple-icons:linux",
          style: {
            color: "#FCC624",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F89F1B",
      },
      profileLink: "https://leetcode.com/u/SoumyaM7/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/profile/soumyadip_chang1",
    },
    {
      siteName: "CodeChef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/noble_vivid_29",
    },
    {
      siteName: "HackerEarth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@soumyadipchangder7/",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/soumyadipchangder",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Institute of Engineering and Management",
      subtitle: "B.Tech. in Computer Science & Engineering",
      logo_path: "iem_logo.webp",
      alt_name: "IEM Kolkata",
      duration: "2022 - 2026",
      descriptions: [
        "⚡ Specializing in AI/ML, Deep Learning, NLP, and Generative AI systems",
        "⚡ Built multiple research projects including multi-agent RAG systems and medical AI",
        "⚡ Maintaining a strong GPA of 8.7 while leading IEEE IEM CS Society as Content Lead",
      ],
      website_link: "https://iem.edu.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Foundations of Cybersecurity",
      subtitle: "Google",
      instructor: "Google Career Certificates",
      logo_path: "google_logo.svg",
      certificate_link:
        "https://coursera.org/share/0959eb98b960083021874153327e1afd",
      alt_name: "Google",
      color_code: "#E8F0FE",
    },
    {
      title: "Introduction to Software Engineering",
      subtitle: "IBM",
      instructor: "IBM Skills Network",
      logo_path: "ibm_logo.svg",
      certificate_link:
        "https://coursera.org/share/b6895063ab261612b96aeb1d9cd76b4a",
      alt_name: "IBM",
      color_code: "#E0E0E0",
    },
    {
      title: "Introduction to Artificial Intelligence (AI)",
      subtitle: "IBM",
      instructor: "Rav Ahuja",
      logo_path: "ibm_logo.svg",
      certificate_link:
        "https://coursera.org/share/bb8b12152dc089d88e26f624b8ea5b56",
      alt_name: "IBM",
      color_code: "#E0E0E0",
    },
    {
      title: "Career Essentials in Generative AI",
      subtitle: "Microsoft & LinkedIn",
      instructor: "Microsoft & LinkedIn Learning",
      logo_path: "microsoft_logo.svg",
      certificate_link:
        "https://www.linkedin.com/learning/certificates/1b60e7f2bb2433919e73a1de4f7327e92b96d1d682fe37cf3f7e7773b8aa1bb6?trk=share_certificate",
      alt_name: "LinkedIn",
      color_code: "#E0F2F9",
    },
    {
      title: "Artificial Intelligence Foundations: Neural Networks",
      subtitle: "LinkedIn Learning",
      instructor: "Gwendolyn Stripling",
      logo_path: "linkedin_logo.svg",
      certificate_link:
        "https://www.linkedin.com/learning/certificates/1bbca236f3dd024ead1131960bb3233cd4d5dd4e82091961cbcf3c04852dfdc6",
      alt_name: "LinkedIn",
      color_code: "#E0F2F9",
    },
    {
      title:
        "Deep Learning Foundations: Natural Language Processing with TensorFlow",
      subtitle: "LinkedIn Learning",
      instructor: "Harshit Tyagi",
      logo_path: "linkedin_logo.svg",
      certificate_link:
        "https://www.linkedin.com/learning/certificates/ba33f04f770076737c834719e1f118a2bf3803e976f1f93efd7f2a477c56973f",
      alt_name: "LinkedIn",
      color_code: "#E0F2F9",
    },
    {
      title:
        "Deep Learning Foundations: Natural Language Processing with TensorFlow",
      subtitle: "LinkedIn Learning",
      instructor: "Harshit Tyagi",
      logo_path: "linkedin_logo.svg",
      certificate_link:
        "https://www.linkedin.com/learning/certificates/2c99c5f2871bef0d03a0f6b2e11e557f622cb31911b35edb3e9dcbcae89c555c",
      alt_name: "LinkedIn",
      color_code: "#E0F2F9",
    },
    {
      title: "Hands-On PyTorch Machine Learning",
      subtitle: "LinkedIn Learning",
      instructor: "Helen Sun",
      logo_path: "linkedin_logo.svg",
      certificate_link:
        "https://www.linkedin.com/learning/certificates/dccb9885d511355f38240164caf10eb9d3632b213947fc891b4f27d32d75959c",
      alt_name: "LinkedIn",
      color_code: "#E0F2F9",
    },
    {
      title: "Building Computer Vision Applications with Python",
      subtitle: "LinkedIn Learning",
      instructor: "Eduardo Corpeño",
      logo_path: "linkedin_logo.svg",
      certificate_link:
        "https://www.linkedin.com/learning/certificates/75081dfcc41b840c6dc3c06bdf4e658c8aeb0952c61f47fc3802ec786d5855b7",
      alt_name: "LinkedIn",
      color_code: "#E0F2F9",
    },
    {
      title: "Reinforcement Learning Foundations",
      subtitle: "LinkedIn Learning",
      instructor: "Khaulat Abdulhakeem",
      logo_path: "linkedin_logo.svg",
      certificate_link:
        "https://www.linkedin.com/learning/certificates/ac0e69a829f1cf23b609d49fa4bcc9e76e12127e5fe9891f4b70225e0debd46b",
      alt_name: "LinkedIn",
      color_code: "#E0F2F9",
    },
    {
      title: "Machine Learning Foundations: Linear Algebra",
      subtitle: "LinkedIn Learning",
      instructor: "Terezija Semenski",
      logo_path: "linkedin_logo.svg",
      certificate_link:
        "https://www.linkedin.com/learning/certificates/a49ebf7a17395a9933386b46e69d27b099c7c739a1b44fbcb3650d743d7b95c1",
      alt_name: "LinkedIn",
      color_code: "#E0F2F9",
    },
    {
      title: "Google Cloud Skills Profile",
      subtitle: "Google",
      instructor: "Curated Modules",
      logo_path: "google_logo.svg",
      certificate_link:
        "https://www.skills.google/public_profiles/30e1c271-a131-4bf4-b71e-7a10830b505a",
      alt_name: "Google",
      color_code: "#E8F0FE",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internships & Leadership",
  description:
    "I have worked on cutting-edge AI/ML projects at government institutions, prestigious IITs, and professional societies. My experience spans data science internships, patent-filing inventions, and technical community leadership.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Internships",
      experiences: [
        {
          title: "Data Science & ML Intern",
          company: "Centre of Excellence, WEBEL",
          company_url: "#",
          logo_path: "webel_logo.png",
          duration: "Nov 2025 - Feb 2026",
          location: "West Bengal, India",
          description:
            "Worked on AI integration for government systems. Built machine learning pipelines for data-driven decision making. Contributed to automation of government digital infrastructure using data science techniques.",
          color: "#00d4ff",
        },
      ],
    },
    {
      title: "Research & Innovation",
      experiences: [
        {
          title: "Inventor",
          company: "Maker Bhavan, IIT Gandhinagar",
          company_url: "https://iitgn.ac.in/",
          logo_path: "iitgn_logo.png",
          duration: "April 2025 - June 2025",
          location: "Gandhinagar, Gujarat",
          description:
            "Filed patent applications in both India and the United States for an innovative hardware/software invention developed at IIT Gandhinagar's Maker Bhavan facility. Combined engineering design thinking with cutting-edge technology to create novel solutions.",
          color: "#7c3aed",
        },
      ],
    },
    {
      title: "Leadership",
      experiences: [
        {
          title: "Content Lead",
          company: "IEEE IEM CS Society",
          company_url: "#",
          logo_path: "ieee_logo.png",
          duration: "January 2023 - April 2024",
          location: "Kolkata, India",
          description:
            "Leading content strategy for IEEE Computer Society chapter at IEM. Organizing technical workshops, hackathons, and knowledge-sharing sessions on AI/ML, cloud computing, and emerging technologies for 500+ student members.",
          color: "#00d4ff",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects focus on building intelligent AI systems — from multi-agent RAG architectures to medical imaging with deep learning. Each project solves real-world problems using cutting-edge AI/ML technology.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "My research papers presented at IEEE conferences, focusing on AI agents and voice assistant systems.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "melody-voice-assistant",
      name: "Melody Voice Assistant",
      createdAt: "2026-01-15T00:00:00Z",
      description:
        "Paper presented at IEEE IEMENTech 2026 — An intelligent voice assistant system with natural language understanding capabilities",
      url: "https://ieeexplore.ieee.org/document/11434254",
    },
    {
      id: "multi-agent-risk-management",
      name: "Multi-Agent Risk Management System",
      createdAt: "2026-01-15T00:00:00Z",
      description:
        "Paper presented at IEEE IEMENTech 2026 — A multi-agent AI system for IT project risk assessment and management",
      url: "https://ieeexplore.ieee.org/document/11434274",
    },
  ],
};

// "What I Build" section data
const whatIBuild = {
  title: "What I Build",
  subtitle: "Specializing in three core areas of intelligent systems",
  cards: [
    {
      icon: "🤖",
      title: "AI Agents",
      description:
        "Autonomous multi-agent systems that can reason, plan, and execute complex tasks using LangGraph and LLM orchestration.",
      techStack: ["LangGraph", "LangChain", "Groq", "OpenAI"],
    },
    {
      icon: "🔍",
      title: "RAG Systems",
      description:
        "Context-aware retrieval-augmented generation pipelines for document intelligence, Q&A, and knowledge management.",
      techStack: ["ChromaDB", "Pinecone", "LangChain", "Embeddings"],
    },
    {
      icon: "⚡",
      title: "Intelligent Automation",
      description:
        "Production-ready AI workflows that automate complex decision-making processes with real-time data analysis.",
      techStack: ["Python", "Flask", "Streamlit", "APIs"],
    },
  ],
};

// "Research & Innovation" section data
const researchInnovation = {
  title: "Research & Innovation",
  subtitle: "Pushing the boundaries of applied AI",
  items: [
    {
      icon: "📜",
      title: "Patent Filed (India + US)",
      description:
        "Innovation developed at IIT Gandhinagar's Maker Bhavan — patent applications filed in both India and the United States.",
    },
    {
      icon: "📄",
      title: "IEEE Conference Papers",
      description:
        "Two papers accepted at IEEE IEMENTech 2026 — Melody Voice Assistant and Multi-Agent Risk Management System.",
    },
    {
      icon: "🧠",
      title: "Real-World AI Systems",
      description:
        "Focus on building AI systems that solve tangible problems — from medical imaging to autonomous research agents.",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Let's Connect",
    profile_image_path: "soumyadip_profile.jpg",
    description:
      "I'm always excited to discuss AI, multi-agent systems, and cutting-edge ML research. Whether you're looking to collaborate on a project, need an AI consultant, or just want to chat about the future of intelligent systems — reach out!",
  },
  blogSection: {
    title: "Let's Build Something Intelligent Together",
    subtitle:
      "I believe in using AI to solve real-world problems. If you have an idea or a challenge that needs intelligent solutions, I'd love to hear about it.",
    link: "https://github.com/soumadipchangder",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Location",
    subtitle: "Kolkata, West Bengal, India",
    locality: "Kolkata",
    country: "India",
    region: "West Bengal",
    postalCode: "",
    streetAddress: "",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/kolkata",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
  whatIBuild,
  researchInnovation,
};
