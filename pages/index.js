import {
  Card,
  Container,
  Table,
  TableCell,
  TableRow,
  Typography,
} from '@material-ui/core';
import { useState } from 'react';
import Image from 'next/image';
import { Box, Drawer, Grid, Paper } from '@material-ui/core';
import Layout from '../components/Layout';
import mainStyles from '../utils/mainstyle';
import Timeline from '../components/Timeline/Timeline';
import mainLogoPic from '../public/images/humanseyeview-main.jpg';

export default function Home() {
  const classes = mainStyles();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Sending');

    let data = {
      name,
      email,
    };

    fetch('/api/contact', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log('Response received');
      if (res.status === 200) {
        console.log('Response succeeded!');
        setSubmitted(true);
        setName('');
        setEmail('');
        setBody('');
      }
    });
  };
  return (
    <div className={classes.mainPaper}>
      <Layout>
        <Container className={classes.hero}>
          <Typography className={classes.heroLogo}>humansEYEview</Typography>
        </Container>
        <Container>
          <Box className={classes.mainContainer}>
            <h1 style={{ fontSize: `3rem` }}>WELCOME TO THE HUMANS EYE VIEW</h1>
            <hr />
            An exclusive place where the real world collides with the ethereal
            world. Views so simple yet interesting, eye-catching, imaginative
            though indistinguishable from what is and is not IRL. <br />
            <br />
            Join us on this journey through the lens of the humans eye and
            become an owner of a VIEW NFT.
            <br />
            <br />
            Human vision is a complex process that is not yet completely
            understood. <br />
            <br />
            The complex physical process of visualizing something involves the
            nearly simultaneous interaction of the eyes and the brain.
            <br />
            <br />
            Spark the interconnections of your neural networks with these
            breathtaking scenes and let it live on to inspire landscapes in the
            meta. <br />
            <br />
            <hr />
            <h3 style={{ textAlign: `center` }}>
              The humansEYEviewsNFT is a limited collection of 50 total unique
              scenes, all 1/1 editions.
              <br />
              <br />
              5 total collection drops with 10 unique scenes available.
              <br />
            </h3>
            <h1 style={{ textAlign: `center` }}>
              None will ever be minted again.
            </h1>
            <hr />
          </Box>
        </Container>
        <Container id={`about`}>
          <Box className={classes.aboutUs}>
            <h1>ABOUT US</h1>
            <p>
              A couple of kindhearted, sensitive megalomaniacs that are 200% Art
              - NFT - Crypto - Enthusiasts.
            </p>
          </Box>
        </Container>
        <Container id={`prices`}>
          <Box className={classes.priceContainer}>
            <h1>HOW MUCH?</h1>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                Increasing scale per subsequent drop:
              </Grid>

              <Grid item xs={4}>
                QTY
              </Grid>
              <Grid item xs={4}>
                POLYGON
              </Grid>
              <Grid item xs={4}>
                ETHEREUM
              </Grid>

              <Grid item xs={4}>
                1-20
              </Grid>
              <Grid item xs={4}>
                (10-15 MATIC)
              </Grid>
              <Grid item xs={4}>
                (0.003 ETH and Up)
              </Grid>

              <Grid item xs={4}>
                20-30
              </Grid>
              <Grid item xs={4}>
                (15 MATIC and up)
              </Grid>
              <Grid item xs={4}>
                (0.005 ETH and Up)
              </Grid>

              <Grid item xs={4}>
                30+
              </Grid>
              <Grid item xs={4}>
                (20 MATIC and up)
              </Grid>
              <Grid item xs={4}>
                (0.007 ETH and Up)
              </Grid>
            </Grid>
          </Box>
        </Container>

        <Container id={`midHeadline`}>
          <Box className={classes.midHeadline}>
            <h1>
              How do you define <strong>&quot;real&quot;</strong>?
            </h1>
            <hr />
            If you&apos;re talking about what you can feel, what you can smell,
            what you can taste and see, <br />
            then &quot;real&quot; is simply electrical signals interpreted by
            your brain. <br />
            <em>-Morpheus, The Matrix</em>
            <hr />
          </Box>
        </Container>
        <Container id={`roadmap`}>
          <Box className={classes.roadmapContainer}>
            <h1>ROADMAP</h1>
            <Timeline />
          </Box>
          <h1 style={{ textAlign: `center`, marginTop: `4rem` }}>
            FIRST DROP COMING JAN 2022!
          </h1>
        </Container>

        <Container id={`whitelist`}>
          <Box className={classes.whitelistContainer}>
            <form
              className={classes.mainForm}
              onSubmit={(e) => {
                handleSubmit(e);
              }}
            >
              <p style={{ textAlign: `center`, fontSize: `2.5rem` }}>
                GET ON THE WHITELIST
              </p>
              <group className={classes.inputGroup}>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  name="name"
                  className={classes.inputField}
                />
              </group>
              <group className={classes.inputGroup}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  name="email"
                  className={classes.inputField}
                />
              </group>
              <button
                variant="outlined"
                className={classes.buttonWhitelist}
                type="submit"
              >
                Send
              </button>
            </form>
          </Box>
        </Container>
        <Container className={classes.footerHeadline}>
          <h3 style={{ textAlign: `center` }}>
            humansEYEviewNFT is an original collection
          </h3>
        </Container>
      </Layout>
    </div>
  );
}
