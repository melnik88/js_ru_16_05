import AppDispatcher from '../dispatcher'
import {ADD_COMMENT, LOAD_COMMENTS_FOR_ARTICLE, LOAD_COMMENTS_FOR_PAGE} from '../constants'
import { asyncAC } from './utils'
import { loadCommentsCall, loadCommentsForPageCall } from './apiCalls'
import { history } from '../routes'

export function addComment(articleId, comment) {
	const action = {
		type: ADD_COMMENT,
		payload: {
			articleId: articleId,
			comment: comment
		}
	};

	AppDispatcher.dispatch(action)
	history.push('/comments/1')
}

export const loadComments = asyncAC(LOAD_COMMENTS_FOR_ARTICLE, loadCommentsCall);
export const loadCommentsForPage = asyncAC(LOAD_COMMENTS_FOR_PAGE, loadCommentsForPageCall);