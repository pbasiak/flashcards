import React from "react";
import PropTypes from "prop-types";
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import { useTags } from "../../hooks/useTags";
import { useDecks } from "../../hooks/useDecks";
import { uniqBy } from "lodash";
import TextEditor from "../TextEditor/TextEditor";

const useStyles = makeStyles((theme) => ({
  form: {
    maxWidth: "700px",
  },
  formControl: {
    minWidth: "100%",
    maxWidth: "100%",
    marginBottom: theme.spacing(2),
  },
  selectLabel: {
    left: "14px",
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: "250",
    },
  },
};

function FlashCardForm({
  handleSubmit,
  handleChange,
  values,
  errors,
  handleCancel,
  isSubmitDisabled,
  submitText,
  setFieldValue,
}) {
  const classes = useStyles();
  const { tags } = useTags();
  const { decks } = useDecks();

  const tagsValues = uniqBy([...values.tags, ...tags], "id");
  const decksValues = uniqBy([...values.decks, ...decks], "id");

  const tagsSelectItems = tagsValues.map((tag) => (
    <MenuItem key={`${tag.id}_${tag.name}`} value={tag}>
      {tag.name}
    </MenuItem>
  ));
  const decksSelectItems = decksValues.map((deck) => (
    <MenuItem key={`${deck.id}_${deck.Title}`} value={deck}>
      {deck.Title}
    </MenuItem>
  ));

  const fieldVariant = "outlined";

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <FormControl className={classes.formControl}>
        <TextField
          required
          id="title"
          label="Title"
          onChange={handleChange}
          value={values.title}
          error={Boolean(errors.title)}
          helperText={errors.title}
          variant={fieldVariant}
        />
      </FormControl>

      <FormControl className={classes.formControl}>
        <TextEditor handleChange={setFieldValue} value={values.content} />
      </FormControl>

      <FormControl required className={classes.formControl}>
        <InputLabel className={classes.selectLabel}>Tags</InputLabel>
        <Select
          id="tags"
          labelId="tags-select"
          multiple
          onChange={(event) => {
            event.target.name = "tags";
            handleChange(event);
          }}
          value={values.tags}
          MenuProps={MenuProps}
          variant={fieldVariant}
        >
          {tagsSelectItems}
        </Select>
        <FormHelperText>{errors.tags}</FormHelperText>
      </FormControl>
      <FormControl required className={classes.formControl}>
        <InputLabel className={classes.selectLabel}>Decks</InputLabel>
        <Select
          id="decks"
          labelId="decks-select"
          multiple
          onChange={(event) => {
            event.target.name = "decks";
            handleChange(event);
          }}
          value={values.decks}
          MenuProps={MenuProps}
          variant={fieldVariant}
        >
          {decksSelectItems}
        </Select>
        <FormHelperText>{errors.decks}</FormHelperText>
      </FormControl>
      <Box display="flex" mt="40px" justifyContent="flex-end">
        <Box mr="16px">
          <Button variant="outlined" color="primary" onClick={handleCancel}>
            Cancel
          </Button>
        </Box>
        <Button
          disabled={isSubmitDisabled}
          variant="contained"
          color="primary"
          type="submit"
        >
          {submitText}
        </Button>
      </Box>
    </form>
  );
}

FlashCardForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  values: PropTypes.object.isRequired,
  setFieldValue: PropTypes.func.isRequired,
};

FlashCardForm.defaultProps = {
  submitText: "Add FlashCard",
};

export default FlashCardForm;
