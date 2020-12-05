import React, { Component } from 'react';
import Directory from './Directory';
// import API from '../utils/API';

class DirectorySearch extends Component {
    state = {
        results: []
    }

    componentDidMount() {
        // this.searchDirectory("");
        // eslint-disable-next-line no-unused-expressions
        // () => {
        // API.search()
        // .then(res => this.setState({ results: res }))
        // .catch(err => console.log(err));
        // }
        fetch("https://randomuser.me/api/?results=100")
        .then(res => res.json())
        .then((data) => {
            this.setState({ results: data});
            console.log(data);
        })
        .catch(console.log)
    }

    // searchDirectory = query => {
    //     API.search(query)
    //         .then(res => this.setState({ results: res }))
    //         .catch(err => console.log(err));
    // }

    render() {
    return (
        <div>
           <h1>TESTE</h1>
           <Directory results={this.state.results} />
        </div>
    );
    }
}

export default DirectorySearch;