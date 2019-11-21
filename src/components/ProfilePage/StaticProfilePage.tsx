import React from 'react';
import {ProfileProps} from './Common';
import './css/ProfilePage.css';

// TODO
function FacilityInformation(props:ProfileProps){
    return (
    <div className="profileInfo">
        <p><b>Number of Offices</b> <br /> {props.facilities.numOffices}</p>
    </div>
);}

function ProfileInformation(props:ProfileProps) {
    return(
    <div className="profileInfo">
        <p><b>Champion Name</b> <br /> {props.user.champName} </p>
        <p><b>Company Name</b> <br /> {props.user.compName} </p>
        <p><b>Company Address</b> <br /> {props.user.streetAddress}, {props.user.city}, {props.user.postalCode}</p>
        <p><b>Company Phone Number</b> <br /> ({props.user.phoneNumber.substr(0, 3)})-{props.user.phoneNumber.substr(3, 3)}-{props.user.phoneNumber.substr(6)}</p>
        <p><b>Email Address</b> <br /> {props.user.email}</p>
    </div>
);}

function StaticProfile(props:ProfileProps) {
    return(<div className="StaticProfile">
        <h1>User Profile</h1>
        <ProfileInformation user={props.user} facilities={props.facilities}/>
        <h1>Facility Information</h1>
        <FacilityInformation user={props.user} facilities={props.facilities}/>
    </div>);
}

export default StaticProfile;