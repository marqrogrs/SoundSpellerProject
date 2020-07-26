import React, { useState } from 'react'
import { Typography, Slider } from '@material-ui/core'
import { changeSpeechSpeed } from '../util/Audio'

const MARKS = [
  {
    value: 0,
    label: 'Slower',
  },
  {
    value: 25,
    label: 'Slow',
  },
  {
    value: 50,
    label: 'Normal',
  },
  {
    value: 75,
    label: 'Fast',
  },
  {
    value: 100,
    label: 'Faster',
  },
]

export default function SpeechSlider() {
  const [speed, setSpeed] = useState(50)

  const handleChangeSpeed = (e, newSpeed) => {
    setSpeed(newSpeed)
  }

  const handleChangeSpeedCommitted = (e, newSpeed) => {
    changeSpeechSpeed(newSpeed)
  }

  return (
    <>
      <Typography>Speed:</Typography>
      <Slider
        value={speed}
        onChange={handleChangeSpeed}
        onChangeCommitted={handleChangeSpeedCommitted}
        aria-labelledby='continuous-slider'
        valueLabelDisplay='off'
        marks={MARKS}
        step={25}
      />
    </>
  )
}
