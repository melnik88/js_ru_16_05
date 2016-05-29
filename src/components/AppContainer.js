import React, { Component, PropTypes } from 'react'
import ArticleList from './ArticleList'
import subscribeToArticleStore from '../decorators/subscribeToArticleStore'
import subscribeToCommentStore from '../decorators/subscribeToCommentStore'

class AppContainer extends Component {

    render() {
        return <ArticleList articles={this.props.articles} />
    }
}

export default subscribeToCommentStore(subscribeToArticleStore(AppContainer))