import React from "react";
import { Card, LinearProgress, makeStyles } from "@material-ui/core";

interface LinearProgressCardProps {
  title: string;
  numerator: number;
  denominator: number;
  barColor: string;
}

const LinearProgressCard: React.FC<LinearProgressCardProps> = props => {
  const classes = makeStyles(() => ({
    cardStyle: {
      border: "1.36px solid #CCCCCC",
      maxWidth: 210,
      minWidth: 150,
      maxHeight: 280,
      minHeight: 200,
      textAlign: "center",
      padding: 31.6,
      width: "15vw",
      height: "20vw",
      display: "flex",
      flexDirection: "column",
      margin: 30
    },
    barRoot: {
      height: 5,
      backgroundColor: "#CCCCCC",
      borderRadius: 10
    },
    barBar: {
      borderRadius: 10,
      backgroundColor: props.barColor
    },
    title: {
      padding: 0,
      margin: 0
    }
  }))();

  return (
    <Card className={classes.cardStyle}>
      <h3 className={classes.title}>{props.title}</h3>
      <div style={{ flexGrow: 2 }} />
      <h1>{props.numerator + " / " + props.denominator}</h1>
      <div style={{ flexGrow: 3 }} />
      <LinearProgress
        variant="determinate"
        classes={{ root: classes.barRoot, bar: classes.barBar }}
        value={(props.numerator / props.denominator) * 100}
      />
    </Card>
  );
};

export default LinearProgressCard;