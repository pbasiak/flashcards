import { Button, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import PageBoxTemplate from "../PageBoxTemplate.js/PageBoxTemplate";
import { API_URL } from "../../const/api";
import CardBox from "../CardBox/CardBox";
import Logo from "../Logo/Logo";

const useStyles = makeStyles((theme) => ({
  loginTitle: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    textAlign: "center",
  },
  strong: {
    color: theme.palette.primary.main,
  },
}));

function Login() {
  const classes = useStyles();

  return (
    <PageBoxTemplate>
      <CardBox>
        <Grid container>
          <Grid item container justify="center" direction="column">
            <Logo />
            <Typography variant="body2" className={classes.loginTitle}>
              Click button below to login / register
            </Typography>
          </Grid>
          <Grid item container justify="center">
            <Button
              color="primary"
              href={`${API_URL}/connect/github`}
              variant="contained"
              startIcon={<GitHubIcon />}
            >
              Login with Github
            </Button>
          </Grid>
        </Grid>
      </CardBox>
    </PageBoxTemplate>
  );
}

export default Login;
