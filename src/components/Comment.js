import React, { PropTypes, Component } from 'react'

class Comment extends Component {

	render() {
		const { comment } = this.props;
		const { id, user, text } = comment;

		return (
			<div>
				<div class='title'>
					<span class='user'><b>{user}</b></span>
				</div>
				<div class='text'>{text}</div>
			</div>
		)
	}
}

Comment.propTypes = {
	comment: PropTypes.shape({
		id: PropTypes.number.isRequired,
		name: PropTypes.string,
		title: PropTypes.string,
		text: PropTypes.string
	})
}

export default Comment