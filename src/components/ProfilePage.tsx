import React from 'react';
import {ProfileProps, userProps} from './Common';
import EditableProfile from './EditProfilePage';
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


type State = Readonly<{editable:boolean, userInfo:ProfileProps}>;

class ProfileControl extends React.Component<ProfileProps>{
    readonly state: State;

    constructor(props:ProfileProps){
        super(props);
        this.toggleEdit = this.toggleEdit.bind(this);
        this.render = this.render.bind(this);
        this.state = {editable: false, userInfo: props};
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
            display = <EditableProfile state={this.state}/>;
            button = <button onClick={this.toggleEdit}>Save</button>
            console.log(userProps);
            // this.setState({userInfo: userProps});
        } else {
            display = <StaticProfile user={this.props.user} facilities={this.props.facilities}/>;
            button = <button onClick={this.toggleEdit}>Edit</button>
            console.log(this.props);
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

const ProfilePage: React.FC = () => {
    return <ProfileControl user={defaultProps.user} facilities={defaultProps.facilities}/>;

const ProfileInfo = (
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
}

export default ProfilePage;
export {ProfileControl};