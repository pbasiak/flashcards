import { Grid, makeStyles, Tab, Tabs } from "@material-ui/core";
import React from "react";
import { useParams } from "react-router-dom";
import DecksList from "../../components/DecksList/DecksList";
import FlashCardsList from "../../components/FlashCards/FlashCardsList";
import PageWithSidebarTemplate from "../../components/PageWithSidebarTemplate/PageWithSidebarTemplate";
import Sidebar from "../../components/Sidebar/Sidebar";
import ViewCarouselRoundedIcon from "@material-ui/icons/ViewCarouselRounded";
import RecentActorsRoundedIcon from "@material-ui/icons/RecentActorsRounded";

const useStyles = makeStyles((theme) => ({
  heading: {
    margin: `${theme.spacing(4)}px 0`,
    marginTop: "0",
  },
  header: {
    marginBottom: theme.spacing(4),
  },
  tab: {
    fontSize: "20px",
    fontWeight: "700",
  },
}));

function Tag() {
  const { name } = useParams();
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <PageWithSidebarTemplate
      sidebar={<Sidebar />}
      title={
        <>
          Tag: <strong>{name}</strong>
        </>
      }
    >
      <Grid container>
        <Grid item md={12} className={classes.header}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="fullWidth"
            indicatorColor="secondary"
            textColor="secondary"
            aria-label="flashcards and decks tabs"
          >
            <Tab
              icon={<RecentActorsRoundedIcon />}
              label="FLASHCARDS"
              className={classes.tab}
            />
            <Tab
              icon={<ViewCarouselRoundedIcon />}
              label="DECKS"
              className={classes.tab}
            />
          </Tabs>
        </Grid>
        {value === 0 && <FlashCardsList tag={name} />}
        {value === 1 && <DecksList tag={name} />}
      </Grid>
    </PageWithSidebarTemplate>
  );
}

export default Tag;
