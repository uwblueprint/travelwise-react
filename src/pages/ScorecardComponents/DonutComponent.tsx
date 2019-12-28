import React from "react";
import DonutChart from "react-d3-donut";
import {makeStyles} from "@material-ui/core";

interface DonutComponentProps {
  data: Array<{ count: number; color: string }>;
  innerRadius: number;
  outerRadius: number;
  title: string;
  fontSize: number;
  pieClass: string;
}

const DonutComponent: React.FC<DonutComponentProps> = props => {
  var data = props.data;
  const classes = makeStyles(() => ({
    innerNumberDiv: {
      position: "absolute",
      fontSize: props.fontSize,
      fontWeight: "bold",
      bottom: "50%",

      // horizontal center
      width: "100%",
      textAlign: "center"
    },
    innerTitleDiv: {
      position: "absolute",
      fontSize: props.fontSize * 0.75,
      fontWeight: "bold",
      top: "50%",

      // horizontal center
      width: "100%",
      textAlign: "center"
    },
    outerDiv: {
      display: "inline-block",
      position: "relative"
    }
  }))();

  return (
    <div className={classes.outerDiv}>
      <div className={classes.innerNumberDiv}>
        {data[0].count + "/" + (data[0].count + data[1].count)}
      </div>
      <div className={classes.innerTitleDiv}>{props.title}</div>
      <DonutChart
        innerRadius={props.innerRadius}
        outerRadius={props.outerRadius}
        transition={true}
        svgClass="example3"
        pieClass={props.pieClass}
        strokeWidtn={0}
        data={data}
      />
    </div>
  );
};

export default DonutComponent;