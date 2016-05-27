import React, { PropTypes, Component } from 'react'
import Article from './Article'
import toggleItem from '../decorators/toggleItem'

class ArticleList extends Component {

    render() {
        const { articles, openedItemId, openItem } = this.props;
        const articleItems = articles.map((article) => <li key={article.id}> <Article article = {article} isOpen = {article.id == openedItemId} toggleOpen = {openItem(article.id)}/></li>);

        return <ul>{articleItems}</ul>
    }
}

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired
}

export default toggleItem(ArticleList)