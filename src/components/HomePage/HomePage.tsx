import React, { Component } from 'react';
import DonutChart from 'react-d3-donut';
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

import './HomePage.css';
import CreatePost from './NewsComponents/CreatePost';

type state = {admin: boolean}

class LandingPage extends Component<{}, state> {
    constructor(props: any) {
        super(props);
        this.state = {
            admin: true
        }
    }

    render () {
        const {admin} = this.state;
        let newsfeed;
        if (admin) {
            newsfeed = 
            <div>
                <div className="section-header">Create a Post</div>
                <CreatePost />
                <div className="section-header">Active Posts</div>
            </div>
        } else {
            newsfeed = 
            <div>
                <div className="section-header">Newsfeed</div>
            </div>
        }

        return (
            <div className="homepage-container">
                {/** TODO: break into components */}
                <div className="newsfeed-container">
                    {newsfeed}
                    <div className="newsfeed-content">
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
                    </div>
                </div>
            </div>
        )
    }
}

export default LandingPage;