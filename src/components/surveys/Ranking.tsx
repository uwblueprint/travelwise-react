import React from 'react';
import {QuestionProps} from './Question';


class Ranking extends React.Component<QuestionProps>{
    render(){
        const {name, options, id} = this.props;

        return(
            <div key={id + "ranking"} className='ranking'>
                <h3 className='ranking-item'>{name}</h3>
                {options.map((option, index) => (
                    <div key={option.id} className='ranking-item'>
                        <input type ='radio' name={name} id={option.id} value={option.value} onChange={this.props.onChange}/>
                        <label htmlFor={option.id}>{index+1}</label>
                    </div>
                ))}
            </div>
        )
    }
}

export default Ranking;