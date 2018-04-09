import React from "react";

const MyButton = ({ title, onClick }) => {
  const styles = {
    backgroundColor: "#007dff",
    color: "white",
    padding: "4px 10px",
    fontSize: "14px",
    border: "1px solid red",
    borderRadius: "4px"
  };
  return (
    <button onClick={onClick} style={styles}>
      {title}
    </button>
  );
};

export { MyButton };
