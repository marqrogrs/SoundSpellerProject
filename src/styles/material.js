import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  word: {
    color: '#002ca0',
    alignSelf: 'center',
  },
  table: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  menuTitle: {
    flexGrow: 1,
  },
  settingsMenu: {
    width: 800,
  },
  nestedMenuItem: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
  },
  signUpForm: {
    position: 'absolute',
    top: '25%',
  },
  progressList: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
  kidTitle: {
    fontFamily: 'Indie Flower',
    textAlign: 'center',
  },
  textButton: {
    ...theme.typography.button,
    cursor: 'pointer',
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },
  alert: {
    width: '100%',
  },
  fab: {
    position: 'absolute',
    right: 10,
    bottom: 10,
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalPaper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    display: 'flex',
    flexDirection: 'column',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    '& > *': {
      width: '100%',
    },
  },
  selectConstant: {
    fontWeight: 100,
  },
}))
