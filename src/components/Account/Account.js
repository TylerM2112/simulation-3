import React, { Component } from 'react';
import './Account.css';

export default class Account extends Component {
    render() {
        const { picture, name, email,  id } = this.props;
        return (
            <div className="profile-dashboard-container">
                <div className="dashboard-content-container"> 
                    <div className="user-text-container">    
                        <div className="user-container">    
                            <img src={picture} alt="profile" />
                            <div className="name-button-container">
                                <h1>{name}</h1>
                            <button className="profile-edit-button">Edit Profile</button>
                            </div>
                        </div>
                        <div className="dashboard-text-box">
                            <p>Welcome to Helo! Find recommended friends based on your similarities, and even search for them by   name. The more you update your profile, the better recommendations we can make!</p>
                        </div>
                    </div>    
                    <div>
                        <div className="recommended-friends-container">
                            <div className="title-sort-container">    
                            <div className="recommended-text">    
                                <h1>Recommended Friends</h1>
                            </div>    
                            <div className="sort-selector">
                                <label for="sortBy">Sorted by</label>
                                <select name="sortBy">
                                <option value="firstName">First Name</option>
                                <option value="lastName">Last Name</option>
                                </select>
                                </div>
                            </div> 
                            <div className="recommendation-list">No recommendations</div>
                        </div>
                    </div>
                </div>    
            </div>    
        );
    }
}


// <h1>Account</h1>
//                 <img src={picture} alt="profile"/>
//                 <div><span className="bold">Name</span>: {name}</div>
//                 <div><span className="bold">Email</span>: {email}</div>
//                 <div><span className="bold">ID</span>: {id}</div>