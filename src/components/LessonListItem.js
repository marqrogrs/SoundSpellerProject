import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Collapse from '@material-ui/core/Collapse'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'

import { useHistory } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  nested: {
    paddingLeft: theme.spacing(4),
  },
}))

export default function LessonListItem({ title, lessons, index }) {
  const [open, setOpen] = useState(false)
  const history = useHistory()
  const classes = useStyles()

  return (
    <>
      <ListItem button onClick={() => setOpen(!open)} key={index}>
        <ListItemText primary={title} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout='auto' unmountOnExit>
        <List component='div' disablePadding>
          {lessons.map((lesson) => {
            if (parseInt(lesson.lesson_section) === index) {
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
