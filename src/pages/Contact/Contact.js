import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import PageWithSidebarTemplate from "../../components/PageWithSidebarTemplate/PageWithSidebarTemplate";


const useStyles = makeStyles((theme) => ({
    title: {
        marginBottom: theme.spacing(3),
    }
}));

function Contact() {
  const classes = useStyles();

  return (
    <PageWithSidebarTemplate
      title={
        <>
          Contact <strong>me</strong>
        </>
      }
    >
    <Typography variant="h4" className={classes.title}>Hi, I am Paweł and I created this application.</Typography>
    <Typography variant="body1" >You can contact me with email. Message me: <strong>kontakt@devpebe.com</strong></Typography>
    </PageWithSidebarTemplate>
  );
}

export default Contact;
