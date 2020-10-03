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
}))
