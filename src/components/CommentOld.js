var React = require('react');
var PropTypes = React.PropTypes;

var Avatar = require('../mixins/Avatar.js');

var Comment = React.createClass ({
	propTypes: {
		comment: PropTypes.shape({
			id: PropTypes.number.isRequired,
			name: PropTypes.string,
			title: PropTypes.string,
			text: PropTypes.string
		})
	},

	mixins: [Avatar],

	render() {
		const { comment, faces } = this.props;
		const { id, title, name, text } = comment;

		let avatar = faces[Math.floor(Math.random() * 3)];

		return (
			<div>
				<div class='title'>
					<span class='user'>{avatar} <b>{name}</b></span> <span>{title}</span>
				</div>
				<div class='text'>{text}</div>
			</div>
		)
	}
});


module.exports = Comment;