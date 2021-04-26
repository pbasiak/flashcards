import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import DashboardCard from "../../components/DashboardCard/DashboardCard";
import PageWithSidebarTemplate from "../../components/PageWithSidebarTemplate/PageWithSidebarTemplate";
import { useDecksCount } from "../../hooks/useDecks";
import { useFlashCardsCount } from "../../hooks/useFlashCards";
import { useUser } from "../../hooks/useUser";
import { COLOR_PALETTE, COLOR } from "../../theme/palette";

const useStyles = makeStyles((theme) => ({
  username: {
    color: COLOR_PALETTE.PRIMARY.MAIN,
  },
  cardWrapper: {
    gridGap: theme.spacing(2),
    gridTemplateColumns: "150px 150px auto",
  },
  welcome: {
    backgroundColor: COLOR.BACKGROUND.WELCOME,
    borderRadius: "8px",
  },
  welcomeTitle: {
    textAlign: "center",
    marginBottom: theme.spacing(1),
  },
}));

function Home() {
  const classes = useStyles();
  const {
    user: { username },
    user,
  } = useUser();
  const { flashCardsCount, isFlashCardsCountLoading } = useFlashCardsCount();
  const { decksCount, isDeckCountLoading } = useDecksCount();

  return (
    <PageWithSidebarTemplate
      title={
        <>
          Hi <strong className={classes.username}>{username}.</strong>
        </>
      }
    >
      <Box display="grid" className={classes.cardWrapper}>
        <DashboardCard
          title="FlashCards"
          content={flashCardsCount}
          isLoadingContent={isFlashCardsCountLoading}
        />
        <DashboardCard
          title="Decks"
          content={decksCount}
          isLoadingContent={isDeckCountLoading}
        />
        <Box padding="16px" className={classes.welcome} maxWidth="500px">
          <Typography className={classes.welcomeTitle} variant="h5">
            Welcome to <strong>DevFlashCards</strong>
          </Typography>
          <Typography variant="p" component="p">
            Application was created to gather all frontend knowledge in one place, especially interview questions (and answers).
          </Typography>
          <Typography variant="p" component="p">
            It's in beta version. Start using and let me know if you find a bug or need a new feature. <strong>Thank you!</strong>
          </Typography>
        </Box>
      </Box>
    </PageWithSidebarTemplate>
  );
}

export default Home;
