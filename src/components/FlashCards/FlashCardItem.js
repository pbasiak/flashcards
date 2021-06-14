import React, { memo, useState } from "react";
import PropTypes from "prop-types";
import { Link, makeStyles, Typography } from "@material-ui/core";
import { Link as RouterLink, useHistory, useParams } from "react-router-dom";
import { useDeleteFlashCard } from "../../hooks/useFlashCards";
import DeleteFlashCardDialog from "./DeleteFlashCardDialog";
import FlashCard from "../FlashCard/FlashCard";
import FlashCardMenu from "./FlashCardMenu";
import ROUTES from "../../const/routes";

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
  author,
  updatedAt,
  handleRefetchFlashCards,
  className,
  isAuthor,
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
        history.push(`${ROUTES.TagBase.path}/${item.name}`);
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
    history.push(`${ROUTES.FlashCards.path}/${id}/edit`);
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
      return history.push(`${ROUTES.Decks.path}/${deckId}/${id}`);
    }

    return history.push(`${ROUTES.FlashCards.path}/${id}`);
  };

  return (
    <FlashCard
      className={className}
      headerLeft={<Typography className={classes.tags}>{tagsList}</Typography>}
      headerRight={
        <FlashCardMenu
          id={`Menu${id}`}
          isAuthor={isAuthor}
          onEditClick={handleEditClick}
          onDeleteClick={handleDeleteClick}
          onShowFlashCard={handleShowFlashCard}
        />
      }
      onClick={handleShowFlashCard}
      author={author}
      updatedAt={updatedAt}
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
  handleRefetchFlashCards: PropTypes.func.isRequired,
  className: PropTypes.string,
  isAuthor: PropTypes.bool,
};

FlashCardItem.defaultProps = {
  className: null,
  isAuthor: false,
};

export default memo(FlashCardItem);
