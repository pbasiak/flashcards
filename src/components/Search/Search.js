import {
  Button,
  debounce,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  makeStyles,
  MenuItem,
  OutlinedInput,
  Select,
} from "@material-ui/core";
import { memo, useCallback, useState } from "react";
import PropTypes from "prop-types";
import isEqual from "lodash/isEqual";
import { useTags } from "../../hooks/useTags";

import ClearIcon from "@material-ui/icons/Clear";
import { noop } from "lodash-es";

const useStyles = makeStyles((theme) => ({
  selectTag: {
    width: "140px",
  },
  formElement: {
    marginRight: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
}));

export const INITIAL_VALUES = {
  search: "",
  tag: "",
  pageSize: 10,
  level: "mid",
};

function Search({ form, setForm, setLoading }) {
  const classes = useStyles();
  const { tags } = useTags();
  const [search, setSearch] = useState("");

  const handleClickClear = useCallback(() => {
    setForm({
      ...form,
      search: "",
    });
    setSearch("");
  }, [form, setForm]);

  const handleChangeSearch = useCallback(
    (e) => {
      setSearch(e.target.value);
      searchData(e.target.value);
    },
    [form, setForm]
  );

  const handleTagChange = useCallback(
    (e) => {
      setForm({
        ...form,
        tag: e.target.value,
      });
    },
    [form, setForm]
  );

  const handleLevelChange = useCallback(
    (e) => {
      setForm({
        ...form,
        level: e.target.value,
      });
    },
    [form, setForm]
  );

  const handlePageSizeChange = useCallback(
    (e) => {
      setForm({
        ...form,
        pageSize: e.target.value,
      });
    },
    [form, setForm]
  );

  const searchData = useCallback(
    debounce((value) => {
      if (setLoading) {
        setLoading(true);
      }
      setForm({
        ...form,
        search: value,
      });

      if (setLoading) {
        setLoading(false);
      }
    }, 1000),
    [form, setForm]
  );

  const isFilterButtonDisabled = isEqual(form, INITIAL_VALUES);
  const handleResetFiltersClick = useCallback(() => {
    setForm(INITIAL_VALUES);
  }, [setForm]);

  const tagsItems = tags.map((item) => {
    return (
      <MenuItem key={`${item.id}_${item.name}`} value={item.name}>
        {item.name}
      </MenuItem>
    );
  });

  return (
    <div>
      <FormControl
        variant="outlined"
        className={classes.formElement}
        size="small"
      >
        <InputLabel htmlFor="search-input">Name</InputLabel>
        <OutlinedInput
          id="search-input"
          label="Search"
          value={search}
          onChange={handleChangeSearch}
          endAdornment={
            !!form.search && (
              <InputAdornment position="end">
                <IconButton aria-label="clear value" onClick={handleClickClear}>
                  <ClearIcon />
                </IconButton>
              </InputAdornment>
            )
          }
        />
      </FormControl>
      <FormControl
        variant="outlined"
        className={classes.formElement}
        size="small"
      >
        <InputLabel id="select-tag-label">Select Tag</InputLabel>
        <Select
          labelId="select-tag-label"
          id="select-tag"
          value={form.tag}
          onChange={handleTagChange}
          label="Select Tag"
          className={classes.selectTag}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {tagsItems}
        </Select>
      </FormControl>

      <FormControl
        variant="outlined"
        className={classes.formElement}
        size="small"
      >
        <InputLabel id="select-tag-label">Select level</InputLabel>
        <Select
          labelId="select-level-label"
          id="select-level"
          value={form.level}
          onChange={handleLevelChange}
          label="Select level"
          className={classes.selectTag}
        >
        <MenuItem value="junior">Junior</MenuItem>
        <MenuItem value="mid">Mid</MenuItem>
        <MenuItem value="senior">Senior</MenuItem>
        </Select>
      </FormControl>

      <FormControl
        variant="outlined"
        className={classes.formElement}
        size="small"
      >
        <InputLabel id="select-tag-label">Page size</InputLabel>
        <Select
          labelId="select-size-label"
          id="select-size"
          value={form.pageSize}
          onChange={handlePageSizeChange}
          label="Select Size"
          className={classes.selectTag}
        >
          <MenuItem value="2">2</MenuItem>
          <MenuItem value="6">6</MenuItem>
          <MenuItem value="10">10</MenuItem>
          <MenuItem value="20">20</MenuItem>
        </Select>
      </FormControl>
      <Button
        onClick={handleResetFiltersClick}
        color="primary"
        variant="contained"
        disabled={isFilterButtonDisabled}
      >
        Reset Filters
      </Button>
    </div>
  );
}

Search.propTypes = {
  form: PropTypes.object.isRequired,
  setForm: PropTypes.func.isRequired,
  setLoading: PropTypes.func,
};

Search.defaultProps = {
  setLoading: noop,
};

export default memo(Search);
