import { useState, useEffect } from "react";
import './ProjectList.css';
import * as FaIcon from 'react-icons/fa';

export default function ProjectList() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const apiRequest = async () => {
      let response = await fetch(
        "https://portfolio-express-30kz.onrender.com",
        { method: "GET" }
      );
      let data = await response.json();
      console.log("Data recieved ", data);
      setProjects(data)
    }
    apiRequest();
  }, []);

  return (
    <div className="projects">
      {projects.map((p, index) => (
        <div className="key"key={index}>
          <h3 className="projectName">{p.project_name}</h3>
          <img className="image"src={`../assets/${p.project_image}`} alt="Project" />
          <a className="url" href={p.project_url}><FaIcon.FaGithub/></a>
          <p className="desc">{p.project_description}</p>
          <p className="lang">{p.project_languages.join(", ")}</p>
        </div>
      ))}
    </div>
  )
}
