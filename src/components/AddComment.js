import React, { PropTypes, Component } from 'react'
import {addComment} from '../AC/comments'

export default class AddComment extends Component {
	state = {
		name: '',
		text: ''
	}

	render() {
		return <form>
				<label>Enter your comment</label> <br/>
				<input type="text" onChange={this.handleChange('name')}/> <br/>
				<textarea ref="comment" onChange={this.handleChange('text')}/> <br/>
				<button type="submit" onClick = {this.addComment}>Отправить</button>
			</form>
	}

	handleChange = input => ev => {
		this.setState({
			[input]: ev.target.value
		})
	}

	addComment = (ev) => {
		ev.preventDefault();
		addComment(this.props.articleId, this.state);
	}
}
