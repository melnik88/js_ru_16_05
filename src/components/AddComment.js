import React, { PropTypes, Component } from 'react'
import {addComment} from '../AC/articles'

export default class AddComment extends Component {

	render() {
		return <form>
				<label>Enter your comment</label> <br/>
				<input type="text" ref="name"/> <br/>
				<textarea ref="comment"/> <br/>
				<button type="submit" onClick = {this.addComment}>Отправить</button>
			</form>

	}

	addComment = (ev) => {
		ev.preventDefault();
		//лучше не работать с DOM, а держать value в state
		addComment(this.props.articleId, { name: this.refs.name.value, text: this.refs.comment.value });
	}
}
