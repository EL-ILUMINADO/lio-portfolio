const skillsData = [
  {
    category: "Frontend",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "Zustand",
      "Tailwind CSS",
      "Framer Motion",
      "HTML5",
      "CSS3",
    ],
  },
  {
    category: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "RESTful APIs",
      "JWT Authentication",
      "Stripe Integration",
      "Email Notifications (Nodemailer)",
    ],
  },
  {
    category: "Database & Cloud",
    skills: ["MongoDB", "Mongoose ODM", "Firebase", "Prisma ORM", "Cloudinary"],
  },
  {
    category: "Tools & DevOps",
    skills: [
      "Git & GitHub",
      "Postman",
      "VS Code",
      "Vercel Deployment",
      "Render & Railway",
      "Linux / CLI",
    ],
  },
  {
    category: "Soft Skills",
    skills: [
      "Problem Solving",
      "Clean Code Practices",
      "Collaboration",
      "Adaptability",
      "Communication",
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 max-w-5xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-amber-500 mb-10">Skills</h2>

      <div className="space-y-10">
        {skillsData.map((group, index) => (
          <div key={index}>
            <h3 className="text-xl font-semibold text-white mb-4">
              {group.category}
            </h3>

            <div className="flex flex-wrap justify-center gap-4">
              {group.skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-gray-800 rounded-lg text-gray-300 hover:bg-gray-700 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
