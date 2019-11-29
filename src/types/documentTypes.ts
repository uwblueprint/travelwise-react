export interface CompanyFiles {
  companies: Array<{
    name: string;
    files: Array<{
      id: string;
      title: string;
    }>;
  }>;
}

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
