import React, { Component } from 'react';
import { Modal } from 'semantic-ui-react';

//https://www.npmjs.com/package/react-calendar
import Calendar from 'react-calendar';
import Event from './Event';
import EventForm from './EventForm';
import './events.css';

type state = {events: Array<any>, admin: boolean, nextId: number, showForm: boolean}
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
                    startTime: '2-4-2019 12pm',
                    endTime: '2-4-2019 2pm'
                },
                {
                    id: 2,
                    title: 'eventtwo',
                    details: 'asodfijaisdjf',
                    date: 'asdiofasdfj',
                    startTime: '2-4-2019 1pm',
                    endTime: '2-4-2019 2pm'
                }
            ],
            nextId: 3,
            showForm: false
        }

        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }

    async loadEvents() {
        // query
        let response;
    }

    async handleSave(event: any) {
        let newEvent = {
            id: this.state.nextId,
            title: event.title,
            details: event.details,
            start: event.startTime,
            end: event.endTime
        }
        // add to calendar
        // save to DB

        this.setState({ 
            // organize by upcoming date
            events: [newEvent, ...this.state.events],
            nextId: newEvent.id+1
        });
    }

    handleOpenModal(){
        this.setState({ showForm: true });
    }
    
    handleCloseModal(){
        this.setState({ showForm: false });
    }

    componentDidMount(){
        this.loadEvents();
    }

    render() {
        const {events, showForm, admin} = this.state;
        let eventHeader, eventsList, buttonPanel;

        // change title and hyperlink if admin
        if (admin) {
            eventHeader = <div className="title-two">Scheduled Events</div>
            buttonPanel = <div className="event-btn-container">
                <a className="events-btn" href="">View All Events</a>
                <Modal 
                    trigger={<a className="events-btn" onClick={this.handleOpenModal}>Create New Event</a>}
                    centered={true}
                    open={this.state.showForm}
                    basic
                    size='large'
                >
                    <EventForm
                        onSave={this.handleSave} 
                        onClose={this.handleCloseModal}
                    />
                </Modal>  
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