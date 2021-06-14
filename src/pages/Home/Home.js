import { Box, Button, Grid, makeStyles, Typography } from "@material-ui/core";
import { useCallback, useRef } from "react";
import { useHistory } from "react-router";
import FeatureCard from "../../components/FeatureCard/FeatureCard";
import Logo from "../../components/Logo/Logo";
import ROUTES from "../../const/routes";
import BackgroundVideo from "./BackgroundVideo";

const useStyles = makeStyles((theme) => ({
  root: {},
  header: {
    background: "rgba(255,255,255,0.92)",
    minHeight: "100%",
  },
  menuItem: {
    margin: "0 8px",
  },
  mainTitle: {
    marginBottom: "8px",
    textAlign: "center",
  },
  sectionTitle: {
    textAlign: "center",
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2),
  },
  feature: {
    padding: "24px 32px",
    margin: "0 20px",
    marginBottom: "40px",
    maxWidth: "250px",
  },
  more: {
    paddingBottom: theme.spacing(7),
    paddingTop: theme.spacing(7),
    background: theme.palette.primary.light,
  }
}));

const scrollIntoViewConfig = {
  behavior: "smooth",
  block: "start",
};

function Home() {
  const classes = useStyles();
  const history = useHistory();
  const featureRef = useRef(null);

  const handleLoginClick = useCallback(() => {
    history.push(ROUTES.Login.path);
  }, []);

  const scrollToSection = (ref) => ref?.current?.scrollIntoView(scrollIntoViewConfig);

  return (
    <Box width="100%">
      <Grid container alignContent="flex-start" className={classes.header}>
        <BackgroundVideo />
        <Grid container item xs={12} justify="space-between">
          <Box padding="20px">
            <Logo href={ROUTES.Home.path} />
          </Box>
          <Box padding="20px">
            <Button
              size="large"
              className={classes.menuItem}
              onClick={() => scrollToSection(featureRef)}
            >
              Features
            </Button>
          </Box>
        </Grid>

        <Grid container item xs={12}>
          <Box
            display="flex"
            width="100%"
            justifyContent="center"
            marginTop="250px"
            flexDirection="column"
            alignItems="center"
          >
            <Typography
              variant="h1"
              component="h1"
              className={classes.mainTitle}
            >
              <strong>DevFlashCard</strong> app is here!
            </Typography>
            <Typography variant="body1">
              App is in the beta version. Functionalities and design could
              change.
            </Typography>
          </Box>
          <Box
            display="flex"
            width="100%"
            justifyContent="center"
            marginTop="32px"
          >
            <Button
              onClick={handleLoginClick}
              variant="contained"
              size="large"
              color="primary"
            >
              Go to the login page
            </Button>
          </Box>
        </Grid>
      </Grid>

      <Grid container xs={12}>
        <Grid item xs={12} justify="center" ref={featureRef}>
          <Typography
            variant="h3"
            component="h2"
            className={classes.sectionTitle}
          >
            Features
          </Typography>
        </Grid>
        <Box
          marginTop="20px"
          display="flex"
          justifyContent="center"
          width="100%"
        >
          <FeatureCard title="Decks">
            Create your own decks or use existing ones. Collect flashcards into
            your new decks.
          </FeatureCard>

          <FeatureCard title="FlashCards">
            Create flashcards and use existing ones! Add tags, content and
            search using filters.
          </FeatureCard>

          <FeatureCard title="Learn">
            Use all content to learn new things! This app is created to gather
            knowledge and share it.
          </FeatureCard>
        </Box>
      </Grid>

      <Grid container xs={12}>
        <Grid item xs={12} justify="center" className={classes.more}>
          <Typography
            variant="h3"
            component="h2"
            className={classes.sectionTitle}
            color="textSecondary"
          >
            More content to come...
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Home;
