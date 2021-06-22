import { Button, makeStyles } from "@material-ui/core";

const LEVEL_COLOR = {
  junior: "rgb(42, 202, 112)",
  mid: "rgb(223, 192, 25)",
  senior: "rgb(223, 31, 31)",
};

const useStyles = makeStyles((theme) => ({
  root: (props) => ({
    marginLeft: theme.spacing(1),
    backgroundColor:
      `${LEVEL_COLOR[props.level]} !important` || "red !important",
    color: "#F1F1F1 !important",
  }),
}));

function LevelButton(props) {
  const { level } = props;
  const classes = useStyles(props);

  let levelText;

  switch (level) {
    case "junior":
      levelText = "junior";
      break;
    case "senior":
      levelText = "senior";
      break;
    default:
      levelText = "mid";
  }

  return (
    <Button variant="contained" size="small" disabled className={classes.root}>
      {levelText}
    </Button>
  );
}

export default LevelButton;
