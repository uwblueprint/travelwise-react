import React, { Component } from 'react';
import { Form, Icon, Button } from 'semantic-ui-react';

import './News.css';

type state = {title: string, description: string, img: string, subtitle: string}
type props = {onSave: any}

class CreatePost extends Component<props, state> {
    constructor(props: any) {
        super(props);
        this.state = {
            title: '',
            description: '',
            img: '',
            subtitle: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleDescChange = this.handleDescChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        e.preventDefault();
        this.setState({[e.target.name]: e.target.value} as any);
    }

    handleDescChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
        e.preventDefault();
        this.setState({description: e.target.value})
    }

    handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        this.props.onSave({...this.state});
        this.setState({
            title: '',
            description: '',
            img: '',
            subtitle: ''
        });
    }

    render() {
        const {title, description} = this.state;
        return (
            <div>
                <Form className="post-form" onSubmit={this.handleSubmit}>
                    <Form.Field>
                        <input
                            className="text-input title-input"
                            name="title" type="text" value={title}
                            placeholder="Title" onChange={this.handleChange}
                        />
                    </Form.Field>
                    <Form.Field>
                        <textarea 
                            className="text-input description-input"
                            name="description" value={description}
                            placeholder="What do you want to share to Champions?"
                            onChange={this.handleDescChange} 
                        />
                    </Form.Field>
                    <div className="button-container">
                        <button className="post-btn">file image outline</button>
                        <Button className="submit-post" type="submit">Create Post</Button>
                    </div>
                </Form>
            </div>
        );
    }
}

export default CreatePost;