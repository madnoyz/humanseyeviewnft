import { makeStyles, createTheme } from '@material-ui/core';

const font = "'Special Elite', serif";

const theme = createTheme({
  Typography: {
    fontFamily: ['-apple-system', 'Special Elite', 'serif'].join(','),
  },
});

const mainStyles = makeStyles((theme) => ({
  mainPaper: {
    display: `flex`,
    flexDirection: `center`,
    alignItems: `center`,
    [theme.breakpoints.between('xs', 'sm')]: {
      width: `min-content`,
      fontSize: `2.5rem`,
    },
    justifyContent: `center`,
    fontFamily: [`Special Elite`, `serif`],
    fontSize: `1.15rem`,
    background: `linear-gradient(to top, #f5f5dc, #ffffff)`,
    /* Animations */
    //animation: `$bgScrollingReverse .92s infinite ease`,
  },
  heroLogo: {
    fontSize: `84px`,
    fontFamily: [`Special Elite`, `serif`],
    alignItems: `flex-start`,
    marginTop: `50px`,
    marginLeft: `50px`,
    [theme.breakpoints.between('xs', 'sm')]: {},
  },
  hero: {
    backgroundImage: `url(/images/humanseyeview-main.jpg)`,
    height: `640px`,
    marginTop: `-100px`,
    borderRadius: `2rem`,
    backgroundPosition: `center`,
    backgroundRepeat: `no-repeat`,
    backgroundSize: `cover`,
    position: `relative`,
    display: `flex`,
    alignItems: `flex-start`,
    justifyContent: `flex-start`,
    color: `#000`,
    //'-webkit-text-stroke': `0.1vw #a67c00`,
    [theme.breakpoints.between('xs', 'sm')]: {},
  },
  mainContainer: {
    fontFamily: [`Special Elite`, `serif`],
    color: `#454955`,
    //backgroundColor: `#f3eff5`,
    outerWidth: `100%`,
    borderRadius: `2rem`,
    marginTop: `1rem`,
    [theme.breakpoints.down('sm')]: {
      maxWidth: `100%`,
      padding: `20px 0`,
    },
    [theme.breakpoints.up('sm')]: {
      maxWidth: `100%`,
      padding: `20px 40px`,
    },
  },
  aboutUs: {
    backgroundColor: `#E85F5C`,
    color: `#fff`,
    borderRadius: `2rem`,
    marginTop: `1rem`,
    padding: `35px 40px`,
  },
  priceContainer: {
    display: `flex`,
    [theme.breakpoints.up('sm')]: {
      maxWidth: '45rem',
    },
    [theme.breakpoints.up('md')]: {
      marginLeft: 'calc(50% - 22.5rem)',
    },
    [theme.breakpoints.down('sm')]: {
      maxWidth: '100%',
    },
    color: `#454955`,
    backgroundColor: `#acf39d`,
    borderRadius: `2rem`,
    marginTop: `3rem`,
    padding: `35px 60px`,
    alignItems: `center`,
    flexDirection: `column`,
    justifyContent: `center`,
    '& table': {
      align: `center`,
      padding: `20px 0`,
      borderSpacing: `10px`,
    },
  },
  midHeadline: {
    color: `#454955`,
    borderRadius: `2rem`,
    display: `flex`,
    flexDirection: `column`,
    align: `center`,
    justifyContent: `center`,
    marginTop: `1rem`,
    padding: `20px 40px`,
    alignItems: `center`,
    textAlign: `center`,
    padding: `10px 40px`,
  },
  roadmapContainer: {
    color: `#fff`,
    backgroundColor: `#454955`,
    //backgroundImage: `url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAIAAACRXR/mAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAABnSURBVHja7M5RDYAwDEXRDgmvEocnlrQS2SwUFST9uEfBGWs9c97nbGtDcquqiKhOImLs/UpuzVzWEi1atGjRokWLFi1atGjRokWLFi1atGjRokWLFi1af7Ukz8xWp8z8AAAA//8DAJ4LoEAAlL1nAAAAAElFTkSuQmCC)`,
    display: `flex`,
    alignItems: `center`,
    justifyContent: `center`,
    flexDirection: `column`,

    borderRadius: `2rem`,
    marginTop: `2rem`,
    padding: `40px 40px`,
    minHeight: `100vh`,
    width: `100%`,

    '& h1': {
      textAlign: 'center',
    },
  },

  whitelistContainer: {
    display: `flex`,
    flexDirection: `column`,
    align: `center`,
    justifyContent: `center`,
    color: `#454955`,
    borderRadius: `2rem`,
    marginTop: `1rem`,
    padding: `10px 40px`,
    '& formBox': {
      minWidth: `100%`,
      height: `100vh`,
      border: `dotted #F55A00 5vw`,
      margin: `0vw`,
      padding: `5vw`,
      position: `relative`,
    },
  },
  mainForm: {
    padding: `0.1rem 0`,
    flex: 1,
    display: `flex`,
    flexDirection: `column`,
    justifyContent: `center`,
    alignItems: `center`,
  },
  inputGroup: {
    height: `50%`,
    [theme.breakpoints.up('xs')]: {
      width: `40%`,
    },
    [theme.breakpoints.down('xs')]: {
      width: `100%`,
    },

    display: `flex`,
    flexDirection: `column`,
    margin: `5px 0`,
  },
  inputLabel: {
    textAlign: `left`,
  },
  inputField: {
    height: `40px`,
    fontFamily: [`Special Elite`, `serif`],
    fontSize: `1rem`,
  },
  buttonWhitelist: {
    width: `6rem`,
    height: `2.5rem`,
    marginTop: `1rem`,
    fontFamily: [`Special Elite`, `serif`],
    fontSize: `1.25rem`,
    color: `#454955`,
  },
  footerHeadline: {
    color: `#454955`,
    alignItems: `center`,
    padding: `10px 40px`,
    marginTop: `3rem`,
  },
}));

export default mainStyles;
