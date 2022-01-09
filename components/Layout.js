import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import NextLink from 'next/link';
import Image from 'next/image';
import {
  AppBar,
  Box,
  Button,
  Container,
  Paper,
  Toolbar,
  Typography,
  Link,
  CssBaseline,
} from '@material-ui/core';
import useStyles from '../utils/styles';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';

function ShowOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger();

  return (
    <Slide appear={true} direction="down" in={trigger}>
      {children}
    </Slide>
  );
}

ShowOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function Layout({ children }) {
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>humansEYEview NFT</title>
      </Head>
      <CssBaseline />
      <ShowOnScroll {...children}>
        <AppBar position="sticky" className={classes.navbar}>
          <Toolbar>
            <NextLink href="/" passHref>
              <Link>
                <Typography className={classes.brand}>humansEYEview</Typography>
              </Link>
            </NextLink>
            <div className={classes.grow}></div>
            <div>
              <NextLink href="#about" passHref>
                <Link to="/home/#about">about</Link>
              </NextLink>
              <NextLink href="#prices" passHref>
                <Link to="/home/#prices">drops</Link>
              </NextLink>
              <NextLink href="#roadmap" passHref>
                <Link to="/home/#roadmap">roadmap</Link>
              </NextLink>
              <NextLink href="#whitelist" passHref>
                <Link to="/home/#whitelist">whitelist</Link>
              </NextLink>
              <NextLink href="http://opensea.io/" passHref>
                <Link target="_blank">
                  <Button
                    variant="outlined"
                    style={{ backgroundColor: `#fff` }}
                  >
                    buy
                  </Button>
                </Link>
              </NextLink>
            </div>
          </Toolbar>
        </AppBar>
      </ShowOnScroll>

      <Container className={classes.main}>{children}</Container>

      <footer className={classes.footer}>
        <address>All rights reserved. &copy; 2021 by humansEYEview.</address>
      </footer>
    </div>
  );
}
