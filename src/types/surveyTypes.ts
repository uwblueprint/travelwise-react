export interface QuestionFiles {
  survey_id: number;
  type: string;
  id: number;
  name: string;
  category_id: number;
  options:Array<{
      id: string;
      question_id: number; 
      value: string;
      score: number;
  }>;
}

export interface InsertQuestionType{
  survey_id: number;
  type: string;
  name: string;
  category_id: number;
}

export interface InsertOptionType{
  question_id: number; 
  value: string;
  score: number;
}

export interface UpdateQuestionType{
  survey_id: number;
  type: string;
  name: string;
  id: number;
}

export interface UpdateOptionType{
  id: number;
  question_id: number;
  value: string;
  score: number;
}