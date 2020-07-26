import React, { useRef, useState } from 'react'
import { default as ReactKeyboard } from 'react-simple-keyboard'
import KeyboardEventHandler from 'react-keyboard-event-handler'

import 'react-simple-keyboard/build/css/index.css'
import TextField from '@material-ui/core/TextField'
import { DEFAULT_BUTTONS_THEME } from '../constants'
import '../styles/keyboard.css'

export default function Keyboard({ onChange }) {
  const layout = {
    default: [
      '                      {bksp}',
      ' q w e r t y u i o p   ',
      ' a s d f g h j k l ;  {enter}',
      ' z x c v b n m , .  ',
      ' {space} ',
    ],
  }
  const display = {
    '{bksp}': 'delete',
    '{enter}': 'enter',
    '{space}': 'space',
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
