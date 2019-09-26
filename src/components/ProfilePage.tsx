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

const defaultProps = {
    user: { champName: "Joe Smith",
        compName: "ABC Co.",
        address: "123 Any Street",
        phoneNumber: "(123)-456-7890",
        email: "joe@example.come"},
    facilities: { numOffices: "7"}
}

interface Data {
    companies: Array<{ id: string; name: string }>;
};

const iState = {editable: false};
type State = Readonly<typeof iState>;
type ProfileProps ={
    user: { champName: string,
            compName: string,
            address: string,
            phoneNumber: string,
            email: string},
    facilities: { numOffices: string}
}

class ProfileControl extends React.Component<ProfileProps>{
    readonly state: State = iState;

    constructor(props:ProfileProps){
        super(props);
        this.toggleEdit = this.toggleEdit.bind(this);
        this.render = this.render.bind(this);
        this.state = {editable: false};
    }

    toggleEdit(){
        if(this.state.editable){
            // TODO: save changed fields
        }
        this.setState({editable: !this.state.editable});
    }

    render(){
        const editable = this.state.editable;
        let display;
        let button;

        if(editable){
            display = <EditableProfile/>;
            button = <button onClick={this.toggleEdit}>Save</button>
        } else {
            display = <StaticProfile user={this.props.user} facilities={this.props.facilities}/>;
            button = <button onClick={this.toggleEdit}>Edit</button>
        }

        return (
            <div>
                {display}
                {button}
            </div>
        )
    }
}

// TODO
const FacilityInformation = (
    <div className="profileInfo">
    </div>
);

function ProfileInformation(props:ProfileProps) {
    return(
    <div className="profileInfo">
        <p><b>Champion Name:</b> {props.user.champName} </p>
        <p><b>Company Name:</b> {props.user.compName} </p>
        <p><b>Company Address:</b> {props.user.address}</p>
        <p><b>Company Phone Number:</b> {props.user.phoneNumber}</p>
        <p><b>Email Address:</b> {props.user.email}</p>
    </div>
);}

function StaticProfile(props:ProfileProps) {
    return(<div>
        <h1>Test Profile Page</h1>
        <ProfileInformation user={props.user} facilities={props.facilities}/>
        {FacilityInformation}
    </div>);
}

// reference: https://reactjs.org/docs/forms.html
function EditableProfile(){
    return (
        <div>
            <h1>Edit Profile</h1>
        </div>
    );
};

const ProfilePage: React.FC = () => {
    return <ProfileControl user={defaultProps.user} facilities={defaultProps.facilities}/>;

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