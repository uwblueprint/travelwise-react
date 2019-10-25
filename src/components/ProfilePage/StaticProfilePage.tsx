import React from 'react';
import {ProfileProps} from './Common';
import '../../css/ProfilePage.css';

// TODO
const FacilityInformation = (
    <div className="profileInfo">
    </div>
);

function ProfileInformation(props:ProfileProps) {
    return(
    <div className="profileInfo">
        <p><b>Champion Name</b> <br /> {props.user.champName} </p>
        <p><b>Company Name</b> <br /> {props.user.compName} </p>
        <p><b>Company Address</b> <br /> {props.user.address}</p>
        <p><b>Company Phone Number</b> <br /> {props.user.phoneNumber}</p>
        <p><b>Email Address</b> <br /> {props.user.email}</p>
    </div>
);}

function StaticProfile(props:ProfileProps) {
    console.log(props);
    return(<div className="StaticProfile">
        <h1>User Profile</h1>
        <ProfileInformation user={props.user} facilities={props.facilities}/>
        {FacilityInformation}
    </div>);
}

export default StaticProfile;