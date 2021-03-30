import { debounce, FormControl, IconButton, InputAdornment, InputLabel, MenuItem, OutlinedInput, Select } from "@material-ui/core";
import { useCallback, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { useTags } from "../../hooks/useTags";

import ClearIcon from '@material-ui/icons/Clear';
import { noop } from "lodash-es";

function Search({ form, setForm, setLoading }) {
    const { tags } = useTags();
    const [formSearch, setFormSearch] = useState('');
    const [formTag, setFormTag] = useState('');

    const handleClickClear = useCallback(() => {
        setFormSearch('');
    }, []);

    const handleChangeSearch = e =>  setFormSearch(e.target.value);
    const handleTagChange = e => setFormTag(e.target.value);

    const searchData = useCallback(debounce((value) => {
        setFormSearch(value);
        setLoading(false);
    }, 1000), []);

    useEffect(() => {
        if (formSearch) {
            if (setLoading) {
                setLoading(true);
            }
            searchData(formSearch);
        }
    }, [formSearch]);

    useState(() => {
        if (formSearch) {
            setForm({
                ...form,
                search: formSearch,
            });
        }
    }, [formSearch, setForm, form]);

    useState(() => {
        if (formTag) {
            setForm({
                ...form,
                tag: formTag,
            });
        }
    }, [formTag, setForm, form]);

    const tagsItems = tags.map(item => {
        return (
            <MenuItem key={`${item.id}_${item.name}`} value={item.name}>{item.name}</MenuItem>
        );
    });

    return (
        <div>
            <FormControl variant="outlined">
                <InputLabel htmlFor="search-input">Name</InputLabel>
                <OutlinedInput
                    id="search-input"
                    label="Search"
                    value={formSearch}
                    onChange={handleChangeSearch}
                    endAdornment={
                        !!formSearch && <InputAdornment position="end">
                            <IconButton
                                aria-label="clear value"
                                onClick={handleClickClear}
                            >
                                <ClearIcon />
                            </IconButton>
                        </InputAdornment>
                    }
                />
            </FormControl>
            <FormControl variant="outlined">
                <InputLabel id="select-tag-label">Tag</InputLabel>
                <Select
                    labelId="select-tag-label"
                    id="select-tag"
                    value={formTag}
                    onChange={handleTagChange}
                    label="Tag"
                >
                    <MenuItem value=''>
                        <em>None</em>
                    </MenuItem>
                    {tagsItems}
                </Select>
            </FormControl>
        </div>
    );
}

Search.propTypes = {
    form: PropTypes.object.isRequired,
    setForm: PropTypes.func.isRequired,
    setLoading: PropTypes.func,
};

Search.defaultProps = {
    setLoading: noop
};

export default Search;