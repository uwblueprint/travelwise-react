import { gql } from "apollo-boost";

export const GET_SENT_COMPANY_FILES_BY_COMPANY_ID = gql`
  query FilesByCompanyId($companyId: Int!) {
    companies_files(where: { from_company_id: { _eq: $companyId } }) {
      to_company {
        name
        id
      }
      from_company {
        name
        id
      }
      file {
        id
        title
        date_created
        file_size
        key
      }
    }
  }
`;

export const GET_RECEIVED_COMPANY_FILES_BY_COMPANY_ID = gql`
  query FilesByCompanyId($companyId: Int!) {
    companies_files(where: { to_company_id: { _eq: $companyId } }) {
      to_company {
        name
        id
      }
      from_company {
        name
        id
      }
      file {
        id
        title
        date_created
        file_size
        key
      }
    }
  }
`;

export const GET_COMPANIES = gql`
  query getCompanies {
    companies {
      id
      name
    }
  }
`;
