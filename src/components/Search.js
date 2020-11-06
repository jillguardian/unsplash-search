import React from 'react'

export default class Search extends React.Component {

    state = {
        term: ''
    }

    onSearch = (event) => {
        event.preventDefault();
        this.props.onSearch(this.state.term);
    }

    render() {
        return (
            <form onSubmit={this.onSearch}>
                <div className="ui search focus">
                    <div className="ui icon big input">
                        <input className="prompt"
                               type="text"
                               placeholder="Enter keyword"
                               autoComplete="off"
                               onChange={e => this.setState({term: e.target.value})}
                               value={this.state.term}/>
                        <i className="search icon"/>
                    </div>
                </div>
            </form>
        );
    }

}