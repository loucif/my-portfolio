import React from "react";
import type { Experience } from "../types/AppType";

const Experience: React.FC<{ experiences: Experience[] | undefined }> = ({ experiences }) => (
  <div className="section" id="experience">
    <div className="section-title">
      <h2>experience</h2>
    </div>
    {experiences?.map((item) => (
      <div className="subsection">
        <div className="subsection-title">{item.title}</div>
        <div className="date">{item.year}</div>
        <div className="location">
          {item.company}&nbsp;|&nbsp;{item.location}
        </div>
        <div className="highlights">
          <p>{item.desc}</p>
        </div>
        <div className="keywords">
          <p>
            <b>Keywords:</b>
            {item.keyword.map((item) => (
              <>|{item}&nbsp;</>
            ))}
          </p>
        </div>
      </div>
    ))}
  </div>
);

export default Experience;
