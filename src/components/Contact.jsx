export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full bg-gray-900 text-white py-20 text-center"
    >
      <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
      <p className="mb-6">
        Email:{" "}
        <a href="meselesolomon17@gmail.com" className="text-blue-400">
          meselesolomon17@gmail.com
        </a>
      </p>
      <p className="mb-6">
        Phone:{" "}
        <a href="#" className="text-blue-400">
          +251 962 346 264
        </a>
      </p>
      <div className="flex justify-center gap-6">
        <a
          href="https://github.com/meselesolomon"
          target="_blank"
          className="px-4 py-2 bg-blue-500 rounded hover:bg-blue-600 transition"
        >
          GitHub
        </a>
        <a
          href="#"
          target="_blank"
          className="px-4 py-2 bg-blue-700 rounded hover:bg-blue-800 transition"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}
