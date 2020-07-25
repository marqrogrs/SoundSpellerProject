import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  List,
  ListItemText,
  ListItem,
  ListSubheader,
  Collapse,
} from '@material-ui/core'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import { useLessons } from '../hooks/useLessons'

//TODO: refactor and export all these styles
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    // maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}))

export default function LessonList() {
  const { lessons } = useLessons()
  const classes = useStyles()
  const [part1Open, setPart1Open] = React.useState(false)
  const [part2Open, setPart2Open] = React.useState(false)
  const [part3Open, setPart3Open] = React.useState(false)
  const [part4Open, setPart4Open] = React.useState(false)

  const handleClick = (part) => {
    switch (part) {
      case 1:
        setPart1Open(!part1Open)
        break
      case 2:
        setPart2Open(!part2Open)
        break
      case 3:
        setPart3Open(!part3Open)
        break
      case 4:
        setPart4Open(!part4Open)
        break
      default:
        break
    }
  }
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
        {/* TODO: loooots of repetition here! Need to break these out into their own component */}
        <ListItem button onClick={() => handleClick(1)} key={1}>
          <ListItemText primary='Part 1' />
          {part1Open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={part1Open} timeout='auto' unmountOnExit>
          <List component='div' disablePadding>
            {lessons.map((lesson) => {
              if (parseInt(lesson.lesson_section) === 1) {
                return (
                  <ListItem
                    key={lesson.lesson_id}
                    button
                    className={classes.nested}
                    component='a'
                    href={`lessons/${lesson.lesson_id}`}
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
        <ListItem button onClick={() => handleClick(2)} key={2}>
          <ListItemText primary='Part 2' />
          {part2Open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={part2Open} timeout='auto' unmountOnExit>
          <List component='div' disablePadding>
            {lessons.map((lesson) => {
              if (parseInt(lesson.lesson_section) === 2) {
                return (
                  <ListItem
                    key={lesson.lesson_id}
                    button
                    className={classes.nested}
                    component='a'
                    href={`lessons/${lesson.lesson_id}`}
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
        <ListItem button onClick={() => handleClick(3)} key={3}>
          <ListItemText primary='Part 3' />
          {part3Open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={part3Open} timeout='auto' unmountOnExit>
          <List component='div' disablePadding>
            {lessons.map((lesson) => {
              if (parseInt(lesson.lesson_section) === 3) {
                return (
                  <ListItem
                    key={lesson.lesson_id}
                    button
                    className={classes.nested}
                    component='a'
                    href={`lessons/${lesson.lesson_id}`}
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
        <ListItem button onClick={() => handleClick(4)} key={4}>
          <ListItemText primary='Part 4' />
          {part4Open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={part4Open} timeout='auto' unmountOnExit>
          <List component='div' disablePadding>
            {lessons.map((lesson) => {
              if (parseInt(lesson.lesson_section) === 4) {
                return (
                  <ListItem
                    key={lesson.lesson_id}
                    button
                    className={classes.nested}
                    component='a'
                    href={`lessons/${lesson.lesson_id}`}
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
      </List>
    </div>
  )
}
