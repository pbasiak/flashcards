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
import { uniqBy } from "lodash-es";
import { MenuProps } from "../../const/menuSelect";
import { useTags } from "../../hooks/useTags";

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

function AddDeckForm({
  handleSubmit,
  handleChange,
  values,
  errors,
  handleCancel,
  isSubmitDisabled,
  setFieldValue,
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
          Add Deck
        </Button>
      </Box>
    </form>
  );
}

export default AddDeckForm;
