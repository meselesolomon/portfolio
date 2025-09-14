import Project1Img from "../assets/project1.jpg";
import Project2Img from "../assets/project2.jpg";

export default function Projects() {
  const projectList = [
    {
      name: "Project 1",
      desc: "Dilet Baltina",
      link: "https://dlet-baltna.web.app",
      image: Project1Img,
    },
    {
      name: "Project 2",
      desc: "Clone Apple Website",
      link: "https://apple-website-clone1.vercel.app",
      image: Project2Img,
    },
  ];

  return (
    <section id="projects" className="w-full bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-10 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectList.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 transition transform flex flex-col items-center"
            >
              {/* Wrap the image in a flex container to center */}
              <div className="flex justify-center w-full mt-4">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-48 h-40 object-cover rounded"
                />
              </div>

              <div className="p-6 text-center">
                <h3 className="font-bold text-2xl mb-2">{project.name}</h3>
                <p className="mb-4">{project.desc}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
