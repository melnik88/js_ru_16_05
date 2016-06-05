import React, { PropTypes, Component } from 'react'
import Body from './Body'
import toggleOpen from '../decorators/toggleOpen'
import { deleteArticle } from '../AC/articles'

class Article extends Component {
    render() {
        const { article, isOpen, toggleOpen } = this.props;

        if (!article) return <h3>No article</h3>;
        const { title, text, id, comments:commentsIdArray } = article;

        const textItem = isOpen ? <Body article = {article} />: null;

        return (
            <div>
                <h3 onClick = {toggleOpen}>{title} <a href="#" onClick = {this.handleDelete}>delete me</a></h3>
                {textItem}
            </div>
        )
    }

    componentWillReceiveProps(newProps) {

    }

    handleDelete = (ev) => {
        ev.preventDefault();
        deleteArticle(this.props.article.id)
    }
}

Article.propTypes = {
    article: PropTypes.shape({
        title: PropTypes.string.isRequired,
        text: PropTypes.string,
        id: PropTypes.number.isRequired
    }),

    //From ToggleOpen
    isOpen: PropTypes.bool.isRequired,
    toggleOpen: PropTypes.func

};

export default Article