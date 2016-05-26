import React, { PropTypes, Component } from 'react'
import CommentList from './CommentList'

class Article extends Component {
    state = {
        isOpen: false
    };

    render() {
        const { article } = this.props;
        if (!article) return <h3>No article</h3>;
        const { title, text, id, comments } = article;
        const { isOpen } = this.state;

        const commentList = comments && comments.length ? <CommentList comments = {comments} />  : null;

        const textItem = isOpen ? <section>{text} {commentList}</section> : null;

        return (
            <div>
                <h3 onClick = {this.handleClick}>{title}</h3>
                {textItem}
            </div>
        )
    }

    handleClick = (ev) => {
        this.setState({
            isOpen : !this.state.isOpen
        })
    }
}


Article.propTypes = {
    article: PropTypes.shape({
        title: PropTypes.string.isRequired,
        text: PropTypes.string,
        id: PropTypes.string.isRequired,
        comments: PropTypes.array
    })
}

export default Article