import React, { useState } from "react";
import { Button, Card, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
    marginTop: theme.spacing(5),
    width: theme.spacing(32),
    height: theme.spacing(16),
    textAlign: "center"
  },
  button: {
    alignItems: "center",
    marginLeft: theme.spacing(10)
  },
  text: {
    align: "center",
    marginTop: 50
  },
  body: {
    marginTop: theme.spacing(20),
    marginLeft: theme.spacing(20)
  }
}));

export default function App() {
  const classes = useStyles();

  const [color, setColor] = useState("");

  function generateHex() {
    return `#${Math.floor(Math.random() * 0xffffff)
      .toString(16)
      .padEnd(6, "0")}`;
  }

  function changeButtonColor() {
    const Element = document.getElementById("card");
    setColor(generateHex());
    Element.style.backgroundColor = color;
  }

  return (
    <div className={classes.body}>
      <Button
        className={classes.button}
        variant="contained"
        onClick={changeButtonColor}
      >
        Generate
      </Button>
      <Card className={classes.root} id="card">
        <Typography className={classes.text}>{color}</Typography>
      </Card>
    </div>
  );
}
