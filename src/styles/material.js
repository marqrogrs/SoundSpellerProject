import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  word: {
    color: '#002ca0',
    alignSelf: 'center',
  },
  table: {
    margin: '2rem auto',
    backgroundColor: theme.palette.background.paper,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  menuTitle: {
    cursor: 'pointer',
    flexGrow: 1,
  },
  settingsMenu: {
    width: 800,
  },
  nestedMenuItem: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
  },
  // signUpForm: {
  //   position: 'absolute',
  //   top: '25%',
  // },
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
      color: theme.palette.primary.light,
    },
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
    width: 440,
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
  textbox: {
    border: 0,
    borderRadius: 3,
    color: 'white',
    height: 200,
    padding: '0 30px',
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
  },
  welcomeBanner: {
    padding: theme.spacing(3),
    margin: theme.spacing(3),
    background: `linear-gradient(15deg, ${theme.palette.primary.main} 30%, ${theme.palette.primary.dark} 90%)`,
    '& > *': {
      color: theme.palette.secondary.light,
    },
  },
  speechSlider: {
    width: 500,
  },
  alert: {
    position: 'absolute',
    top: 0,
    width: '100%',
  },
  progressTabContainer: {
    // flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
  },
  progressTabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  progressListPaper: {
    padding: '1rem',
    margin: '3rem',
  },
  statistics: {
    padding: theme.spacing(5),
  },
  rule: {
    padding: 20,
    margin: 20,
    background: `linear-gradient(15deg, ${theme.palette.secondary.main} 30%, ${theme.palette.secondary.light} 98%)`,
  },
  lessonRuleFab: {
    margin: 0,
    top: 'auto',
    right: 70,
    bottom: 20,
    left: 'auto',
    position: 'fixed !important',
  },

  speechRateFab: {
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed !important',
  },
}));
