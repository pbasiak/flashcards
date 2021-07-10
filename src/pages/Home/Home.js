import { Box, Button, Grid, makeStyles, Typography } from "@material-ui/core";
import { useCallback, useRef } from "react";
import { useHistory } from "react-router";
import FeatureCard from "../../components/FeatureCard/FeatureCard";
import Logo from "../../components/Logo/Logo";
import ROUTES from "../../const/routes";
import CardBg from "./card-bg.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#F6F8FC",
  },
  header: {
    paddingBottom: theme.spacing(24),
  },
  container: {
    maxWidth: "1200px",
  },
  cardHeaderContainer: {
    position: "relative",
    zIndex: "10",
  },
  cardHeader: {
    backgroundImage: `url(${CardBg})`,
    backgroundSize: "cover",
    backgroundColor: theme.palette.primary.light,
    padding: `${theme.spacing(3)}px ${theme.spacing(9)}px ${theme.spacing(
      5
    )}px`,
    borderRadius: "25px",
    color: "#F0F6F6",
    marginTop: theme.spacing(6),
    position: "relative",

    "&::before": {
      content: '""',
      left: "15px",
      top: "-20px",
      position: "absolute",
      width: "100%",
      height: "100%",
      background: "#EAEEF8",
      transform: "rotate(1deg)",
      zIndex: "-1",
      borderRadius: "25px",
    },

    "&::after": {
      content: '""',
      left: "-15px",
      top: "20px",
      position: "absolute",
      width: "100%",
      height: "100%",
      background: "#DBE1EF",
      transform: "rotate(-1deg)",
      zIndex: "-1",
      borderRadius: "25px",
    },
  },
  cardHeaderHeading: {
    fontSize: "72px",
    fontWeight: "700",
  },
  cardHeaderText: {
    fontSize: "36px",
    fontWeight: "300",
  },
  cardHeaderButton: {
    background: "#FFF",
    paddingLeft: "40px",
    paddingRight: "40px",
    marginLeft: theme.spacing(2),
  },
  cardHeaderButtonLearn: {
    color: "#FFF",
  },
  cardHeaderCounterNumber: {
    fontSize: "96px",
    fontWeight: "700",
    lineHeight: "1",
  },
  cardHeaderCounterText: {
    fontSize: "24px",
    fontWeight: "700",
    lineHeight: "1",
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
  },
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

  const scrollToSection = (ref) =>
    ref?.current?.scrollIntoView(scrollIntoViewConfig);

  return (
    <Box width="100%" className={classes.root}>
      <Grid
        container
        alignContent="flex-start"
        justify="center"
        className={classes.header}
      >
        <Grid
          container
          xs={12}
          justify="space-between"
          className={classes.container}
        >
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
            <Button
              size="medium"
              variant="contained"
              color="primary"
              className={classes.menuItem}
              onClick={handleLoginClick}
            >
              Login
            </Button>
          </Box>
        </Grid>

        <Grid
          container
          xs={12}
          className={`${classes.container} ${classes.cardHeaderContainer}`}
        >
          <Box
            display="flex"
            flexDirection="column"
            className={classes.cardHeader}
            flexGrow="1"
          >
            <Box display="flex">
              <Box marginRight="32px">
                <Typography className={classes.cardHeaderCounterNumber}>
                  24
                </Typography>
                <Typography className={classes.cardHeaderCounterText}>
                  cards
                </Typography>
              </Box>
              <Box>
                <Typography className={classes.cardHeaderCounterNumber}>
                  12
                </Typography>
                <Typography className={classes.cardHeaderCounterText}>
                  decks
                </Typography>
              </Box>
            </Box>
            <Box marginBottom="130px" marginTop="100px">
              <Typography variant="h2" className={classes.cardHeaderHeading}>
                FlashCard application *
              </Typography>
              <Typography variant="p" className={classes.cardHeaderText}>
                Created for frontend developers (beta)
              </Typography>
              <Typography variant="body2">* beta version</Typography>
            </Box>
            <Box display="flex" justifyContent="flex-end">
              <Button
                variant="text"
                className={classes.cardHeaderButtonLearn}
                onClick={() => scrollToSection(featureRef)}
              >
                Learn more
              </Button>
              <Button
                variant="contained"
                className={classes.cardHeaderButton}
                onClick={handleLoginClick}
              >
                Show me app!
              </Button>
            </Box>
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
