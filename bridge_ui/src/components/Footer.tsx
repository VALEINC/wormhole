import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  footer: {
    position: "relative",
  },
  container: {
    maxWidth: 1100,
    margin: "0px auto",
    paddingTop: theme.spacing(11),
    paddingBottom: theme.spacing(6.5),
    [theme.breakpoints.up("md")]: {
      paddingBottom: theme.spacing(12),
    },
  },
  flex: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginLeft: theme.spacing(3.5),
    marginRight: theme.spacing(3.5),
    borderTop: "1px solid #585587",
    paddingTop: theme.spacing(7),
    [theme.breakpoints.up("md")]: {
      flexWrap: "wrap",
      flexDirection: "row",
      alignItems: "unset",
    },
  },
  spacer: {
    flexGrow: 1,
  },
  // linkStyle: {
  //   color: "white",
  //   display: "block",
  //   marginRight: theme.spacing(0),
  //   marginBottom: theme.spacing(1.5),
  //   fontSize: 14,
  //   textUnderlineOffset: "6px",
  //   [theme.breakpoints.up("md")]: {
  //     marginRight: theme.spacing(7.5),
  //   },
  // },
  linkActiveStyle: { textDecoration: "underline" },
  // wormholeIcon: {
  //   height: 68,
  //   marginTop: -24,
  // },
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.flex}>
          <div className={classes.spacer} />
          <Typography variant="body2">
            This Interface is only intended as a developmental tool.
          </Typography>
        </div>
      </div>
    </footer>
  );
}
