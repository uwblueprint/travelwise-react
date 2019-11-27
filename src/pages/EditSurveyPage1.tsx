<<<<<<< HEAD
import React from 'react';

import SurveyPage from './SurveyPage';

import './EditSurveyPage.css';

class EditSurveyPage extends React.Component {
  // loadData() {
  //   this.props.fetchSurvey(this.props.surveyId);
  // }

  // componentDidMount() {
  //   this.loadData();
  // }

  // componentDidUpdate(prevProps) {
  //   if (this.props.surveyId !== prevProps.surveyId) {
  //     this.loadData();
  //   }
  // }

  render() {
    return (
        <div className="EditSurveyPage container">
          <div className="clearfix EditPanel">
            <div className="col-md-8 Main">
              <SurveyPage/>
            </div>
            <div className="col-md-4 Sidebar">

            </div>
          </div>
        </div>
    );
  }
}

export default EditSurveyPage
=======
import React from 'react';
import {QuestionProps, QuestionWrapper} from '../components/surveys/Question';
import '../components/surveys/Surveys.css';
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import EditTab from '../components/surveys/EditTab';

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
        options(order_by: {id: asc}) {
          id
          value
        }
      }
}`;

type EditSurveyProps ={
    name: string,
    id : number,
    questions: QuestionProps[]
}

interface QuestionData {
    questions: QuestionProps[]
}

interface SurveyData {
    surveys: Array<{ id: string; name: string }>;
}

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

class EditSurvey extends React.Component<EditSurveyProps>{
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

    handleSubmit(event:React.FormEvent<HTMLFormElement>){
        // this.setState({value: event.currentTarget.value});
        // if(this.validateForm()){
        //     // save state to local storage
        //     this.props.onSave(this.state);
        //     console.log(userProps);
        // }
        event.preventDefault();
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
                            <form onSubmit={this.handleSubmit}>
                            <ul className="list-unstyled">
                                {questions.map(question => {
                                    return <li key={question.id}><QuestionWrapper onChange = {this.handleUserChange} {... question}/></li>
                                })}
                            </ul>
                            <input type="submit" value="Submit"/>
                            </form>)
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

const EditSurveyPage: React.FC = () => (
        <div>
            <h1>Survey Page</h1>
            <div className='editsurvey'>
                <EditSurvey {... testProps}/>
                <EditQuestion {... testProps.questions[0]}/>
            </div>
        </div>
);

export default EditSurveyPage;
>>>>>>> 4949c7f33aec64a456926fff3bd95a195a872a93
