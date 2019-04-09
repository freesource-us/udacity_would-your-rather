import React from "react";

export const Login = ({ ...props }) => {
  return (
    <div className="page login">
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </div>
  );
};
