import React from "react";

export default function CheckWord({ words }) {
  const handleCheckWord = () => {
    const newCheckedWord = document.getElementById("wordCheck").value;
    if (words.includes(newCheckedWord)) {
      alert("Word Found");
    } else {
      alert("Words Missing");
    }
  };
  return (
    <>
      <input type="text" id="wordCheck" placeholder="Place word here" />
      <button onClick={handleCheckWord}> Check Word</button>
    </>
  );
}
