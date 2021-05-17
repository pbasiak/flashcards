import PropTypes from "prop-types";
import { Box, Button } from "@material-ui/core";
import { noop } from "lodash-es";

function FlashCardActions({ edit, handleEdit }) {
  return (
    <Box>
      {edit ? (
        <Button
          variant="contained"
          size="small"
          color="primary"
          onClick={handleEdit}
        >
          Edit
        </Button>
      ) : null}
    </Box>
  );
}

FlashCardActions.propTypes = {
  edit: PropTypes.bool,
};

FlashCardActions.defaultProps = {
  edit: false,
  handleEdit: noop,
};

export default FlashCardActions;
