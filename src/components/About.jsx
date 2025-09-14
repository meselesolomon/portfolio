export default function About() {
  return (
    <section id="about" className="w-full bg-gray-100 py-20">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <p className="max-w-xl mx-auto mb-8">
          I’m a computer science graduate building modern web applications with
          React. I enjoy clean, responsive interfaces and continuous learning.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition">
            <h3 className="font-bold text-xl mb-2">React</h3>
            <p>Building dynamic, responsive front-end interfaces.</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition">
            <h3 className="font-bold text-xl mb-2">Tailwind CSS</h3>
            <p>Creating beautiful UI with minimal code.</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition">
            <h3 className="font-bold text-xl mb-2">JavaScript</h3>
            <p>Strong foundation in ES6+ and modern frameworks.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
