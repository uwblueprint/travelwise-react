import React from 'react';
import {ProfileProps, userProps} from './Common';
import EditableProfile from './EditProfilePage';
import StaticProfile from './StaticProfilePage';
import {saveState, loadState} from './LocalStorage';


type State = Readonly<{editable:boolean, userInfo:ProfileProps}>;

class ProfileControl extends React.Component<ProfileProps>{
    readonly state: State;

    public static defaultProps = userProps;
    private load = true;

    constructor(props:ProfileProps){
        super(props);
        let user = loadState();
        this.toggleEdit = this.toggleEdit.bind(this);
        this.updateState = this.updateState.bind(this);
        this.render = this.render.bind(this);
        this.state = {editable: false, userInfo: user as ProfileProps};
        if(!this.state.userInfo.hasOwnProperty("user")){
            this.state = {editable: false, userInfo: props};
        }else {
            
        }
        
        console.log(this.state);
    }

    updateState(user: ProfileProps){
        if(this.state.editable){
            saveState({userInfo: user});
            this.setState({editable: this.state.editable, userInfo: user});
            this.toggleEdit();
        }
    }

    toggleEdit(){
        this.setState({editable: !this.state.editable});
        console.log("editing!");
    }

    render(){
        const editable = this.state.editable;
        let display;
        let button;

        if(editable){
            display = <EditableProfile state={this.state} onSave={this.updateState}/>;
            console.log(userProps);
            // this.setState({userInfo: userProps});
        } else {
            console.log(this.state);
            display = <StaticProfile user={this.state.userInfo.user} facilities={this.state.userInfo.facilities}/>;
            button = <button className="ProfilePage" onClick={this.toggleEdit}>Edit</button>
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

const ProfilePage: React.FC = () => {
    return <ProfileControl user={userProps.user} facilities={userProps.facilities}/>;
}

export default ProfilePage;
export {ProfileControl};