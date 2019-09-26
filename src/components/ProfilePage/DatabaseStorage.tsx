import React from 'react';
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
// TODO: figure out what data we will have (session cookie? sessionID? user ID?) 
//       so that we can build a proper query

// TODO: add address field to DB

// TODO: update to an actual ID
const userId = 1;

// TODO: determine if this query even works
const COMPANIES_QUERY = gql`
{
  users(where: {id: {_eq: ${userId}}}) {
    first_name,
    last_name,
    email,
    champion,
    company_id
    ... on companies(where: {id: {_eq: company_id}}){
        name
    }
    id
  }
}`;

interface Data {
    users: { 
        first_name: string; 
        last_name: string;
        email: string;
        champion: string;
        company_id: string;
        companies: {
            name: string;
        };
    };
};  

const userInfo = <Query<Data> query={COMPANIES_QUERY}>
    {({ loading, error, data }) => {
        if (loading) return <div>Loading</div>;
        if (error) return <h1>ERROR</h1>;
        if (!data) return <div>no data</div>;

        const user = data.users;
        return (<div>
                <p>{user.first_name}</p>
                <p>{user.last_name}</p>
                <p>{user.email}</p>
                <p>{user.champion}</p>
                <p>{user.companies.name}</p>
            </div>
        );
    }}
</Query>;

export {userInfo};