import React from 'react';
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

const COMPANIES_QUERY = gql`
{
  companies {
    name
    id
  }
}
`;

interface Data {
    companies: Array<{ id: string; name: string }>;
};

const companiesList = <Query<Data> query={COMPANIES_QUERY}>
    {({ loading, error, data }) => {
        if (loading) return <div>Loading</div>;
        if (error) return <h1>ERROR: {error.message}</h1>;
        if (!data) return <div>no data</div>;

        const companies = data.companies;
        return companies.map(company => (
            <div>{company.name}</div>
        ));
    }}
</Query>;

const LandingPage: React.FC = () => {
    return (
        <div>
            landing
          {companiesList}
        </div>
    );
}

export default LandingPage;