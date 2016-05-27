import React, { PropTypes, Component } from 'react'
import CommentList from './CommentList'
import toggleOpen from '../decorators/toggleOpen'

class Article extends Component {
    render() {
        const { article, isOpen, toggleOpen } = this.props;

        if (!article) return <h3>No article</h3>;
        const { title, text, id, comments } = article;

        const commentList = comments && comments.length ? <CommentList comments = {comments} />  : null;

        const textItem = isOpen ? <section>{text} {commentList}</section> : null;

        return (
            <div>
                <h3 onClick = {toggleOpen}>{title}</h3>
                {textItem}
            </div>
        )
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