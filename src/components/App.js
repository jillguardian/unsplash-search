import React from 'react'
import Masonry from "masonry-layout";
import {asyncSearchPhotosOf} from "../api/unsplash";
import Images from "./Images";
import Search from "./Search";

export default class App extends React.Component {

    state = {
        images: []
    }

    onSearch = async (term) => {
        const images = await asyncSearchPhotosOf(term);
        this.setState({images: images})
    }

    render() {
        return (
            <div className="ui container">
                <div className="ui equal width center aligned padded grid">
                    <div className="column">
                        <Search onSearch={this.onSearch}/>
                    </div>
                </div>
                <Images images={this.state.images}/>
            </div>
        )
    }

    componentDidUpdate() {
        let container = document.querySelector('.masonry.grid');
        new Masonry(container, {
            itemSelector: '.column',
            percentPosition: true
        });
    }

}