import React from "react";

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center justify-center h-[60vh] text-center bg-gray-900 text-white px-4">
      {/* Name */}
      <h1 className="text-5xl md:text-7xl font-extrabold mb-4">
        Hi, I’m <span className="text-amber-600">Lawrence Imana</span>
      </h1>

      {/* Role */}
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-300 mb-6">
        Full-Stack Developer | AI Enthusiast
      </h2>

      {/* Short tagline */}
      <p className="max-w-2xl text-gray-400 mb-8">
        I build modern web applications with React, TypeScript, and Node.js.
        Passionate about clean code, great UI/UX, and solving real-world
        problems.
      </p>

      {/* Buttons */}
      <div className="flex space-x-4">
        <a
          href="#projects"
          className="px-6 py-3 rounded-lg bg-amber-700 hover:bg-amber-600 text-white font-medium transition"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="px-6 py-3 rounded-lg border border-gray-500 hover:border-amber-600 text-gray-300 hover:text-amber-600 transition"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
