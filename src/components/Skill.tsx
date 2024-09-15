import React from 'react';
import type { Skill } from '../types/AppType';

const Skills: React.FC<{ skills: Skill[] | undefined }> = ({ skills }) => (
  <div className="section" id="technical-skills">
    <div className="section-title">
      <h2>skills</h2>
    </div>
    {skills?.map((item) => (
      <div className='subsection'>
        <div className='subsection-title'>{item.tech}</div>
        <p>{item.tech_list?.map((item) => (<>|{item}&nbsp;</>))}</p>
      </div>
    ))}
  </div>
);

export default Skills;
