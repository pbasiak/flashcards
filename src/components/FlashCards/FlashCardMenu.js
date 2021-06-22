import React from "react";
import PropTypes from "prop-types";
import { IconButton, makeStyles, Menu, MenuItem } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const useStyles = makeStyles(() => ({
  root: {
    zIndex: "20",
  },
}));

function FlashCardMenu({
  id,
  onEditClick,
  onDeleteClick,
  onShowFlashCard,
  isAuthor,
}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes = useStyles();

  const handleClick = (event) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event) => {
    event.stopPropagation();
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <IconButton onClick={handleClick}>
        <MoreVertIcon />
      </IconButton>
      <Menu
        id={id}
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {isAuthor && <MenuItem onClick={onEditClick}>Edit</MenuItem>}
        {isAuthor && <MenuItem onClick={onDeleteClick}>Delete</MenuItem>}
        <MenuItem onClick={onShowFlashCard}>Show</MenuItem>
      </Menu>
    </div>
  );
}

FlashCardMenu.propTypes = {
  isAuthor: PropTypes.bool,
  onEditClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  onShowFlashCard: PropTypes.func.isRequired,
};

FlashCardMenu.defaultProps = {
  isAuthor: false,
};

export default FlashCardMenu;
