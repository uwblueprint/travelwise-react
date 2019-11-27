import React from 'react';

import SurveyPage from './SurveyPage';

import './EditSurveyPage.css';
import { EditQuestion } from './EditSurveyPanel';

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
              <EditQuestion/>
            </div>
          </div>
        </div>
    );
  }
}

export default EditSurveyPage
