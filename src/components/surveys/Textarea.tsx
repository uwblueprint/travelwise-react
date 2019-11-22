import * as React from "react";
import {QuestionProps} from './Question';


class MultiLineText extends React.Component<QuestionProps> {
  render() {
    const { name, id } = this.props;
    return (
        <div key={id + "textarea"}>
          <h3 className="question">{name}</h3>
          <div className="form-group">
            <input type="textarea" className="form-control" placeholder="Insert text here" name={name}></input>
          </div>
        </div>
    );
  }
}

export default MultiLineText;
