import React from 'react';

const Images = (props) => {

    return (
        <div className="ui link cards">
            {props.images.map(image => <Image key={image.id} {...image} />)}
        </div>
    );

}

export default Images;

const DATE_OPTIONS = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
};

const Image = (props) => {
    const dateCreated = new Date(props.created_at);
    return (
        <div className="card">
            <div className="image">
                <img src={props.urls.thumb} alt={props.description}/>
            </div>
            <div className="content">
                <div className="header">{props.description}</div>
                <div className="meta">
                    <a href={props.user.portfolio_url}>{props.user.name}</a>
                </div>
            </div>
            <div className="extra content">
                <span className="right floated">{dateCreated.toLocaleDateString('en-US', DATE_OPTIONS)}</span>
                <span className="left floated"><i className="heart icon"/>{props.likes}</span>
            </div>
        </div>
    );

}