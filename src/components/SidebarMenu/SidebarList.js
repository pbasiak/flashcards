import React from "react";
import PropTypes from "prop-types";
import { makeStyles, MenuList } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  menuList: {},
}));

function SidebarList({ children }) {
  const classes = useStyles();

  return <MenuList className={classes.menuList}>{children}</MenuList>;
}

SidebarList.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SidebarList;
