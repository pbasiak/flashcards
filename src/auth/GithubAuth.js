import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory, useLocation } from "react-router-dom";
import { useCookies } from "react-cookie";
import PageBoxTemplate from "../components/PageBoxTemplate.js/PageBoxTemplate";
import { Alert } from "@material-ui/lab";
import {
  Button,
  CircularProgress,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { API_URL } from "../const/api";
import ROUTES from "../const/routes";

const useStyles = makeStyles((theme) => ({
  row: {
    marginBottom: theme.spacing(2),
  },
}));

function useQuery(search) {
  return new URLSearchParams(search);
}

function GithubAuth() {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(false);
  const [cookie, setCookie] = useCookies(["auth"]);
  const location = useLocation();
  const { search } = location;
  const history = useHistory();
  let query = useQuery(search);
  const error = query.get("error");

  useEffect(() => {
    if (!location) {
      return;
    }

    setIsLoading(true);

    axios({
      method: "GET",
      url: `${API_URL}${ROUTES.GithubCallback.path}${search}`,
    })
      .then((res) => res.data)
      .then((res) => {
        setCookie("auth", res, { path: "/" });
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  }, [location, history, setCookie, search, setIsLoading]);

  useEffect(() => {
    if (cookie) {
      setIsLoading(false);
    }
  }, [cookie]);

  useEffect(() => {
    if (!isLoading && !error && cookie.auth) {
      history.push(ROUTES.Dashboard.path);
    }
  }, [history, isLoading, error, cookie]);

  return (
    <PageBoxTemplate>
      <Grid container>
        <Grid item container sm={12} justify="center" className={classes.row}>
          <Typography variant="h5">
            {error ? "Login failed" : "Login in process..."}
          </Typography>
        </Grid>
        {!error && (
          <Grid item container sm={12} justify="center" className={classes.row}>
            <CircularProgress />
          </Grid>
        )}

        {error && (
          <Grid item container sm={12} justify="center" className={classes.row}>
            <Alert severity="error">{error}</Alert>
          </Grid>
        )}

        {error && (
          <Grid item container sm={12} justify="center" className={classes.row}>
            <Button href={ROUTES.Dashboard.path} color="primary" variant="contained">
              Back to login page
            </Button>
          </Grid>
        )}
      </Grid>
    </PageBoxTemplate>
  );
}

export default GithubAuth;
