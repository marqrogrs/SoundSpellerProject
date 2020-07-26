import React, { useState } from 'react'
import { Typography, ButtonGroup, Button } from '@material-ui/core'
import { LEVELS } from '../constants'

export default function LevelPicker() {
  const [level, setLevel] = useState(0)

  const handleSelectLevel = (e) => {
    setLevel(parseInt(e.target.innerText))
  }

  return (
    <>
      <Typography>Pick a level:</Typography>
      <ButtonGroup color='primary' aria-label='outlined primary button group'>
        {/* TODO: disable levels */}
        {LEVELS.map((l, index) => {
          return (
            <Button
              key={index}
              variant={level === index ? `contained` : `outlined`}
              onClick={handleSelectLevel}
            >
              {index}
            </Button>
          )
        })}
      </ButtonGroup>
    </>
  )
}
