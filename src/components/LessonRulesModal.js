import React, { useState, useEffect } from 'react';

import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import CategoryIcon from '@material-ui/icons/Category';
import Fab from '@material-ui/core/Fab';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';

import { useStyles } from './../styles/material';
import { textToSpeech, terminateAudio } from './../util/Audio';

export default function LessonRulesModal({ currentLesson, isOpen }) {
  const rulesDescription = currentLesson?.lesson.rules.map(
    (rule) => rule.rule,
  );

  const classes = useStyles();
  const [open, setOpen] = useState(isOpen);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    terminateAudio();
  };

  const sayRules = () => {
    textToSpeech('Spelling Patterns:');
    rulesDescription.forEach((description) =>
      textToSpeech(description),
    );
  };

  useEffect(() => {
    if (open) sayRules();
  }, [open]);

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
          <CategoryIcon />
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
            <Box
              mb={3}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Typography
                variant="h5"
                component="h2"
                id="transition-modal-title"
                alignItems="center"
              >
                Spelling Patterns
              </Typography>

              <Box mx={1}>
                <Fab
                  color="primary"
                  aria-label="add"
                  size="small"
                  onClick={sayRules}
                >
                  <VolumeUpIcon />
                </Fab>
              </Box>
            </Box>

            {rulesDescription?.map((rule) => (
              <Typography key={rule}>• {rule}</Typography>
            ))}

            <Box
              my={3}
              id="transition-modal-description"
              align="center"
              display="flex"
              alignItems="center" //This line causes a warning in the console, but it is a legit attribute of this component
            >
              <Typography>You can click on </Typography>

              <Box mx={1}>
                <Fab
                  color="primary"
                  size="small"
                  disabled
                  style={{
                    backgroundColor: '#0d47a1',
                    color: 'white',
                  }}
                >
                  <CategoryIcon />
                </Fab>
              </Box>

              <Typography>to see the rules again</Typography>
            </Box>
            <Button
              variant="contained"
              color="primary"
              onClick={handleClose}
            >
              I got it
            </Button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
