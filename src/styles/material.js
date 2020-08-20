import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  word: {
    color: '#002ca0',
    alignSelf: 'center',
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
}))
