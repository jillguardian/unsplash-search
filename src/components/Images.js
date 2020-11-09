import React from 'react';

const Images = (props) => {

    return (
        <div className="ui three column doubling stackable masonry grid">
            {props.images.map(image => {
                return (
                    <div className="column" key={image.id}>
                        <Image {...image} />
                    </div>
                );
            })}
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
        <div className="ui fluid card">
            <div className="ui image">
                <img src={props.urls.thumb} alt={props.description}/>
            </div>
            <div className="content">
                <div className="description">{props.description}</div>
                <div className="meta">
                    <a href={props.user.portfolio_url} target="_blank" rel="noreferrer">{props.user.name}</a>
                </div>
            </div>
            <div className="extra content">
                <span className="right floated">{dateCreated.toLocaleDateString('en-US', DATE_OPTIONS)}</span>
                <span className="left floated"><i className="heart icon"/>{props.likes}</span>
            </div>
        </div>
    );

}