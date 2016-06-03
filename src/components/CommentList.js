import React, { PropTypes, Component as ReactComponent} from 'react'
import Comment from './Comment'
import AddComment from './AddComment'
import { loadAllComments } from '../AC/comments'
import { commentStore } from '../stores'

class CommentList extends ReactComponent {
	state = {
		isOpen: false
	};

	render() {
		const { articleId, commentsIdsArray } = this.props;
		const { isOpen } = this.state;

		let comments = [];
		commentsIdsArray.forEach((id) =>{
			let item = commentStore.getById(id);
			if (item) {
				comments.push(item);
			}
		})


		const commentItems = isOpen ? comments.map((comment) => <li key = {comment.id}><Comment comment = {comment}/>
		</li>) : null;

		return <div>
			<h4 class='title' onClick = {this.handleClick} >Comments</h4>
			<AddComment articleId = {articleId}/>
			<br/>
			<ul>{commentItems}</ul>
		</div>
	}

	handleClick = (ev) => {
		this.setState({isOpen: !this.state.isOpen});
		loadAllComments({articleId: this.props.articleId});
	}
}

CommentList.propTypes = {
	commentsIdsArray: PropTypes.array.isRequired
};

export default CommentList