import React, { useRef, useState } from "react";
import { default as ReactKeyboard } from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import TextField from "@material-ui/core/TextField";

export default function Keyboard() {
  const [input, setInput] = useState("");
  const layout = {
    default: [
      "                      {bksp}",
      " q w e r t y u i o p   ",
      " a s d f g h j k l ;  {enter}",
      " z x c v b n m , .  ",
      " {space} ",
    ],
  };
  const display = {
    "{bksp}": "delete",
    "{enter}": "enter",
    "{space}": "space",
  };

  const keyboard = useRef();

  const onChange = (inputValue) => {
    setInput(inputValue);
    console.log("Input changed", input, inputValue);
  };
  // const onKeyPress = (inputValue) => {
  //   console.log("Key pressed", inputValue);
  //   // setInput(inputValue);
  //   // console.log("Input changed", input, inputValue);
  // };

  const handleChange = (e) => {
    console.log(e.target.value);
    setInput(e.target.value);
  };

  return (
    <>
      <TextField
        id="filled-full-width"
        style={{ margin: 8 }}
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
        variant="filled"
        value={input}
        onChange={handleChange}
        autoFocus={true}
      />

      <ReactKeyboard
        keyboardRef={(r) => (keyboard.current = r)}
        layout={layout}
        display={display}
        physicalKeyboardHighlight={true}
        onChange={onChange}
        // onKeyPress={onKeyPress}
      />
    </>
  );
}