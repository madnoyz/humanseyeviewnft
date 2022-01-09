import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  navbar: {
    display: 'flex',
    visibility: `false`,
    backgroundColor: `#454955`,
    '& a': {
      color: `#fff`,
      marginLeft: 10,
    },
  },
  brand: {
    fontWeight: `bold`,
    fontSize: `1.5rem`,
    fontFamily: [`Special Elite`, `serif`],
  },
  grow: {
    flexGrow: 1,
  },
  main: {
    fontFamily: [`Special Elite`, `serif`],
    [theme.breakpoints.between('xs', 'sm')]: {
      width: `min-content`,
      fontSize: `2.5rem`,
    },
  },

  footer: {
    textAlign: `center`,
    marginTop: `40px`,
    padding: `40px`,
  },
  openseabutton: {
    borderRadius: `50%`,
  },
}));

export default useStyles;
