import React, { Component } from 'react';
import axios from 'axios';

const User = props => (
    <p>{props.user}</p>
)

export default class userList extends Component {
    constructor(props) {
        super(props);

        this.state = {users: []}
    }
    componentDidMount() {
        axios.get('http://localhost:5000/one')
        .then(response => {
            console.log(response.data)
            if (response.data.length > 0) {
                this.setState({
                    users: response.data
                })
            }
        })
    }

    userList() {
        return this.state.users.map(currentUser => {
            return <User user={currentUser.username} key={currentUser._id} />;
        })
    }
    
    render() {
        return (
            <div>
                <h1>Hey whats up hope this works</h1>
                {this.userList()}
            </div>
        )
    }
}
