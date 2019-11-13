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
