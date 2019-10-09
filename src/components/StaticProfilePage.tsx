import React from 'react';
import {ProfileProps} from './Common';
import {ProfileControl} from './ProfilePage';
import {saveState} from './LocalStorage';

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
    console.log(props);
    return(<div>
        <h1>Test Profile Page</h1>
        <ProfileInformation user={props.user} facilities={props.facilities}/>
        {FacilityInformation}
    </div>);
}

export default StaticProfile;