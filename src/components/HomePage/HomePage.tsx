import React, { Component } from 'react';
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

import './HomePage.css';
import CreatePost from './NewsComponents/CreatePost';
import EventsView from './EventComponents/EventsView';
import ScoreView from './ScoreComponents/ScoreView';

type state = {admin: boolean, posts: Array<any>}

class LandingPage extends Component<{}, state> {
    constructor(props: any) {
        super(props);
        this.state = {
            admin: true,
            posts: []
        }

        this.handleSave = this.handleSave.bind(this);
    }

    async loadPosts() {
        let response;
    }

    // needs to add an ID
    async handleSave(post: Array<any>) {
        console.log("test");
    }

    componentWillMount(){
        this.loadPosts();
    }

    render () {
        const {admin, posts} = this.state;
        let newsHeader, newsfeed, score;
        if (admin) {
            newsHeader = 
            <div>
                <div className="section-header">Create a Post</div>
                <CreatePost onSave={this.handleSave} />
                <div className="section-header">Active Posts</div>
            </div>
            
            // don't show score container
        } else {
            newsHeader = 
            <div>
                <div className="section-header">Newsfeed</div>
            </div>
            score = <ScoreView/>
        }

        if (posts.length != 0){
            // map to objects
            newsfeed = 
            <div>
                a bunch of posts
            </div>
        } else {
            // should have an image here
            newsfeed =
            <div className="empty-feed">
                There aren't any posts at the moment. Please come back later.
            </div>
        }

        return (
            <div className="homepage-container">
                <div className="newsfeed-container">
                    {newsHeader}
                    <div className="newsfeed-content">
                        {newsfeed}
                    </div>
                </div>
                <ScoreView/>
                <div className="events-container">
                    <div className="section-header">Events</div>
                    <div className="events-content">
                        <EventsView admin={admin}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default LandingPage;