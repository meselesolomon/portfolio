export default function Footer() {
  return (
    <footer className="w-full bg-blue-500 text-white py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="mb-4">
          &copy; {new Date().getFullYear()} Mesele Solomon. All rights reserved.
        </p>
        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/meselesolomon"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-200 transition"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/meselesolomon"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-200 transition"
          >
            LinkedIn
          </a>
          <a
            href="mailto:meselesolomon17@gmail.com"
            className="hover:text-gray-200 transition"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
