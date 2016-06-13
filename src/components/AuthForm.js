import React, { Component, PropTypes } from 'react'
import { browserHistory } from 'react-router'

class AuthForm extends Component {
    state = {
        userName: ''
    };

    render() {
        return (
            <form onSubmit = {this.handleSubmit}>
                Enter your name:
                <input value = {this.state.userName} onChange = {this.handleChange('userName')} />
                <input type="submit" value="ok" />
            </form>
        )
    }

    handleChange = input => ev => {
        this.setState({
            [input]: ev.target.value
        })
    }

    handleSubmit = (ev) => {
        ev.preventDefault();
        if(this.state.userName) {
            this.props.switchUser();
            browserHistory.push('/articles/new');
        }

        this.setState({
            userName: ''
        })
    }
}

export default AuthForm