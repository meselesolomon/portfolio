export default function Hero() {
  return (
    <section
      id="hero"
      className="mx-auto w-full min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white"
    >
      <h1 className="text-5xl md:text-6xl font-bold mb-4 transform translate-y-10 opacity-0 animate-slideUp">
        Hi, I'm Mesele Solomon
      </h1>
      <p className="text-xl md:text-2xl mb-6 animate-bounce">
        Frontend Developer
      </p>

      <a
        href="#projects"
        className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-200 transition"
      >
        View My Work
      </a>
    </section>
  );
}
