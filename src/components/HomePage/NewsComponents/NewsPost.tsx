import React, { Component } from 'react';

type props = { title: string, img: string, subtitle:string, description: string, id: string }

class NewsPost extends Component<props,{}> {
    render() {
        const {title, img, subtitle, description, id} = this.props;
        return (
            <div id={id}>
                <h1>{title}</h1>
                <img src={img} alt={title} />
                <i>{subtitle}</i>
                <p>{description}</p>
            </div>
        );
    }
}

export default NewsPost;