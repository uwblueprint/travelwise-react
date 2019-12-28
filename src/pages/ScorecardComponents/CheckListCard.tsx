import React from "react";
import {Checkbox, makeStyles} from "@material-ui/core";

interface checkListProps {
  data: Array<{ name: string; isChecked: boolean }>;
  title: string;
}

const CheckListCard: React.FC<checkListProps> = props => {
  const classes = makeStyles(() => ({
    title: {
      color: "#71A850",
      display: "flex",
      margin: 30
    },
    checklistElt: {
      display: "flex",
      marginLeft: 30,
      marginRight: 30,
      marginTop: 5,
      marginBottom: 5
    }
  }))();

  return (
    <div>
      <h4 className={classes.title}>
        {props.title} <div style={{ flexGrow: 1 }} /> {"/" + props.data.length}
      </h4>
      {props.data.map(element => (
        <div className={classes.checklistElt}>
          {element.name}
          <div style={{ flexGrow: 1 }} />
          {element.isChecked === true ? (
            <Checkbox disabled checked />
          ) : (
            <Checkbox disabled />
          )}
        </div>
      ))}
    </div>
  );
};

export default CheckListCard;