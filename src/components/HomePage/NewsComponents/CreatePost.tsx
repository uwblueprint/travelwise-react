import React, { Component } from 'react';
import { TextArea, Button, Form } from 'semantic-ui-react';

type state = {title: string, description: string, img: string, subtitle: string}

class CreatePost extends Component<{}, state> {
    constructor(props: any) {
        super(props);
        this.state = {
            title: '',
            description: '',
            img: '',
            subtitle: ''
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        e.preventDefault();
        this.setState({[e.target.name]: e.target.value} as any);
        console.log(this.state)
    }

    render() {
        const {title, description} = this.state;
        return (
            <div>
                <Form className="post-form">
                    <Form.Field>
                        <input
                            name="title" type="text" value={title}
                            placeholder="Title" onChange={this.handleChange}
                        />
                    </Form.Field>
                    <Form.Field>
                        <input 
                            name="description" type="text" value={description}
                            placeholder="What do you want to share to Champions?" 
                            onChange={this.handleChange}
                        />
                    </Form.Field>
                    <button></button>
                    <button></button>
                    <button>Create Post</button>
                </Form>
            </div>
        );
    }
}

export default CreatePost;