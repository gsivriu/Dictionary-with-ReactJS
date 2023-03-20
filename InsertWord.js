import { useEffect } from "react";

export default function InsertWord({ words, setWords }) {
  const handleAddWord = () => {
    const newWord = document.getElementById("wordEnter").value;
    setWords([...words, newWord]);
    document.getElementById("wordEnter").value = "";
  };
  useEffect(() => {}, [words]);
  return (
    <>
      <input type="text" id="wordEnter" placeholder="Place word here" />
      <button onClick={handleAddWord}> Insert word</button>
    </>
  );
}
