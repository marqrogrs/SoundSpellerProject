import React, { useState } from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import AssignmentLateIcon from '@material-ui/icons/AssignmentLate';
import Fab from '@material-ui/core/Fab';
import Button from '@material-ui/core/Button';
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
      <Fab
        color="primary"
        aria-label="add"
        className={classes.lessonRuleFab}
        size="small"
        onClick={handleOpen}
      >
        <AssignmentLateIcon />
      </Fab>

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
            <h2 id="transition-modal-title">Spelling Patterns</h2>
            <p id="transition-modal-description">{rules}</p>
            <p>
              <span>You can click on </span>
              <AssignmentLateIcon />
              <span> to see the rules again</span>
            </p>
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
