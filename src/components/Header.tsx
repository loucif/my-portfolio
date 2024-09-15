import React from "react";

interface HeaderComponentProps {
  name: string | undefined;
  designation: string[] | undefined;
}

const Header: React.FC<HeaderComponentProps> = ({ name, designation }) => (
  <div className="row head">
    <div className="col-md-12 name">
      <h1>{name}</h1>
      <h4>
        {designation?.map((item) => (
          <>|{item}&nbsp;</>
        ))}
      </h4>
    </div>
  </div>
);

export default Header;
