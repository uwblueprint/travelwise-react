import React, { Component } from 'react';
import DonutChart from 'react-d3-donut';
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

import './HomePage.css';
import CreatePost from './NewsComponents/CreatePost';
import EventsView from './EventComponents/EventsView';

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
        let adminFeed, newsfeed;
        if (admin) {
            adminFeed = 
            <div>
                <div className="section-header">Create a Post</div>
                <CreatePost onSave={this.handleSave} />
                <div className="section-header">Active Posts</div>
            </div>
            // don't show score container
        } else {
            adminFeed = 
            <div>
                <div className="section-header">Newsfeed</div>
            </div>
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
                    {adminFeed}
                    <div className="newsfeed-content">
                        {newsfeed}
                    </div>
                </div>
                <div className="score-container">
                    <div className="section-header">Your Score</div>
                    <div className="score-content">
                    <DonutChart
                        innerRadius={45}
                        outerRadius={60}
                        transition={false}
                        svgClass="score"
                        pieClass="score-donut"
                        displayTooltip={false}
                        strokeWidth={3}
                        data={[
                            {
                                count: 7,  
                                color: 'lightgreen'  
                            },
                            {
                                count: 3,
                                color: 'white'
                            }
                        ]} 
                    />
                    </div>
                </div>
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