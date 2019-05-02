import React from "react";

export const Icon = ({ icon }) => {
  return <div className="icon" style={{ backgroundImage: `url(${icon})` }} />;
};
