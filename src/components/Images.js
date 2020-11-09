import React from 'react';
import './Images.css';

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

class Image extends React.Component {

    constructor(props) {
        super(props);
        this.ref = React.createRef();
        this.state = {spans: 0};
    }

    render() {
        const {description, urls} = this.props;
        return (
            <a href={urls.raw}
               className="ui medium image"
               target="_blank"
               rel="noreferrer"
               style={{
                   gridRowEnd: `span ${this.state.spans}`
               }}>
                <img ref={this.ref}
                     className="ui medium rounded image"
                     src={urls.thumb}
                     alt={description} />
            </a>
        );
    }

    componentDidMount() {
        const current = this.ref.current;
        current.addEventListener('load', this.setGridSpan);
    }

    setGridSpan = () => {
        const current = this.ref.current;
        const height = current.clientHeight;
        console.log(`${this.props.description}: ${height}`);

        const spans = Math.ceil(height / 10);
        this.setState({spans: spans});
    }

}