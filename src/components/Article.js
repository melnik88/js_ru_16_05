import React, { PropTypes, Component } from 'react'
import CommentList from './CommentList'
import toggleOpen from '../decorators/toggleOpen'
import { deleteArticle } from '../AC/articles'
import { commentStore } from '../stores'

class Article extends Component {
    render() {
        const { article, isOpen, toggleOpen } = this.props;

        if (!article) return <h3>No article</h3>;
        const { title, text, id, comments:commentsIdArray } = article;
        let comments = commentsIdArray.map((id) => commentStore.getById(id));

        const commentList = comments && comments.length ? <CommentList comments = {comments} />  : null;

        const textItem = isOpen ? <section>{text} {commentList}</section> : null;

        return (
            <div>
                <h3 onClick = {toggleOpen}>{title}</h3>
                {textItem}
                <a href="#" onClick={this.handleDelete}>delete me</a>
            </div>

        )
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
        id: PropTypes.string.isRequired,
        comments: PropTypes.array
    }),

    //From ToggleOpen
    isOpen: PropTypes.bool.isRequired,
    toggleOpen: PropTypes.func.isRequired

};

export default Article