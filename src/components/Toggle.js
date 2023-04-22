/*import React from "react";

function Toggle() {
  return <button>OFF</button>;
}

export default Toggle;
*/


// My new code
import React, { useState } from "react";

function Toggle() {
  const [isOn, setIsOn] = useState(false);

  function handleClick() {
    setIsOn((isOn) => !isOn)
  }

  // code that was first created.
  //return <button onClick={handleClick}> {isOn ? "ON" : "OFF"}</button>

  const color = isOn ? "red" : "white"

  return (
    <button style={{ background: color }} onClick={handleClick}>
      {isOn ? "ON" : "OFF"}
    </button>
  );

}

export default Toggle;