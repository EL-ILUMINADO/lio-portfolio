const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-gray-800 text-center">
      <h2 className="text-3xl font-bold text-amber-500 mb-6">Contact Me</h2>
      <p className="text-gray-400 mb-8">
        Please, feel free to reach out for offers, collaborations or just a
        friendly hello 👋
      </p>
      <div className="flex justify-center space-x-6">
        <a
          href="mailto:lawrenceimana108@gmail.com"
          className="text-gray-300 hover:text-amber-500 transition"
        >
          Email
        </a>
        <a
          href="https://github.com/EL-ILUMINADO"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-amber-500 transition"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/el-iluminado"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-amber-500 transition"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
};

export default Contact;
