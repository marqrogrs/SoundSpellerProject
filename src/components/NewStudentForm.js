import React, { useState, useContext } from 'react'
import { UserContext } from '../providers/UserProvider'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import Button from '@material-ui/core/Button'
import Add from '@material-ui/icons/Add'
import TextField from '@material-ui/core/TextField'

import { useStyles } from '../styles/material'

export default function NewStudentForm() {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const [classroom, setClassroom] = useState('')
  const [newClass, setNewClass] = useState('')
  const [createNewClassroom, setCreateNewClassroom] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const { addNewStudent, classrooms } = useContext(UserContext)

  const handleChange = (e) => {
    const { name, value } = e.target
    switch (name) {
      case 'classroom':
        if (value === 'newClass') {
          setCreateNewClassroom(true)
        } else {
          setCreateNewClassroom(false)
        }
        setClassroom(value)
        break
      case 'newClass':
        setNewClass(value)
        break
      case 'username':
        setUsername(value)
        break
      case 'password':
        setPassword(value)
        break
      case 'confirmPassword':
        setConfirmPassword(value)
        break
      default:
        break
    }
  }

  const handleNewStudentClicked = () => {
    //TODO: validate
    const studentClassroom = createNewClassroom ? newClass : classroom
    addNewStudent({ username, password, classroom: studentClassroom })
      .then((res) => console.log(res))
      .catch((e) => console.log(e))
  }

  return (
    <>
      <Fab
        color='primary'
        aria-label='add'
        className={classes.fab}
        onClick={() => setOpen(true)}
      >
        <AddIcon />
      </Fab>
      <Modal
        className={classes.modal}
        open={open}
        onClose={() => setOpen(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.modalPaper}>
            <h2>Create new student</h2>
            <FormControl className={classes.formControl}>
              <InputLabel>Class</InputLabel>
              <Select
                name='classroom'
                label='Class'
                value={classroom}
                onChange={handleChange}
              >
                <MenuItem value='newClass' className={classes.selectConstant}>
                  + New Class
                </MenuItem>
                {classrooms &&
                  classrooms.map((c) => (
                    <MenuItem value={c.id}>{c.id}</MenuItem>
                  ))}
              </Select>
            </FormControl>
            {createNewClassroom && (
              <TextField
                name='newClass'
                label='New Classroom'
                variant='outlined'
                color='secondary'
                value={newClass}
                onChange={handleChange}
              ></TextField>
            )}
            <TextField
              name='username'
              label='Username'
              variant='outlined'
              color='secondary'
              value={username}
              onChange={handleChange}
            ></TextField>
            <TextField
              name='password'
              label='Password'
              variant='outlined'
              color='secondary'
              type='password'
              value={password}
              onChange={handleChange}
            ></TextField>
            <TextField
              name='confirmPassword'
              label='Confirm Password'
              variant='outlined'
              color='secondary'
              type='password'
              value={confirmPassword}
              onChange={handleChange}
            ></TextField>
            <Button
              variant='contained'
              color='secondary'
              onClick={handleNewStudentClicked}
              startIcon={<Add />}
            >
              Add Student
            </Button>
          </div>
        </Fade>
      </Modal>
    </>
  )
}
