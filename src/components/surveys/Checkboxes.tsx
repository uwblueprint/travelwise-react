import * as React from 'react';
import {QuestionProps} from './Question';

class MultipleSelect extends React.Component<QuestionProps> {
  render() {
    const { name, options, id } = this.props;
    return (
        <div key={id + "checkbox"}>
          <h3 className="question">{name}</h3>
          {options.map((option, index) => (
                <div className="checkbox" key={option.id}>
                    <input type="checkbox" name={name} value={option.value} onChange={this.props.onChange}/>
                    {option.value}
                </div>
          ))}
        </div>
    );
  }
}

export default MultipleSelect;
