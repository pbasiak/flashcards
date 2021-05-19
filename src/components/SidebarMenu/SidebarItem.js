import PropTypes from "prop-types";
import {
  Box,
  IconButton,
  makeStyles,
  MenuItem,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { useCallback } from "react";
import { useHistory } from "react-router-dom";
import { noop } from "lodash-es";
import { useSidebar } from "../../hooks/useSidebar";

const useStyles = makeStyles((theme) => ({
  menuItem: ({ action, actionIcon }) => ({
    paddingBottom: action && actionIcon ? "4px" : theme.spacing(2),
    paddingTop: action && actionIcon ? "4px" : theme.spacing(2),
    borderRadius: theme.spacing(1),
    marginBottom: "4px", // TODO: THEME var
    display: "flex",
    justifyContent: "space-around",
  }),
  menuItemActive: {
    background: "#E9EDF1", // TODO: THEME var
    color: "#061524", // TODO: THEME var

    "&:hover": {
      background: "#E9EDF1", // TODO: THEME var
      color: "#061524", // TODO: THEME var
    },
  },
}));

function SidebarItem({ children, to, icon, action, actionIcon }) {
  const classes = useStyles({ action, actionIcon });
  const { setOpen } = useSidebar();
  const { location, push } = useHistory();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  console.log(matches);

  const isActive = location.pathname === to;
  const handleRedirect = useCallback(() => {
    if (matches) {
      setOpen(false);
    }
    return push(to);
  });

  const onIconClick = useCallback((event) => {
    if (matches) {
      setOpen(false);
    }
    action(event);
  });

  return (
    <MenuItem
      onClick={handleRedirect}
      button
      className={`${classes.menuItem} ${isActive && classes.menuItemActive}`}
    >
      <Box display="flex" flexGrow="1" alignItems="center">
        {icon && (
          <Box mr="16px" display="flex" alignItems="center">
            {icon}
          </Box>
        )}
        {children}
      </Box>
      {actionIcon && action && (
        <IconButton onClick={onIconClick}>{actionIcon}</IconButton>
      )}
    </MenuItem>
  );
}

SidebarItem.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
  icon: PropTypes.element,
  action: PropTypes.func,
  actionIcon: PropTypes.element,
};

SidebarItem.defaultProps = {
  icon: null,
  action: noop,
  actionIcon: null,
};

export default SidebarItem;
