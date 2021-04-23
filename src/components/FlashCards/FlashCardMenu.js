import React from "react";
import PropTypes from "prop-types";
import { IconButton, Menu, MenuItem } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";

function FlashCardMenu({ id, onEditClick, onDeleteClick, onShowFlashCard }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton onClick={handleClick}>
        <MoreVertIcon />
      </IconButton>
      <Menu
        id={id}
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={onEditClick}>Edit</MenuItem>
        <MenuItem onClick={onDeleteClick}>Delete</MenuItem>
        <MenuItem onClick={onShowFlashCard}>Show</MenuItem>
      </Menu>
    </div>
  );
}

FlashCardMenu.propTypes = {
  onEditClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  onShowFlashCard: PropTypes.func.isRequired,
};

export default FlashCardMenu;
