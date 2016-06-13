import React, { Component, PropTypes } from 'react'
import Navigation from '../containers/Navigation'
import { Link } from 'react-router'

class ArticlesRoot extends Component {

    state = {
        user: null
    };

    static propTypes = {

    };

    static childContextTypes = {
        user: PropTypes.string,
        switchUser: PropTypes.func
    }

    switchUser = (ev) => {
        this.setState({
            user: 'Other User'
        })
    }

    getChildContext() {
        return {
            user: this.state.user,
            switchUser: this.switchUser
        }
    }

    render() {
        return (
            <div>
                <h1>News app: Articles</h1>
                <Link to="/articles/new">New article</Link>
                <Navigation />
                {this.props.children}
            </div>
        )
    }
}

export default ArticlesRoot