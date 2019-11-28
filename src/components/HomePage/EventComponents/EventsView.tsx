import React, { Component } from 'react';

//https://www.npmjs.com/package/react-calendar
import Calendar from 'react-calendar';
import Event from './Event';
import './events.css';

type state = {events: Array<any>, admin: boolean, nextId: number}
type props = {admin: boolean}

class EventsView extends Component<props,state> {
    constructor(props: any) {
        super(props);
        this.state = {
            admin: this.props.admin,
            events: [
                {
                    id: 1,
                    title: 'eventone',
                    details: 'asodfijaisdjf',
                    date: 'asdiofasdfj',
                    startTime: '12pm'
                },
                {
                    id: 2,
                    title: 'eventtwo',
                    details: 'asodfijaisdjf',
                    date: 'asdiofasdfj',
                    startTime: '2pm'
                }
            ],
            nextId: 3
        }
    }

    render() {
        const {events, admin} = this.state;
        let eventHeader, eventsList, buttonPanel;

        // change title and hyperlink if admin
        if (admin) {
            eventHeader = <div className="title-two">Scheduled Events</div>
            buttonPanel = <div className="event-btn-container">
                <a className="events-btn" href="">View All Events</a>
                <a className="events-btn" href="">Create New Event</a>
            </div>
        } else {
            eventHeader = <div className="title-two">Upcoming Events</div>
            buttonPanel = <div className="event-btn-container">
                <a className="events-btn" href="">View All Events</a>
            </div>
        }

        if (events.length != 0) {
            eventsList = this.state.events.map((element) => {
                return (<Event key={element.id} {...element} />);
            });
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
                    {eventHeader}
                    {eventsList}
                    {buttonPanel}
                </div>
            </div>
        );
    }
}

export default EventsView;