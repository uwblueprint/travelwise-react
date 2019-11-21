import React from 'react';
import {ProfileProps, userProps} from '../components/ProfilePage/Common';
import EditableProfile from '../components/ProfilePage/EditProfilePage';
import StaticProfile from '../components/ProfilePage/StaticProfilePage';
import {saveState, loadState} from '../components/ProfilePage/LocalStorage';


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
    }

    render(){
        const editable = this.state.editable;
        let display;
        let button;

        if(editable){
            display = <EditableProfile state={this.state} onSave={this.updateState}/>;
        } else {
            display = <StaticProfile user={this.state.userInfo.user} facilities={this.state.userInfo.facilities}/>;
            button = <button className="ProfilePage" onClick={this.toggleEdit}>Edit</button>
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