import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Eye, Code } from "lucide-react";

const ProjectSection = ({ title, projects, isEven }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    className: "gap-6",
    dotsClass: "slick-dots !bottom-[-2rem]",
  };

  return (
    <div className={`w-full py-16 ${isEven ? 'bg-[#172121]' : 'bg-[#151821]'}`}>
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-thistle">
          {title} 💼
        </h2>
        
        <div className="relative px-4">
          <Slider {...settings}>
            {projects.map((project, index) => (
              <div key={index} className="px-3">
                <div className={`${isEven ? 'bg-[#151821]' : 'bg-[#1a1f2e]'} text-thistle p-8 rounded-lg shadow-xl h-full`}>
                  {
                     project.img && <img src={ project.img } className="mb-6"></img>
                  }
                  <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
                  <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className={`${isEven ? 'bg-[#252a3a]' : 'bg-[#2a303c]'} text-gray-300 px-3 py-1 text-sm rounded-full`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-6">
                    <a
                      href={project.links.preview}
                      className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <Eye size={16} />
                      <span>Preview</span>
                    </a>
                    {project.links.code && (
                      <a
                        href={project.links.code}
                        className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        <Code size={16} />
                        <span>Code</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projectCategories = {
    technicalArticles: {
      title: "Technical Articles",
      projects: [
        {
          title: "How to build and deploy a Python library",
          description: "A step-by-step guide on creating, packaging, and publishing your own Python library to PyPI using best practices.",
          tags: ["Python", "PyPI", "Packaging", "Open Source"],
          img: "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fdzdrv2ztjzsrn1n9gv3n.png",
          links: {
            preview: "https://dev.to/emiloju/how-to-build-and-deploy-a-python-library-4al2?utm_source=canva&utm_medium=iframely"
          }
        },
        {
          title: "How to build a fully fledged telegram bot in Python",
          description: "Learn how to build a feature-rich Telegram bot using Python, with step-by-step instructions and practical code examples.",
          tags: ["Python", "Telegram", "Bot Development", "Automation"],
          img: "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fb0arigooh8729rimwzzn.png",
          links: {
            preview: "https://dev.to/emiloju/how-to-build-a-fully-fledged-telegram-bot-in-python-2al0?utm_source=canva&utm_medium=iframely"
          }
        },
        {
          title: "Wrap and Render Multiline Text on Images using Python's Pillow library",
          description: "A hands-on tutorial that shows you how to use the Pillow library in Python to wrap and render multiline text onto images.",
          tags: ["Python", "Pillow", "Image Processing", "Graphics"],
          img: "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fhfxch616m1azqidknyww.jpeg",
          links: {
            preview: "https://dev.to/emiloju/wrap-and-render-multiline-text-on-images-using-pythons-pillow-library-2ppp?utm_source=canva&utm_medium=iframely"
          }
        },
        {
          title: "How to Build a Breakout Game with PyGame in Python - The Python Code",
          description: "Learn how to build a classic Breakout-style game in Python using the PyGame library, perfect for beginners in game development.",
          img: "https://thepythoncode.com/media/articles/breakout-game-pygame-in-python.jpg",
          tags: ["Python", "PyGame", "Game Development", "Tutorial"],
          links: {
            preview: "https://thepythoncode.com/article/breakout-game-pygame-in-python"
          }
        },
        {
          title: "Object-Oriented programming principles in Python",
          description: "A practical guide to understanding and applying object-oriented programming concepts in Python with real-world examples.",
          tags: ["Python", "OOP", "Software Design", "Technical Writing"],
          img: "https://cdn.hashnode.com/res/hashnode/image/upload/v1694529369822/3a626b61-1883-421b-aa41-c66203ced7e9.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
          links: {
            preview: "https://superbemiloju.hashnode.dev/object-oriented-programming-oop-concepts-in-python-with-practical-examples"
          }
        },
        {
          title: "How to handle media uploads in Django",
          description: "A beginner-friendly tutorial on managing media uploads in Django applications using built-in tools and configurations.",
          tags: ["Python", "Django", "Web Development", "File Uploads"],
          img: "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F5kz266qfu5n4a7we4ptq.png",
          links: {
            preview: "https://dev.to/emiloju/how-to-handle-media-uploads-in-django-1kpc"
          }
        }
    ]

    },
    userGuides: {
      title: "Conceptual articles",
      projects: [
        {
          title: "How to Migrate Technical Documentation: Tools, Checklist, and Tips",
          description: "A practical guide covering the essential steps, tools, and best practices for successfully migrating technical documentation.",
          tags: ["Technical Writing", "Documentation", "Migration"],
          img: "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F4dmqhuk8rfn3krj9ivo8.png",
          links: {
            preview: "https://dev.to/emiloju/how-to-migrate-technical-documentation-tools-checklist-and-tips-28gd"
          }
        },
        {
          title: "3 Popular AI Content Generators: Strengths and Limitations",
          description: "An honest comparison of three popular AI-powered content generation tools, exploring their capabilities, use cases, and drawbacks.",
          tags: ["AI Tools", "Content Creation", "Comparison"],
          img: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*4BTOLSsXx73BPn2Ke-skFA.jpeg",
          links: {
            preview: "https://medium.com/@omobolanleedun/3-popular-and-affordable-ai-content-generators-strengths-and-limitations-17b57435f111"
          }
        },
        {
          title: "Effects of AI on Technical Writing",
          description: "An insightful article on how artificial intelligence is transforming the field of technical writing—from content creation to documentation workflows.",
          tags: ["AI", "Technical Writing", "Trends"],
          img: "https://miro.medium.com/v2/resize:fit:1400/format:webp/0*mbvoSwxc4WSHj1Ti",
          links: {
            preview: "https://medium.com/@omobolanleedun/effects-of-ai-in-technical-writing-07b06ae8a6d8?utm_source=canva&utm_medium=iframely"
          }
        }
      ],

    },
    apiDocumentation: {
      title: "API Documentation",
      projects: [
        {
          title: "The Movie Database (TMDB) API documentation",
          description: "Revamped the TMDB API documentation, including authentication and endpoint details.",
          tags: ["OpenAPI spec", "Postman", "Swagger", "API testing", "API", "Technical Writing", "Mintlify"],
          links: { preview: "https://emiloju.mintlify.app/documentation/overview" },
        },
        {
          title: "PLAID API documentation",
          description: "A Postman documentation consisting of the first 30 endpoints of Plaid API",
          tags: ["API", "Technical Writing", "OpenAPI spec", "Postman", "Swagger", "API testing"],
          links: { preview: "https://documenter.getpostman.com/view/34422222/2sAYBPmEMP" },
        },
        {
          title: "Twilio API documentation",
          description: "A readme documentation of Twilio's Identity Access Management (IAM) API documentation.",
          tags: ["API", "Postman",  "API testing", "Technical Writing"],
          links: { preview: "https://twilio-iam-remake.readme.io/reference/getting-started-with-your-api" },
        },
        {
          title: "PLAID API documentation (Readme.io)",
          description: "A readme documentation of Plaid API built through an Open API spec file (in progress)",
          tags: ["OpenAPI spec", "Postman", "Swagger", "API testing", "API", "Technical Writing", "ReadMe"],
          links: { preview: "https://plaid-api-oas.readme.io/reference/postauthget#/" },
        }
      ],
    },
    documentationSites: {
      title: "Product/Developer Documentation",
      projects: [
        {
          title: "Abstract Python",
          description: "Comprehensive documentation for the abstract-python SDK.",
          tags: ["API", "Documentation", "Astro-starlight", "Open-source", "Python", "Vale", "Git", "CI/CD", "Docs-as-Code"],
          links: { preview: "https://abstract-python.vercel.app/" },
        },
        {
          title: "Enterbox Knowledge base",
          description: "Knowledge base for Enterbox that helps reduce support ticket and increase user adoption.",
          tags: ["Knowledge base", "SaaS", "User guide", "Gitbook"],
          links: { preview: "https://www.enterbox.app/knowledgebase" },
        },
      ],
    },
    openSourceContributions: {
      title: "Open Source Contributions",
      projects: [
        {
          title: "Dev Encyclopedia",
          description: "Researched and contributed 15+ software engineering topics to the library.",
          tags: ["Developers", "Software development", "Open-source"],
          links: { preview: "https://devpedia.pages.dev/" },
        },
        {
          title: "Technical Writing Mentorship Program (TWMP)",
          description: "Joined a team of technical writers to curate an open-source course on markdown. I wrote the guide on best practices and tips in markdown.",
          tags: ["Markdown", "Technical Writing"],
          links: { preview: "https://technicalwritingmp.com/docs/markdown-best-practices" },
        },
        {
          title: "Technical Writing Mentorship Program (TWMP)",
          description: "Co-developed a new and improved home page for the TWMP open-source docs during its migration from Hugo to Docusaurus",
          tags: ["Markdown", "Technical Writing", "Hugo", "Docusuarus", "Web design & development", "React"],
          links: { preview: "https://technicalwritingmp.com/" },
        }
      ],
    },
  };

  return (
    <div className="flex flex-col w-full">
      {Object.entries(projectCategories).map(([key, category], index) => (
        <ProjectSection 
          key={key} 
          title={category.title} 
          projects={category.projects}
          isEven={index % 2 === 0}
        />
      ))}
    </div>
  );
};

export default Projects;