import { useState } from "react";
import ResultList from "./components/ResultList";
import UserInput from "./components/UserInput";
import Header from "./components/Header";

function App() {
  const [inputValue, setInputValue] = useState({
    initial: "",
    annual: "",
    expected: "",
    duration: "",
  });

  function handleInput(name, value) {
    setInputValue((prev) => ({ ...prev, [name]: Number(value) }));
  }

  return (
    <>
      <Header />
      <UserInput handleInput={handleInput} inputValue={inputValue} />
      <ResultList inputValue={inputValue} />
    </>
  );
}

export default App;
