import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Box from '@material-ui/core/Box'
import Collapse from '@material-ui/core/Collapse'
import IconButton from '@material-ui/core/IconButton'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'
import VisibilityIcon from '@material-ui/icons/Visibility'
import { useStyles } from '../styles/material'

export default function ClassListItem({ classroom }) {
  const classes = useStyles()
  const history = useHistory()
  const [open, setOpen] = useState(false)

  return (
    <>
      <TableRow className={classes.progressList} style={{ width: '100%' }}>
        <TableCell>
          <IconButton
            aria-label='expand row'
            size='small'
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component='th' scope='row'>
          {classroom.id}
        </TableCell>
        <TableCell align='right'>{classroom.students.length}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout='auto' unmountOnExit>
            <Box margin={1}>
              <Table size='small' aria-label='purchases'>
                <TableHead>
                  <TableRow>
                    <TableCell>Username</TableCell>
                    <TableCell>View Progress</TableCell>
                    <TableCell>Reset Password</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {classroom.students.map((student, i) => {
                    return (
                      <TableRow key={i}>
                        <TableCell>{student}</TableCell>
                        <TableCell>
                          <IconButton
                            aria-label='expand row'
                            size='small'
                            onClick={() => history.push(`/students/${student}`)}
                          >
                            <VisibilityIcon />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    )
                  })}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  )
}
