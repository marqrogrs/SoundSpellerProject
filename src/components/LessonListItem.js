import React, { useState, useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Collapse from '@material-ui/core/Collapse'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import { LessonContext } from '../providers/LessonProvider'

import { useHistory } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  nested: {
    paddingLeft: theme.spacing(4),
  },
}))

export default function LessonListItem({ title, section }) {
  const [open, setOpen] = useState(false)
  const { lessons } = useContext(LessonContext)
  const history = useHistory()
  const classes = useStyles()

  return (
    <>
      <ListItem button onClick={() => setOpen(!open)}>
        <ListItemText primary={title} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout='auto' unmountOnExit>
        <List component='div' disablePadding>
          {lessons.map((lesson) => {
            if (parseInt(lesson.lesson_section) === section) {
              return (
                <ListItem
                  key={lesson.lesson_id}
                  button
                  className={classes.nested}
                  onClick={() => {
                    history.push(`lessons/${lesson.lesson_id}`)
                  }}
                >
                  <ListItemText primary={lesson.description} />
                </ListItem>
              )
            } else {
              return <></>
            }
          })}
        </List>
      </Collapse>
    </>
  )
}
