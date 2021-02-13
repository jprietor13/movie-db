import React from "react";

export const Details = ({ match }) => {
  const { id } = match.params;
  console.log("🚀 ~ file: Details.jsx ~ line 6 ~ Details ~ idMovie", id);
  return <div className="details">Detalle</div>;
};
