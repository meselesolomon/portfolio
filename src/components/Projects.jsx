export default function Projects() {
  const projectList = [
    { name: "Project 1", desc: "Portfolio website", link: "#" },
    { name: "Project 2", desc: "Todo App", link: "#" },
  ];

  return (
    <div id="projects" className="p-10 bg-gray-100">
      <h2 className="text-3xl font-bold mb-4">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projectList.map((p, i) => (
          <div key={i} className="p-4 border rounded shadow hover:shadow-lg">
            <h3 className="font-bold">{p.name}</h3>
            <p>{p.desc}</p>
            <a href={p.link} className="text-blue-500">
              View
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
