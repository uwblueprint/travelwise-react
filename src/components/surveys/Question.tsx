import React from 'react';
import {Radio, RadioGrid} from './Radio';
import Ranking from './Ranking';
import MultipleSelect from './Checkboxes';
import Textarea from './Textarea';

// TODO: coordinate enum class with DB question type values
const QuestionsEnum = {"radio":1, "radio_grid":2, "ranking":3, "multiselect":4, "textarea":5};
Object.freeze(QuestionsEnum);

// questions have a name, as well as options
interface Props {
    type: string;   // Use QuestionsEnum class to distinguish
    id: number;
    name: string;
    options:{
        id: string;
        value: string;
        // numInRow: number    // TODO: may not need this
    }[];
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    [key: string]: any;
};

const questionMap = {
    [QuestionsEnum.radio] : (props : Props) =>{
        return <Radio {... props}/>
    },
    [QuestionsEnum.radio_grid] : (props : Props) =>{
        return <RadioGrid {... props}/>
    },
    [QuestionsEnum.ranking] : (props : Props) =>{
        return <Ranking {... props}/>
    },
    [QuestionsEnum.multiselect] : (props : Props) =>{
      return <MultipleSelect {... props}/>
    },
    [QuestionsEnum.textarea] : (props : Props) =>{
      return <Textarea {... props}/>
    },
}

class QuestionWrapper extends React.Component<Props> {
    render() {
      var QuestionComponent;
      if(this.props.type === "radio"){
        QuestionComponent = questionMap[QuestionsEnum.radio](this.props);
      }else if(this.props.type === "radio_grid"){
        QuestionComponent = questionMap[QuestionsEnum.radio_grid](this.props);
      }else if(this.props.type === "ranking"){
        QuestionComponent = questionMap[QuestionsEnum.ranking](this.props);
      }else if(this.props.type === "multiselect"){
        QuestionComponent = questionMap[QuestionsEnum.multiselect](this.props);
      }else if(this.props.type === "textarea"){
        QuestionComponent = questionMap[QuestionsEnum.textarea](this.props);
      }
      var classNames = 'question';
  
      return (
          <div className={classNames}>
            {QuestionComponent}
          </div>
      )
    }
  }
  

export type QuestionProps = Props;
export {QuestionsEnum, QuestionWrapper};