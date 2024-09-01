import React, { useState } from "react";
import runCode from "../backend/codeExe";

// not working ok

const Output = () => {
  const [userOutput, setUserOutput] = useState(``);
  function handleOutput() {
    runCode()
      .then((output) => {
        console.log("output: ", output);
        // setUserOutput(output);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div>
      <button type="button" onClick={handleOutput}>
        Run
      </button>
      <h2>Output</h2>
      <div
        style={{ width: "500px", height: "200px", backgroundColor: "#dadada" }}
      >
        {userOutput ? userOutput : "Output_here"}
      </div>
    </div>
  );
};

export default Output;
