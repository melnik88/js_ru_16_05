import React, { Component, PropTypes } from 'react'
import Navigation from '../containers/Navigation'

class ArticlesRoot extends Component {
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