import React, { Component } from 'react';
import Account from '../Account/Account';
import axios from 'axios';
import { connect } from 'react-redux';
import { fetchData } from '../../redux/reducer';

class AccountContainer extends Component {
    constructor() { 
        super();
        this.state = {
            loading: false,
            message: null,
        };
    }

    componentDidMount() {
        this.setState({ loading: true });
        axios.get('/api/user-data').then(response => {
            console.log('HERE', response)
            this.setState({
                loading: false
            });
            this.props.fetchData(response.data.user);
        }).catch(error => {
            this.setState({
                message: 'You are unauthorized',
                loading: false
            });
        });
    }
    
    render() {
        const { loading, message } = this.state;
        const { user } = this.props;
        return (
            <div className="account-container">
                {loading && <div>Loading...</div>}
                {user &&
                    <Account
                        name={user.name}
                        email={user.email}
                        picture={user.picture}
                        id={user.auth0_sub}
                        amount={Math.floor(100 + Math.random() * 100)}
                    />
                }    
                {message && <div>{ message }</div>}
            </div>
        );
    }
}

const mapStateToProps = state => { 
    return {
        user: state.user
    };
}

const mapDispatchToProps = {
    fetchData: fetchData
}

const connector = connect(mapStateToProps, mapDispatchToProps);
const connectedAccountContainer = connector(AccountContainer);
export default connectedAccountContainer;
// export default connect(mapStateToProps)(AccountContainer);