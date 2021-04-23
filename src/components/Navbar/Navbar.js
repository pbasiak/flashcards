import { Avatar, Grid, makeStyles } from "@material-ui/core";
import ProfileAvatar from "../ProfileAvatar/ProfileAvatar";

const useStyles = makeStyles(() => ({
    root: {
        width: "100%",
        position: "absolute",
        paddingTop: '16px !important',
        paddingBottom: '16px !important',
        display: "flex",
        justifyContent: "flex-end",
    },
}));

function Navbar() {
    const classes = useStyles();

    return (
        <Grid item sm={12} className={classes.root}>
            <ProfileAvatar />
        </Grid>
    );
}

export default Navbar;
