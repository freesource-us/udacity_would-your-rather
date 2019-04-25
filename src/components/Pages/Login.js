import React from "react";

export const Login = ({ ...props }) => {
  localStorage.setItem("session", "username");
  // TODO: handle login
  return (
    <article className="page login">
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </article>
  );
};
