import React, { Component, PropTypes } from 'react'
import Comment from '../components/Comment'
import connectToStore from '../decorators/connectToStore'
import { loadCommentsByPage} from '../AC/comments'

class CommentContainer extends Component {
    static propTypes = {
        page: PropTypes.string.isRequired,
        comment: PropTypes.object
    };

    render() {
        return (
            <div>
                <Paginator total={total} limit={limit}/>
            </div>
        )
    }
}

function getStateFromProps(stores, props) {
}

export default connectToStore(['comments'], getStateFromProps)(CommentContainer)