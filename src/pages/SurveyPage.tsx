import React from 'react';
import {QuestionProps, QuestionWrapper} from '../components/surveys/Question';
import '../components/surveys/Surveys.css';
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

const SURVEY_QUERY = gql`
{
    surveys(where:{active: {_eq: true}}){
        name
        id
    }
}`;

const QUESTION_QUERY = gql`
query questions($sID: Int){
    questions(where: {survey_id: {_eq: $sID}}) {
        type
        id
        name
        options {
          id
          value
        }
      }
}`;

type SurveyProps ={
    name: string,
    id : number,
    questions: QuestionProps[] // TODO: add answer props as well
}

interface QuestionData {
    questions: QuestionProps[]
}

interface SurveyData {
    surveys: Array<{ id: string; name: string }>;
}

class Survey extends React.Component<SurveyProps>{
    public handleUserChange(event:React.ChangeEvent<HTMLInputElement>){
        const name = event.target.name;
        const value = event.target.value;
        // TODO: figure out how you want to handle user changes
        // var user = this.state.name;
        // var facilities = this.state.facilities;

        // user[name] = value;
        // facilities[name] = value;
        // this.setState({user: user});
        // this.setState({facilities: facilities});
    }

    render(){
        return (
            <div className='survey'>
                {/* <h3>{this.props.name}</h3>
                <ul className="list-unstyled">
                {this.props.questions.map(question => {
                    return <li key={question.id}><QuestionWrapper onChange = {this.handleUserChange} {... question}/></li>
                })}
                </ul> */}
                <Query<SurveyData> query={SURVEY_QUERY}>
                    {({ loading, error, data }) => {
                    if (loading) return <div>Loading</div>;
                    if (error) return <h1>ERROR: {error}</h1>;
                    if (!data) return <div>no data</div>;

                    console.log(data);

                    const surveyName = data.surveys[0].name;
                    const surveyId = data.surveys[0].id;

                    console.log(surveyId);
                    console.log(surveyName);
                    return(
                    <div>
                        <h3>{surveyName}</h3>
                        <Query<QuestionData> query={QUESTION_QUERY} variables={{sID: surveyId}}>
                            {({ loading, error, data }) => {
                            if (loading) return <div>Loading</div>;
                            if (error) return <h1>ERROR: {error}</h1>;
                            if (!data) return <div>no data</div>;

                            console.log(data);
        
                            const questions = data.questions;
                            return (
                            <ul className="list-unstyled">
                                {questions.map(question => {
                                    return <li key={question.id}><QuestionWrapper onChange = {this.handleUserChange} {... question}/></li>
                                })}
                            </ul>)
                            }}
                        </Query>
                    </div>)
                    }}
                </Query>
            </div>
        )
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

const SurveyPage: React.FC = () => (
        <div>
            <h1>Survey Page</h1>
            <Survey {... testProps}/>
        </div>
);

export default SurveyPage;