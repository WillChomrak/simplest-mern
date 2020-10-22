import React, { Component } from 'react';
import axios from 'axios';

export default class createUser extends Component {
    constructor(props) {
        super(props);

        this.onChangeUser = this.onChangeUser.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            user: ''
        }
    }
    onChangeUser(e) {
        this.setState({
            user: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const storeOne = {
            username: this.state.user
        }
        axios.post('http://localhost:5000/one/add', storeOne)
        .then(res => console.log(res.data));
    }

    render() {
        return (
            <div>
                <h3>Create a new User</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>User: </label>
                        <input type="text" 
                        required 
                        className="form-control" 
                        value={this.state.user} 
                        onChange={this.onChangeUser} 
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Submit" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}
