import React, { PropTypes, Component} from 'react'
//import Comment from './Comment'
import Comment from './CommentOld'

class CommentList extends Component {
	state = {
		isOpen: false
	}

	render() {
		const { comments } = this.props;
		const { isOpen } = this.state;
		const commentItems = isOpen ? comments.map((comment) => <li key = {comment.id}><Comment comment = {comment} /></li>): null

		return <div><h4 class='title' onClick = {this.handleClick} >Comments</h4><ul>{commentItems}</ul></div>
	}

	handleClick = (ev)=> {
		this.setState({isOpen: !this.state.isOpen})
	}
}

CommentList.propTypes = {
	comments: PropTypes.array.isRequired
}

export default CommentList