import React, { Component } from 'react';

type props = { title: string, date: string, startTime: string, details: string, id: string }

class NewsPost extends Component<props,{}> {
    render() {
        const {id, date, startTime, title, details} = this.props;
        return (
            <div className="event-obj" id={id}>
                <div className="event-date">{date}</div>
                <div className="event-row">
                    <div className="event-time">{startTime}</div>
                    <div className="event-title">{title}</div>
                </div>
            </div>
        );
    }
}

export default NewsPost;