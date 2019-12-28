import React from "react";
import { Card, makeStyles } from "@material-ui/core";
import DonutComponent from './DonutComponent';

interface DonutCardProps {
  data: Array<{ count: number; color: string }>;
  innerRadius: number;
  outerRadius: number;
  title: string;
  fontSize: number;
  pieClass: string;
  description: string;
  //cardTitle: string;
}

const DonutCard: React.FC<DonutCardProps> = props => {
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
    }
  }))();

  return (
    <Card className={classes.cardStyle}>
      <DonutComponent
        data={props.data}
        pieClass={props.pieClass}
        innerRadius={props.innerRadius}
        outerRadius={props.outerRadius}
        fontSize={props.fontSize}
        title={props.title}
      />
      <div style={{ flexGrow: 3 }} />
      <p>{props.description}</p>
    </Card>
  );
};

export default DonutCard;