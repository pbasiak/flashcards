import { makeStyles, Paper, Typography } from "@material-ui/core";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "24px 32px",
    margin: "0 20px",
    marginBottom: "40px",
    maxWidth: "250px",
  },
  title: {
    marginBottom: theme.spacing(2),
    fontWeight: "600",
  },
}));

function FeatureCard({ children, title }) {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Typography variant="h5" component="h3" className={classes.title}>
        {title}
      </Typography>
      <Typography variant="body1">{children}</Typography>
    </Paper>
  );
}

FeatureCard.propTypes = {
  children: PropTypes.oneOfType(PropTypes.string, PropTypes.node).isRequired,
  title: PropTypes.string.isRequired,
};

export default FeatureCard;
