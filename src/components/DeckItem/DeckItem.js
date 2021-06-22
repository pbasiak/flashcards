import React, { memo } from "react";
import PropTypes from "prop-types";
import { Button, makeStyles, Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import FlashCard from "../FlashCard/FlashCard";
import ROUTES from "../../const/routes";
import LevelButton from "../LevelButton/LevelButton";

const useStyles = makeStyles((theme) => ({
  title: {
    fontWeight: "bold",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
}));

function DeckItem({
  id,
  className,
  cardsCount,
  title,
  author,
  updatedAt,
  isAuthor,
  level,
}) {
  const classes = useStyles();
  const history = useHistory();

  const handleClick = () => {
    history.push(`${ROUTES.Decks.path}/${id}`);
  };

  return (
    <FlashCard
      className={className}
      headerLeft={
        <>
          <Typography variant="subtitle2">{cardsCount} cards</Typography>
          <LevelButton disabled>{level}</LevelButton>
        </>
      }
      onClick={handleClick}
      author={author}
      isAuthor={isAuthor}
      updatedAt={updatedAt}
    >
      <Typography variant="h4" className={classes.title}>
        {title}
      </Typography>
    </FlashCard>
  );
}

DeckItem.propTypes = {
  id: PropTypes.number.isRequired,
  cardsCount: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

export default memo(DeckItem);
