import React from 'react';

const Images = (props) => {

    return (
        <div className="images">
            {props.images.map(image => {
                return (
                    <Image key={image.id} {...image} />
                );
            })}
        </div>
    );

}

export default Images;

const Image = (props) => {
    return (
        <a href={props.urls.raw} className="ui medium image" target="_blank" rel="noreferrer">
            <img className="ui medium rounded image" src={props.urls.thumb} alt={props.description} />
        </a>
    );

}