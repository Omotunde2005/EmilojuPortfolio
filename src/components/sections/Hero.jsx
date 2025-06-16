import React from 'react';
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        {/* Left Content */}
        <div className="font-mono md:w-2/3">
          <h1 className='text-5xl font-bold text-900'>Technical Writer ✍🏾</h1>
          <br />
          <p className="text-2xl text-gray-200">
            Hello! 👋 I'm Rilwan ⚡️
          </p>
          <br />
          <p className="text-xl text-gray-300 mt-4">
            
              I'm a technical writer with a background in software development, focused on helping companies grow by creating clear, developer-friendly documentation that improves adoption, reduces support costs, and speeds up onboarding.<br/><br/>

              With hands-on experience in Python, FastAPI, JavaScript, and modern frameworks, I bridge the gap between engineering and communication by turning complex systems into accessible, actionable content.<br/><br/>

              I’ve contributed to open source, built developer tools, and documented APIs and SaaS products using scalable Docs-as-Code workflows.<br/><br/>

              My tutorials, guides, and articles explain not just <em>how</em> things work, but <em>why</em> they matter—helping users succeed with confidence.<br/><br/>

              I believe great documentation is a growth tool. I help teams turn their docs into a strategic asset that improves user experience and drives results.

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
