import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import React from 'react';

function DeleteFlashCardDialog({ open, handleClose, handleSubmit, flashCardName }) {

    return (
        <Dialog
            open={open}
            onClose={handleClose}
        >
            <DialogTitle id="alert-dialog-title">Are you sure you want to delete this FlashCard?</DialogTitle>
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

export default DeleteFlashCardDialog;
