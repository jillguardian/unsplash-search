import React from 'react'
import { asyncSearchPhotosOf } from "../api/unsplash";
import Images from "./Images";
import Search from "./Search";

export default class App extends React.Component {

    state = {
        images: []
    }

    onSearch = async (term) => {
        const images = await asyncSearchPhotosOf(term);
        this.setState( { images: images } )
    }

    render() {
        return (
            <div className="ui container">
                <div className="ui equal width center aligned padded grid">
                    <div className="row">
                        <div className="column">
                            <Search onSearch={this.onSearch} />
                        </div>
                    </div>
                </div>
                <Images images={this.state.images} />
            </div>
        )
    }

}