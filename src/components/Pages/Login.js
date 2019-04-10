import React from "react";

export const Login = ({ ...props }) => {
  return (
    <article className="page login">
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </article>
  );
};
