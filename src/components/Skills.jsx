const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 max-w-5xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-amber-500 mb-10">Skills</h2>
      <div className="flex flex-wrap justify-center gap-4">
        <span className="px-4 py-2 bg-gray-800 rounded-lg text-gray-300">
          React
        </span>
        <span className="px-4 py-2 bg-gray-800 rounded-lg text-gray-300">
          TypeScript
        </span>
        <span className="px-4 py-2 bg-gray-800 rounded-lg text-gray-300">
          Node.js
        </span>
        <span className="px-4 py-2 bg-gray-800 rounded-lg text-gray-300">
          Express.js
        </span>
        <span className="px-4 py-2 bg-gray-800 rounded-lg text-gray-300">
          MongoDB
        </span>
        <span className="px-4 py-2 bg-gray-800 rounded-lg text-gray-300">
          TailwindCSS
        </span>
      </div>
    </section>
  );
};

export default Skills;
