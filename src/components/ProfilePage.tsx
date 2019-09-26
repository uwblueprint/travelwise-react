import React from 'react';
// import { Query } from "react-apollo";
// import { gql } from "apollo-boost";

// TODO: figure out how to get specific company data
// const COMPANIES_QUERY = gql`
// {
//   companies {
//     name
//     id
//   }
// }
// `;

interface Data {
    companies: Array<{ id: string; name: string }>;
};

// TODO
const FacilityInformation = (
    <div className="profileInfo">
    </div>
);


const ProfileInfo = (
    <div className="profileInfo">
        <p><b>Champion Name:</b> </p>
        <p><b>Company Name:</b> </p>
        <p><b>Company Address:</b> </p>
        <p><b>Company Phone Number:</b> </p>
        <p><b>Email Address:</b> </p>
    </div>
);

const ProfilePage: React.FC = () => {
    return (
        <div>
            <h1>Test Profile Page</h1>
            {ProfileInfo}
            {FacilityInformation}
        </div>
    );
}

export default ProfilePage;
