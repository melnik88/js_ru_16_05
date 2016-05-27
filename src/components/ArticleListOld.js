var React = require('react'),
    PropTypes = React.PropTypes;
import Article from './Article';
import toggleItem from '../mixins/toggleItem';

var ArticleListOld = React.createClass({
    propTypes: {
        articles: PropTypes.array.isRequired
    },
    mixins: [toggleItem],

    render() {
        const { articles} = this.props;
        const {openedItemId} = this.state;
        const articleItems = articles.map((article) => <li key={article.id}> <Article article = {article} isOpen = {article.id == openedItemId} toggleOpen = {this.openItem(article.id)}/></li>);

        return <ul>{articleItems}</ul>
    }



});

module.exports = ArticleListOld;