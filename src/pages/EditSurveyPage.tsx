import React from 'react';

import SurveyPage from './SurveyPage';

import './EditSurveyPage.css';
import { EditQuestion } from '../components/surveys/EditSurveyPanel';

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
              <EditQuestion {... testProps.questions[0]}/>
            </div>
          </div>
        </div>
    );
  }
}

export default EditSurveyPage
