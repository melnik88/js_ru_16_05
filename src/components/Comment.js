import React, { PropTypes, Component } from 'react'

class Comment extends Component {

	render() {
		const { comment } = this.props;
		const { id, title, name, text } = comment;

		return (
			<div>
				<div class='title'>
					<span class='user'><b>{name}</b></span> <span>{title}</span>
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