import React from 'react';
import { Query, Mutation } from "react-apollo";
import { gql } from "apollo-boost";
import EditableProfile from './EditProfilePage';
import {ProfileProps} from './Common';

type State = Readonly<{editable: boolean, userInfo:ProfileProps}>
// TODO: figure out what data we will have (session cookie? sessionID? user ID?) 
//       so that we can build a proper query

// TODO: add address field to DB

// TODO: update to an actual ID
const userId = 1;

// TODO: determine if this query even works
const USER_QUERY = gql`{
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

const USER_INPUT = gql`
{
    UserInput {
        id: Int!
        champion: String
        email: String
        first_name: String
        last_name: String
        company_id: Int!
    }
}`

// TODO: create update users
// INPUT OBJECT TYPE - graphql?: https://graphql.org/learn/schema/#input-types 
// TODO: detemine what type the ID field is
const USER_MUTATION = gql`
{
    mutation update_users($user: User, $id: serial) {
        user(id: $id){
            id
            champion
            company {
              id
              name
            }
            email
            first_name
            last_name
        }
    }  
}`

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

const userToInsert = { 
    champion: false, 
    company_id: 1, 
    email: "user@example.com",
    first_name: "user", 
    last_name: "name"
}
    

const userMutation= <Mutation<Data> mutation={USER_MUTATION} variables={{state : ""}}>
    {() => {

        return <div><p>sad</p></div> //<EditableProfile state={state} onSave={state.updateState}/>;
    }}
</Mutation>

//TODO: determine how to return just JSON packet with certain info
const userInfo = <Query<Data> query={USER_QUERY}>
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

export {userInfo, userMutation};
