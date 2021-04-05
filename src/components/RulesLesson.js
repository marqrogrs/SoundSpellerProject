import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import AssignmentLateIcon from '@material-ui/icons/AssignmentLate';
import Fab from '@material-ui/core/Fab';
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

export default function RulesLesson({ rules, startOpen }) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(startOpen);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (


        <div>

            <Fab
                color='primary'
                aria-label='add'
                style={{
                    margin: 0,
                    top: 'auto',
                    right: 70,
                    bottom: 20,
                    left: 'auto',
                    position: 'fixed',
                }}
                size='small'
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
                    <div className={classes.paper}>
                        <h2 id="transition-modal-title">Rules</h2>
                        <p id="transition-modal-description">{rules}</p>
                        <p><span>You can click on </span><AssignmentLateIcon /><span> to see the rules again</span></p>
                        <Button
                            variant='contained'
                            color='primary'
                            onClick={() => setOpen(false)}
                        >
                            I got it
                        </Button>
                        {/*Get the rule data to display here*/}
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}