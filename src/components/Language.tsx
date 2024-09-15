import React from 'react';

const Languages: React.FC<{ languages: string[] | undefined }> = ({ languages }) => (
  <div className="section" id="languages">
    <div className="section-title">
      <h2>languages</h2>
    </div>
    <p>{languages?.map((item) => (<>|{item}&nbsp;</>))}</p>
  </div>
);

export default Languages;
