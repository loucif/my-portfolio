import React from "react";
import type { Project } from "../types/AppType";

const Projects: React.FC<{ projects: Project[] | undefined }> = ({ projects }) => (
  <div className="section" id="Projects-and-contributions">
    <div className="section-title">
      <h2>Projects and Contributions</h2>
    </div>
    {projects?.map((item) => (
      <>
        <hr />
        <div className="subsection">
          <div className="highlights">
            <p>{item.description}</p>
          </div>
          <a href={item.link} className="btn" role="button">
            <i className="fa fa-github"></i>
          </a>
          <a
            href={item.doc} className="btn" role="button">
            <i className="fa fa-sticky-note"></i>
          </a>
          <div className="keyword">
            <p>
              <b>Keywords:</b>
              {item.tags.map((item) => (
                <>|{item}&nbsp;</>
              ))}
            </p>
          </div>
        </div>
      </>
    ))}
  </div>
);

export default Projects;
