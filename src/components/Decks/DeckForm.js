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
import uniqBy from "lodash/uniqBy";
import noop from "lodash/noop";
import { MenuProps } from "../../const/menuSelect";
import { useTags } from "../../hooks/useTags";
import { LEVEL } from "../../const/level";

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

function DeckForm({
  handleSubmit,
  handleChange,
  values,
  errors,
  handleCancel,
  isSubmitDisabled,
  submitText,
}) {
  const classes = useStyles();
  const fieldVariant = "outlined";
  const { tags } = useTags();

  const tagsValues = uniqBy([...values.tags, ...tags], "id");

  const tagsSelectItems = tagsValues.map((tag) => (
    <MenuItem key={`${tag.id}_${tag.name}`} value={tag}>
      {tag.name}
    </MenuItem>
  ));

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
        <InputLabel className={classes.selectLabel} htmlFor="level">
          Level
        </InputLabel>
        <Select
          id="level"
          labelId="level-select"
          onChange={(event) => {
            event.target.name = "level";
            handleChange(event);
          }}
          value={values.level}
          MenuProps={MenuProps}
          variant={fieldVariant}
        >
          <MenuItem value={LEVEL.JUNIOR}>Junior</MenuItem>
          <MenuItem value={LEVEL.MID}>Mid</MenuItem>
          <MenuItem value={LEVEL.SENIOR}>Senior</MenuItem>
        </Select>
        <FormHelperText>{errors.level}</FormHelperText>
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

DeckForm.propTypes = {
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func,
  values: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
      PropTypes.arrayOf(PropTypes.object),
    ])
  ),
  errors: PropTypes.objectOf(PropTypes.string),
  handleCancel: PropTypes.func,
  isSubmitDisabled: PropTypes.bool,
  submitText: PropTypes.string,
};

DeckForm.defaultProps = {
  handleSubmit: noop,
  handleChange: noop,
  values: { tags: [], level: LEVEL.JUNIOR },
  errors: {},
  handleCancel: noop,
  isSubmitDisabled: false,
  submitText: "",
};

export default DeckForm;
