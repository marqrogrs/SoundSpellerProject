import React, { useState } from 'react';

import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import AssignmentLateIcon from '@material-ui/icons/AssignmentLate';
import Fab from '@material-ui/core/Fab';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';

import { useStyles } from './../styles/material';

export default function LessonRulesModal({ rules, isOpen }) {
  const classes = useStyles();
  const [open, setOpen] = useState(isOpen);

  console.log('open modal', open);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Tooltip title="Check the Spelling Patterns of this question">
        <Fab
          color="primary"
          aria-label="add"
          className={classes.lessonRuleFab}
          size="medium"
          onClick={handleOpen}
        >
          <AssignmentLateIcon />
        </Fab>
      </Tooltip>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.modalPaper}>
            <Box mb={3}>
              <Typography
                align="center"
                variant="h5"
                component="h2"
                id="transition-modal-title"
              >
                Spelling Patterns
              </Typography>
            </Box>

            <Typography id="transition-modal-description">
              • {rules}
            </Typography>

            <Box
              my={3}
              id="transition-modal-description"
              align="center"
              display="flex"
              alignItems="center"
            >
              <Typography>You can click on </Typography>

              <Box mx={1}>
                <Avatar>
                  <AssignmentLateIcon />
                </Avatar>
              </Box>

              <Typography>to see the rules again</Typography>
            </Box>
            <Button
              variant="contained"
              color="primary"
              onClick={() => setOpen(false)}
            >
              I got it
            </Button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
