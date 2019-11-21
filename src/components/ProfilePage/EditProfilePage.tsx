import React from 'react';
import {ProfileProps, userProps} from './Common';
import {ProfileControl} from '../../pages/ProfilePage';

// TODO: figure out how pws are being stored + add functionality to change it???

type editProps ={
    state: ProfileControl['state'],
    onSave: (user:ProfileProps) => void
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
        var facilities = this.state.facilities;

        user[name] = value;
        facilities[name] = value;
        this.setState({user: user});
        this.setState({facilities: facilities});
    }

    handleSubmit(event:React.FormEvent<HTMLFormElement>){
        this.setState({value: event.currentTarget.value});
        if(this.validateForm()){
            // save state to local storage
            this.props.onSave(this.state);
            console.log(userProps);
        }
        event.preventDefault();
    }

    /**
    * Executes the validation rules for all the fields on the form and sets the error state
    * @returns {boolean} - Whether the form is valid or not
    */
    private validateForm(): boolean {
        if(this.state.user.champName === ""){
            alert("Name must be filled out");
            return false;
        }
        if(this.state.user.compName === ""){
            alert("Company Name must be filled out");
            return false;
        }
        if(this.state.user.streetAddress === "" ||
           this.state.user.city === "" ||
           this.state.user.postalCode === ""){
            alert("Address must be filled out");
            return false;
        }
        if(!this.validatePhoneNumber(this.state.user.phoneNumber)){
            alert("Phone Number must be correctly filled out");
            return false;
        }
        if(!this.validateEmail(this.state.user.email)){
            alert("Email must be correctly filled out");
            return false;
        }
        return true;
    }

    private validateEmail(email: string) : boolean{
        var re = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
        return re.test(email);
    }

    private validatePhoneNumber(phoneNumber: string) : boolean{
        if(phoneNumber.length !== 10){
            return false;
        }

        for (var i=0; i < phoneNumber.length; i++){
            if(phoneNumber.charAt(i) < '0' || phoneNumber.charAt(i) > '9'){
                return false
            }
        }

        return true;
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    <b>Champion Name</b> <br />
                    <input name="champName" type="text" value={this.state.user.champName} onChange={this.handleUserChange} placeholder="Champion Name"/>
                </label>
                <br/>
                <label>
                    <b>Company Name</b> <br />
                    <input name="compName" type="text" value={this.state.user.compName} onChange={this.handleUserChange} placeholder="Company Name"/>
                </label>
                <br/>
                <label>
                    <b>Address</b> <br />
                    <input name="address" type="text" defaultValue={this.state.user.streetAddress} onChange={this.handleUserChange} placeholder="Street Address"/>
                    <span className="Inline">
                        <input name="city" type ="text" value={this.state.user.city} onChange={this.handleUserChange} placeholder="City"/>
                        <input name="postalCode" type="text" value={this.state.user.postalCode} onChange={this.handleUserChange} placeholder="Postal Code"/>
                    </span>
                </label>
                <br/>
                <label>
                    <b>Phone Number</b> <br />
                    <input name="phoneNumber" type="text" value={this.state.user.phoneNumber} onChange={this.handleUserChange} placeholder="(xxx)-xxx-xxxx"/>
                </label>
                <br/>
                <label>
                    <b>Email</b> <br />
                    <input name="email" type="text" value={this.state.user.email} onChange={this.handleUserChange} placeholder="email@example.com"/>
                </label>
                <br/>
                <label>
                    <b>Number of Offices</b> <br />
                    <input name="numOffices" type="text" value={this.state.facilities.numOffices} onChange={this.handleUserChange} placeholder="Number of Offices"/>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        );
    }
}

// reference: https://reactjs.org/docs/forms.html
function EditableProfile(props:editProps){
    return (
        <div className="EditProfile">
            <h1>Profile Settings</h1>
            <NameForm state={props.state} onSave={props.onSave}/>
        </div>
    );
};

export default EditableProfile;