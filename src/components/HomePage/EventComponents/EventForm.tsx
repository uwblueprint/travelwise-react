import React, { Component } from 'react';
import { Form, Icon, Button } from 'semantic-ui-react';

type state = { title: string, date: string, time: string }
type props = { onSave: any, onClose: any }

class EventForm extends Component<props,state> {
    constructor(props: any) {
        super(props);
        this.state = {
            title: '',
            date: '',
            time: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        this.props.onSave({...this.state});
        this.setState({
            title: '',
            date: '',
            time: '',
        });
    }

    render() {
        const {date, time, title} = this.state;
        return (
            <Form className="events-form" onSubmit={this.handleSubmit}>
                oqpwerkpoqkwpeokx
            </Form>
        );
    }
}

export default EventForm;