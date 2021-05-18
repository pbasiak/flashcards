import { Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  cardList: {
    flexGrow: 1,
    marginTop: theme.spacing(3),
  },
}));

function FlashCardList({ list }) {
  const classes = useStyles();

  return (
    <Grid className={classes.cardList} spacing={3} item container>
      {list}
    </Grid>
  );
}

export default FlashCardList;
