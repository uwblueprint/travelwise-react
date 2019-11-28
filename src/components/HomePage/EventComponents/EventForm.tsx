import React, { Component } from 'react';

type props = { title: string, date: string, time:string, id: string }

class EventForm extends Component<props,{}> {
    render() {
        const {id, date, time, title} = this.props;
        return (
            <div className="event-obj" id={id}>
                <div className="event-date">{date}</div>
                <div className="event-row">
                    <div className="event-time">{time}</div>
                    <div className="event-title">{title}</div>
                </div>
            </div>
        );
    }
}

export default EventForm;