import { gql } from "apollo-boost";

export const GET_COMPANY_FILES_BY_COMPANY_ID = gql`
  query FilesByCompanyId($companyId: Int!) {
    companies(where: { id: { _eq: $companyId } }) {
      name
      files {
        id
        title
      }
    }
  }
`;

export const UPDATE_QUESTION = gql`
mutation UpdateQuestion($survey_id: Int, $id: Int $name: String, $type: String) {
  update_questions(
    where: { survey_id: { _eq: $survey_id } 
					_and: { id: { _eq:$id } } }
  	_set: { name: $name, type: $type } ){
    returning{ id }
  }
}
`;

export const UPDATE_OPTION = gql`
mutation UpdateOption($question_id:Int, $id:Int, $value:String, $score:Int){
  update_options(
    where: { question_id: { _eq: $question_id }
    			_and: { id: { _eq:$id } } }
    _set: { value: $value, score:$score } ){
    returning{ id }
  }
}
`;

export const INSERT_QUESTIONS = gql`
mutation InsertQuestion($questions: [questions_insert_input!]!){
  insert_questions(objects:$questions){
    returning{ id }
  }
}
`;

export const INSERT_OPTIONS = gql`
mutation InsertOptions($options: [options_insert_input!]!){
  insert_options(objects:$options){
    returning{ id }
  }
}
`;

export const SURVEY_QUERY = gql`
{
    surveys(where:{active: {_eq: true}}){
        name
        id
    }
}
`;

export const QUESTION_QUERY = gql`
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
}
`;