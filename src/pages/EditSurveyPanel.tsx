import React from 'react';
import {QuestionProps, QuestionWrapper} from '../components/surveys/Question';
import '../components/surveys/Surveys.css';
import { gql } from "apollo-boost";
import EditTab from '../components/surveys/EditTab';

// const SURVEY_QUERY = gql`
// {
//     surveys(where:{active: {_eq: true}}){
//         name
//         id
//     }
// }`;

// const QUESTION_QUERY = gql`
// query questions($sID: Int){
//     questions(where: {survey_id: {_eq: $sID}}) {
//         type
//         id
//         name
//         options(order_by: {id: asc}) {
//           id
//           value
//         }
//       }
// }`;

function isEmpty(obj:any) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

class EditQuestion extends React.Component<QuestionProps | {}>{
    selected : boolean;

    constructor(props:QuestionProps|{}){
        super(props);

        this.selected = true;
        if(isEmpty(props)){
            console.log(typeof(props));
            this.selected = false;
        }

        this.render = this.render.bind(this);
    }

    render(){
        if(this.selected){
            return(<div>
                <EditTab {... this.props as QuestionProps}/>
            </div>);
        }else{
            return(<div><h1>Select a Question to Edit</h1></div>);
        }
    }
}

const testProps ={
    name: "Test 1",
    id: 1,
    questions:[
        {type: "radio",
        id: 1,
        name: 'radio question 1',
        options:[
            {id: "1", value: 'opt 1'},// numInRow: 1},
            {id: "2", value: 'opt 2'},// numInRow: 1},
            {id: "3", value: 'opt 3'},// numInRow: 1}
        ],
        onChange: (event: React.ChangeEvent<HTMLInputElement>) => void{}
        },
        {type: "ranking",
        id: 1,
        name: 'ranking question 2',
        options:[
            {id: "1", value: 'val 1'},// numInRow: 3},
            {id: "2", value: 'val 2'},// numInRow: 3},
            {id: "3", value: 'val 3'},// numInRow: 3}
        ],
        onChange: (event: React.ChangeEvent<HTMLInputElement>) => void{}
        }
    ]
}

export { EditQuestion };
