import { Box, Link, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { useCallback } from "react";
import { useHistory } from "react-router-dom";
import DashboardCard from "../../components/DashboardCard/DashboardCard";
import PageWithSidebarTemplate from "../../components/PageWithSidebarTemplate/PageWithSidebarTemplate";
import ROUTES from "../../const/routes";
import { useDecksCount } from "../../hooks/useDecks";
import { useFlashCardsCount } from "../../hooks/useFlashCards";
import { useUser } from "../../hooks/useUser";
import { COLOR_PALETTE, COLOR } from "../../theme/palette";

const useStyles = makeStyles((theme) => ({
  username: {
    color: COLOR_PALETTE.PRIMARY.MAIN,
  },
  cardWrapper: {
    display: "flex",
    justifyContent: "flex-start",
    flexWrap: "wrap",

    "& > div": {
      marginRight: theme.spacing(2),
      marginBottom: theme.spacing(2),
      flexShrink: 0,
    },

    [theme.breakpoints.up("xs")]: {},
  },
  welcome: {
    backgroundColor: COLOR.BACKGROUND.WELCOME,
    borderRadius: "8px",
    width: "100%",
  },
  welcomeTitle: {
    textAlign: "center",
    marginBottom: theme.spacing(1),
  },
}));

function Dashboard() {
  const classes = useStyles();
  const history = useHistory();
  const {
    user: { username },
  } = useUser();
  const { flashCardsCount, isFlashCardsCountLoading } = useFlashCardsCount();
  const { decksCount, isDeckCountLoading } = useDecksCount();

  const handleContactClick = useCallback(
    (event) => {
      event.preventDefault();
      history.push(ROUTES.Contact.path);
    },
    [history]
  );

  return (
    <PageWithSidebarTemplate
      title={
        <>
          Hi <strong className={classes.username}>{username}</strong>
        </>
      }
    >
      <Box className={classes.cardWrapper}>
        <DashboardCard
          title={
            <>
              Total <br /> FlashCards
            </>
          }
          content={flashCardsCount}
          isLoadingContent={isFlashCardsCountLoading}
        />
        <DashboardCard
          title={
            <>
              Total <br /> Decks
            </>
          }
          content={decksCount}
          isLoadingContent={isDeckCountLoading}
        />
        <Box padding="16px" className={classes.welcome} maxWidth="500px">
          <Typography className={classes.welcomeTitle} variant="h5">
            Welcome to <strong>DevFlashCards</strong>
          </Typography>
          <Typography variant="body2" component="p">
            Application was created to gather all frontend knowledge in one
            place, especially interview questions (and answers).
          </Typography>
          <Typography variant="body2" component="p">
            It's in beta version. Start using and let me know if you find a bug
            or need a new feature. <strong>Thank you!</strong>{" "}
            <a href="contact" onClick={handleContactClick}>
              Contact information here.
            </a>
          </Typography>
        </Box>
      </Box>
    </PageWithSidebarTemplate>
  );
}

export default Dashboard;
