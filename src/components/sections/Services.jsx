import React from 'react';
import { Code, BookOpen, Files, Users } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: "API Documentation",
      description: "I specialize in creating clear, structured and developer friendly API documentation that helps developers integrate faster and with confidence using industry-standard tools like OpenAPI, Postman, etc.",
      icon: <Code className="w-8 h-8 mb-4 text-purple-400" />,
      stats: "3+ API documentation samples"
    },
    {
      title: "Technical Content",
      description: "My writing is geared towards helping developers understand complex software development concepts, adopt new tools, and build more efficiently with modern tech stacks.",
      icon: <Files className="w-8 h-8 mb-4 text-blue-400" />,
      stats: "12+ articles published"
    },
    {
      title: "Documentation engineering",
      description: "I design and maintain scalable, developer-focused documentation systems that align with the software development lifecycle. I implement Docs-as-Code workflows using tools like Markdown, Git, Vale, CI/CD pipelines, and static site generators such as Docusaurus, Astro, etc.",
      icon: <BookOpen className="w-8 h-8 mb-4 text-green-400" />,
      stats: "3+ Product/developer documentation samples"
    }
  ];

  return (
    <section className="py-20 px-6 bg-[#1a1f2e]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">What I do 🎯</h2>
          <p className="text-gray-400 text-lg">A summary of my documentation and technical writing expertise</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group relative bg-[#0d1117] p-8 rounded-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/10"
            >
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              {/* Content */}
              <div className="relative">
                {/* Icon with gradient background */}
                <div className="rounded-lg p-2 w-fit mb-4 bg-gradient-to-r from-purple-500/10 to-blue-500/10">
                  {service.icon}
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-purple-400 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 mb-4 line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                  {service.description}
                </p>

                {/* Stats with animation */}
                <div className="mt-4 text-sm font-semibold text-purple-400/80 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  {service.stats}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}