import React from 'react';
import {ProfileProps, userProps} from './Common';
import {ProfileControl} from './ProfilePage';
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

type editProps ={
    state: ProfileControl['state']
}

class NameForm extends React.Component<editProps>{
    readonly state: ProfileProps;

    constructor(props:editProps){
        super(props);

        this.handleUserChange = this.handleUserChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.render = this.render.bind(this);
        this.state = props.state.userInfo;
    }

    handleUserChange(event:React.ChangeEvent<HTMLInputElement>){
        const name = event.target.name;
        const value = event.target.value;
        var user = this.state.user;

        user[name] = value;
        this.setState({user: user});
    }

    handleSubmit(event:React.FormEvent<HTMLFormElement>){
        this.setState({value: event.currentTarget.value});
        if(this.validateForm()){
            // TODO: update DB and profile page data
            this.setState({champName: this.state.user.champName });
            console.log(userProps);
        }
    }

    /**
    * Executes the validation rules for all the fields on the form and sets the error state
    * @returns {boolean} - Whether the form is valid or not
    */
    private validateForm(): boolean {
        // TODO: validate form
        return true;
    }

    // TODO: default txt colour grey, then change to black when input

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Champion Name 
                    <input name="champName" type="text" value={this.state.user.champName} onChange={this.handleUserChange}/>
                </label>
                <br/>
                <label>
                    Company Name 
                    <input name="compName" type="text" value={this.state.user.compName} onChange={this.handleUserChange}/>
                </label>
                <br/>
                <label>
                    Address 
                    <input name="address" type="text" value={this.state.user.address} onChange={this.handleUserChange}/>
                </label>
                <br/>
                <label>
                    Phone Number 
                    <input name="phoneNumber" type="text" value={this.state.user.phoneNumber} onChange={this.handleUserChange}/>
                </label>
                <br/>
                <label>
                    Email 
                    <input name="email" type="text" value={this.state.user.email} onChange={this.handleUserChange}/>
                </label>
                <br/>
                <input type="submit" value="Submit"/>
            </form>
        );
    }
}

// reference: https://reactjs.org/docs/forms.html
function EditableProfile(props:editProps){
    return (
        <div className="editProfile">
            <h1>Edit Profile</h1>
            <NameForm state={props.state}/>
        </div>
    );
};

export default EditableProfile;