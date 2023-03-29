import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Person from "./assets/components/NestedCom/Person";
import ArrayPratice from "./assets/components/NestedCom/ArrayPratice";
function App() {
  return (
    <>
      {/* <Message></Message> */}
      <Person></Person>
      <ArrayPratice></ArrayPratice>
    </>
  );
}

export default App;
