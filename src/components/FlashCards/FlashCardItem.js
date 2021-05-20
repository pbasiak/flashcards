import React, { memo, useState } from "react";
import PropTypes from "prop-types";
import { Link, makeStyles, Typography } from "@material-ui/core";
import { Link as RouterLink, useHistory, useLocation, useParams } from "react-router-dom";
import { useDeleteFlashCard } from "../../hooks/useFlashCards";
import DeleteFlashCardDialog from "./DeleteFlashCardDialog";
import FlashCard from "../FlashCard/FlashCard";
import FlashCardMenu from "./FlashCardMenu";

const useStyles = makeStyles((theme) => ({
  tags: {
    fontSize: "14px",
    fontWeight: "700",
  },
  tagsLink: {
    marginRight: theme.spacing(1),
  },
  title: {
    fontWeight: "700",
    maxHeight: "100px",
    textOverflow: "ellipsis",
    overflow: "hidden",
    textDecoration: "none",
    wordBreak: "break-word",
  },
}));

function FlashCardItem({
  id,
  title,
  tags,
  likesCount,
  commentsCount,
  handleRefetchFlashCards,
  className,
}) {
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const history = useHistory();
  const { deckId } = useParams();
  const classes = useStyles();
  const deckView = !!deckId;
  const tagsList = tags.map((item) => (
    <Link
      key={`${item.id}_${item.name}`}
      component={RouterLink}
      className={classes.tagsLink}
      onClick={(e) => {
        e.stopPropagation();
        history.push(`/tag/${item.name}`);
      }}
    >
      #{item.name}
    </Link>
  ));
  const { deleteFlashCard } = useDeleteFlashCard(id);

  const handleDeleteClick = (e) => {
    e.stopPropagation();
    setDeleteDialogOpen(true);
  };
  const handleEditClick = (e) => {
    e.stopPropagation();
    history.push(`/flashcards/${id}/edit`);
  };
  const handleDeleteDialogClose = (e) => {
    e.stopPropagation();
    setDeleteDialogOpen(false);
  };
  const handleDeleteDialogSubmit = () =>
    deleteFlashCard().then(() => handleRefetchFlashCards());
  const handleShowFlashCard = (e) => {
    e.stopPropagation();
    if (deckView) {
      return history.push(`/decks/${deckId}/${id}`);
    };

    return history.push(`/flashcards/${id}`);
  };

  return (
    <FlashCard
      className={className}
      headerLeft={<Typography className={classes.tags}>{tagsList}</Typography>}
      headerRight={
        <FlashCardMenu
          id={`Menu${id}`}
          onEditClick={handleEditClick}
          onDeleteClick={handleDeleteClick}
          onShowFlashCard={handleShowFlashCard}
        />
      }
      onClick={handleShowFlashCard}
      likesCount={likesCount || "?"} // TODO: remove ?
      commentsCount={commentsCount || "?"}
    >
      <Typography variant="h5" className={classes.title}>
        {title}
      </Typography>
      <DeleteFlashCardDialog
        open={deleteDialogOpen}
        flashCardName={title}
        handleSubmit={handleDeleteDialogSubmit}
        handleClose={handleDeleteDialogClose}
      />
    </FlashCard>
  );
}

FlashCardItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.object).isRequired,
  likesCount: PropTypes.number.isRequired,
  commentsCount: PropTypes.number.isRequired,
  handleRefetchFlashCards: PropTypes.func.isRequired,
  className: PropTypes.string,
};

FlashCardItem.defaultProps = {
  className: null,
};

export default memo(FlashCardItem);
