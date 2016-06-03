import React, { PropTypes } from 'react'
import CommentList from './CommentList'

function Body(props) {
	const { article } = props;
	const { id, text, loading, comments } = article;
	if (loading) return <h3>Loading...</h3>;

	return (
		<section>
			{text}
			<div><CommentList articleId = {id} comments = {comments} /></div>
		</section>
	)
}

Body.propTypes = {
	article: PropTypes.object.isRequired
}

export default Body