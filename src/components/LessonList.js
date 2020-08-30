import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { List, ListSubheader } from '@material-ui/core'
import { LessonContext } from '../providers/LessonProvider'
import { useHistory } from 'react-router-dom'
import LessonListItem from './LessonListItem'
import { LESSON_SECTIONS } from '../constants'

//TODO: refactor and export all these styles
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    // maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}))

export default function LessonList({ props, navigation }) {
  const { lessons } = useContext(LessonContext)
  let history = useHistory()
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <List
        component='nav'
        aria-labelledby='nested-list-subheader'
        subheader={
          <ListSubheader component='div' id='nested-list-subheader'>
            Lessons
          </ListSubheader>
        }
        className={classes.root}
      >
        {LESSON_SECTIONS.map((section, i) => (
          <LessonListItem title={`Part ${i + 1}`} lessons={lessons} index={i} />
        ))}
      </List>
    </div>
  )
}
