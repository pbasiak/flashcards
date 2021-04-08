import React from "react";
import PropTypes from "prop-types";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";

function DeleteFlashCardDialog({
  open,
  handleClose,
  handleSubmit,
  flashCardName,
}) {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle id="alert-dialog-title">
        Are you sure you want to delete this FlashCard?
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          You will delete "{flashCardName}". This operation cannot be reverted.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary" autoFocus>
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
}

DeleteFlashCardDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  flashCardName: PropTypes.string.isRequired,
};

export default DeleteFlashCardDialog;
