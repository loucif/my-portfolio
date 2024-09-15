import React from 'react';

const Interests: React.FC<{ interests: string[] | undefined }> = ({ interests }) => (
  <div className="section" id="interests">
    <div className="section-title">
      <h2>interests</h2>
    </div>
    <p>{interests?.map((item) => (<>|{item}&nbsp;</>))}</p>
  </div>
);

export default Interests;
