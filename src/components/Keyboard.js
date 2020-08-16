import React, { useRef, useEffect } from 'react'
import { default as ReactKeyboard } from 'react-simple-keyboard'
import KeyboardEventHandler from 'react-keyboard-event-handler'

import 'react-simple-keyboard/build/css/index.css'
import { DEFAULT_BUTTONS_THEME } from '../constants'
import '../styles/keyboard.css'

export default function Keyboard({ onChange }) {
  const layout = {
    default: [
      'q w e r t y u i o p {bksp}',
      'a s d f g h j k l ; {enter}',
      'z x c v b n m , .   ',
      '{space}',
    ],
  }
  const display = {
    '{bksp}': 'delete',
    '{enter}': 'enter',
    '{space}': ' ',
  }

  const keyboard = useRef()

  useEffect(() => {
    //So the keyboard can be displayed in all caps
    var keys = document.getElementsByClassName('hg-button hg-standardBtn')
    Array.from(keys).forEach((key) => {
      const letter = key.attributes['data-skbtn'].nodeValue
      key.innerHTML = `<span>${letter.toUpperCase()}</span>`
    })
  }, [])
  return (
    <>
      <KeyboardEventHandler handleKeys={['all']} onKeyEvent={onChange} />
      <ReactKeyboard
        keyboardRef={(r) => (keyboard.current = r)}
        layout={layout}
        display={display}
        physicalKeyboardHighlight={true}
        // syncInstanceInputs={true}
        buttonTheme={DEFAULT_BUTTONS_THEME}
      />
    </>
  )
}
