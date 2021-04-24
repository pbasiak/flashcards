import React, { memo } from "react";
import PropTypes from "prop-types";
import { makeStyles, Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import FlashCard from "../FlashCard/FlashCard";

const useStyles = makeStyles((theme) => ({
  title: {
    fontWeight: "bold",
  },
}));

function DeckItem({
  id,
  className,
  cardsCount,
  title,
  likesCount,
  commentsCount,
}) {
  const classes = useStyles();
  const history = useHistory();

  const handleClick = () => {
    history.push(`/decks/${id}`);
  };

  return (
    <FlashCard
      className={className}
      headerLeft={
        <Typography variant="subtitle2">{cardsCount} cards</Typography>
      }
      likesCount={likesCount}
      commentsCount={commentsCount}
      onClick={handleClick}
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
  likesCount: PropTypes.number.isRequired,
  commentsCount: PropTypes.number.isRequired,
};

export default memo(DeckItem);
