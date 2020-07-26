import React, { useRef } from 'react'
import { default as ReactKeyboard } from 'react-simple-keyboard'
import KeyboardEventHandler from 'react-keyboard-event-handler'

import 'react-simple-keyboard/build/css/index.css'
import { DEFAULT_BUTTONS_THEME } from '../constants'
import '../styles/keyboard.css'

export default function Keyboard({ onChange }) {
  const layout = {
    default: [
      'Q W E R T Y U I O P {bksp}',
      'A S D F G H J K L ; {enter}',
      'Z X C V B N M , .   ',
      '{space}',
    ],
  }
  const display = {
    '{bksp}': 'delete',
    '{enter}': 'enter',
    '{space}': ' ',
  }

  const keyboard = useRef()

  return (
    <>
      <KeyboardEventHandler handleKeys={['all']} onKeyEvent={onChange} />
      <ReactKeyboard
        keyboardRef={(r) => (keyboard.current = r)}
        layout={layout}
        display={display}
        physicalKeyboardHighlight={true}
        buttonTheme={DEFAULT_BUTTONS_THEME}
      />
    </>
  )
}
