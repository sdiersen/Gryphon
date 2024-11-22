import React from "react";
import "../../assets/styles/commonForm.css";

type SingleContentLayoutProps = {
  children: React.ReactNode;
};

const SingleContentLayout: React.FC<SingleContentLayoutProps> = ({
  children,
}) => {
  return (
    <div className="container">
      <div className="columns is-centered">
        <div className="column is-half">{children}</div>
      </div>
    </div>
  );
};

export default SingleContentLayout;
