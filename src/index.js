import React from "react";
import ReactDOM from "react-dom/client";

function Country() {
  return (
    <div>
      <img alt="" src=""></img>
      <span></span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("country"));
root.render(<Country />);
