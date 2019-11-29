import React, { Component } from 'react';
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

import './HomePage.css';
import CreatePost from './NewsComponents/CreatePost';
import EventsView from './EventComponents/EventsView';
import ScoreView from './ScoreComponents/ScoreView';
import NewsPost from './NewsComponents/NewsPost';

type state = {admin: boolean, posts: Array<any>, nextId: number}

class LandingPage extends Component<{}, state> {
    constructor(props: any) {
        super(props);
        this.state = {
            admin: true,
            posts: [
                {
                    id: 1,
                    title:'Post 1',
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    author: 'TravelWise',
                    img: '',
                    subtitle: '',
                    datetime: 'Jul 19, 2019, 8:00pm EST'
                },
                {
                    id: 2,
                    title:'Post 2',
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    author: 'TravelWise',
                    img: '',
                    subtitle: '',
                    datetime: 'Aug 9, 2019, 2:00pm EST'
                }
            ],
            nextId: 3
        }

        this.handleSave = this.handleSave.bind(this);
    }

    async loadPosts() {
        // query
        let response;
    }

    // needs to add an ID
    async handleSave(post: any) {
        let date = new Date();
        let newObj = {
            id: this.state.nextId,
            title: post.title,
            description: post.description,
            img: post.img,
            subtitle: post.img,
            author: 'TravelWise',
            datetime: date.getMonth() + "-" +  date.getDate() + "-" + date.getUTCFullYear()
        }
        // save to DB

        this.setState({ 
            posts: [newObj, ...this.state.posts],
            nextId: newObj.id+1
        });
    }

    componentDidMount(){
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

        } else {
            newsHeader = 
            <div>
                <div className="section-header">Newsfeed</div>
            </div>
            score = <ScoreView/>
        }

        if (posts.length != 0){
            newsfeed = this.state.posts.map((element) => {
                return (<NewsPost key={element.id} {...element} />)
            });
            
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
                {score}
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