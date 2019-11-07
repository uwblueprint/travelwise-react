import React, { Component } from 'react';

//https://www.npmjs.com/package/react-calendar
import Calendar from 'react-calendar';
import './events.css';

type state = {events: Array<any>, admin:boolean}
type props = {admin: boolean}

class EventsView extends Component<props,state> {
    constructor(props: any) {
        super(props);
        this.state = {
            admin: this.props.admin,
            events: []
        }
    }

    render() {
        const {events, admin} = this.state;
        let eventsList;

        // change title and hyperlink if admin

        if (events.length != 0) {
            // map to objects
            eventsList = 
            <div>
                a bunch of events
            </div>
        } else {
            eventsList = 
            <div className="empty-events">
                There are no upcoming events.
            </div>
        }

        return (
            <div className="upcoming-container">
                <Calendar className="calendar"/>
                <div className="upcoming-events-container">
                    <div className="title-two">Upcoming Events</div>
                    {eventsList}
                    <div className="event-btn-container">
                        <a className="events-btn" href="">View All Events</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default EventsView;