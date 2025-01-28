import React from 'react'
import { useHistory } from 'react-router-dom'
import { useStyles } from '../styles/material'

const Landing = () => {
  const history = useHistory()
  const classes = useStyles()

return (
    <div className={classes.landingContainer}>
      <div className={classes.rightPanel}>
        <div className={classes.welcomeText}>
          <img src={require('../img/SoundSpeller_Banner_Cropped.png')} alt="SoundSpeller Banner" />
        </div>

        <div className={`${classes.userType} kid`} onClick={() => history.push('/student')}>
          <div className='upper-text text-american-typewriter'>I am a</div>
          <div className='lower-text text-american-typewriter'>Kid</div>
        </div>
        <div className={`${classes.userType} adult`} onClick={() => history.push('/educator')}>
          <div className='upper-text text-american-typewriter'>I am an</div>
          <div className='lower-text text-american-typewriter'>Adult</div>
        </div>
      </div>
    </div>
  )
}

export default Landing