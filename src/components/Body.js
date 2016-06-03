import React, { PropTypes } from 'react'
import CommentList from './CommentList'

function Body(props) {
	const { article } = props;
	const { id, text, loading, comments:commentsIdsArray } = article;
	if (loading) return <h3>Loading...</h3>;

	return (
		<section>
			{text}
			<div><CommentList articleId = {id} commentsIdsArray = {commentsIdsArray} /></div>
		</section>
	)
}

Body.propTypes = {
	article: PropTypes.object.isRequired
}

export default Body