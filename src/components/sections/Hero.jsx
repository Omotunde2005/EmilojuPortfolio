import React from 'react';
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        {/* Left Content */}
        <div className="font-mono md:w-2/3">
          <TypeAnimation
            sequence={[
              'Technical Documentation Engineer ✍🏾',
              2000,
              'Software developer 🧑‍💻',
              2000,
              'Developer Advocate 🧑‍💻📢',
              2000,
            ]}
            wrapper="h1"
            speed={50}
            className="text-5xl font-bold mb-6"
            repeat={Infinity}
            cursor={true}
          />
          <br />
          <p className="text-2xl text-gray-200">
            Hello! 👋 I'm Rilwan ⚡️
          </p>
          <br />
          <p className="text-xl text-gray-300">
            
              I'm a technical writer with a background in software development, specializing in creating clear, developer-friendly documentation for APIs, SaaS tools, and open-source projects.<br/><br/>

              With hands-on experience in Python, FastAPI, MongoDB, and frontend tools like Reflex.dev, I bridge the gap between engineering and communication.<br/><br/>

              Over the past few years, I've contributed to open source, built developer-focused tools, and documented projects using modern Docs-as-Code workflows like Mintlify and ReadMe.io.<br/><br/>

              I enjoy writing tutorials, guides, and articles that not only explain how things work—but <em>why</em> they matter.<br/><br/>

              Whether it's building an API from scratch, integrating role-based access control with Permit.io, or deploying interactive documentation, I focus on making complex systems approachable and usable.<br/><br/>

              I'm passionate about helping teams deliver great documentation that improves user experience and reduces support overhead.

          </p>
        </div>
        {/* Right Image */}
        <div className="md:w-1/3 flex justify-center mt-10 md:mt-0">
          <div className="w-64 h-64 rounded-full overflow-hidden bg-gray-200">
            <img
              src="/emiloju.jpeg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
