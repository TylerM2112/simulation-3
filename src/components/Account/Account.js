import React, { Component } from 'react';
import './Account.css';

export default class Account extends Component {
    render() {
        const { picture, name, email, amount, id } = this.props;
        return (
            <div className="account">
                <h1>Account</h1>
                <img src={picture} alt="profile"/>
                <div><span className="bold">Name</span>: {name}</div>
                <div><span className="bold">Email</span>: {email}</div>
                <div><span className="bold">Amount</span>: {amount}</div>
                <div><span className="bold">ID</span>: {id}</div>
            </div>    
        );
    }
}
