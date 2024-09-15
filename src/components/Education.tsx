import React from "react";
import type { Education } from "../types/AppType";

const Education: React.FC<{ education: Education[] | undefined }> = ({ education }) => (
  <div className="section" id="education">
    <div className="section-title">
      <h2>education</h2>
    </div>
    {education?.map((item) => (
      <div className="subsection">
        <div className="subsection-title">
          {item.degree}&nbsp;-&nbsp;{item.field}
        </div>
        <div className="date">{item.year}</div>
        <div className="location">{item.university}</div>
        <div className="keywords">
          <p>
            <b>Relevant Coursework:</b>
            {item.relevant_coursework?.map((item) => (
              <>|{item}&nbsp;</>
            ))}
          </p>
        </div>
      </div>
    ))}
  </div>
);

export default Education;
