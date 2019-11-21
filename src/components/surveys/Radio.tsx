import React from 'react';
import {QuestionProps} from './Question';

class Radio extends React.Component<QuestionProps>{
    render(){
        const {name, options, id} = this.props;

        return(
            <div key={id + "radio"} >
                <h3 className='question'>{name}</h3>
                {options.map((option, index) => (
                    <div key={option.id} className='radio-group'>
                        <input type ='radio' name={name} value={option.value} onChange={this.props.onChange}/>{option.value}
                    </div>
                ))}
            </div>
        )
    }
}

class RadioGrid extends React.Component<QuestionProps>{
    render(){
        const {name, options, id} = this.props;

        return(
            <div key={id + "radio_grid"} className='radioGrid'>
                <div className='radio-grid-header'>
                {options.map((option, index) => (
                    <div key={option.id} className='radio-grid-header-item'>
                        {option.value}
                    </div>
                ))}
                </div>
                <div className='radio-grid-row'>
                <h3 className='radio-grid-item'>{name}</h3>
                {options.map((option, index) => (
                    <div className='radio-grid-item'>
                        <input type ='radio' name={name} value={option.value} onChange={this.props.onChange}/>
                    </div>
                ))}
                </div>
            </div>
        )
    }
}

export {Radio, RadioGrid};