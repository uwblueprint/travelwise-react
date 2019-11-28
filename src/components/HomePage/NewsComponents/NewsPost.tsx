import React, { Component } from 'react';

type props = { title: string, img: string, subtitle: string, description: string, author: string, datetime: string, id: string }

class NewsPost extends Component<props,{}> {
    render() {
        const {title, img, subtitle, description, author, datetime} = this.props;
        if (img === '') {
            return (
                <div>
                    <h1>{title}</h1>
                    <p>Created by {author} on {datetime}.</p>
                    <p>{description}</p>
                </div>
            );
        }
        // format images
        return (
            <div>
                <h1>{title}</h1>
                <img src={img} alt={title} />
                <i>{subtitle}</i>
                <div>{description}</div>
            </div>
        );
    }
}

export default NewsPost;