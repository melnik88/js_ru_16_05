import AppDispatcher from '../dispatcher'
import {ADD_COMMENT, LOAD_COMMENTS_FOR_ARTICLE, START, SUCCESS, FAIL} from '../constants'
import { asyncAC } from './utils'
import { loadCommentsCall } from './apiCalls'

export function addComment(articleId, comment) {
	const action = {
		type: ADD_COMMENT,
		payload: {
			articleId: articleId,
			comment: comment
		}
	};

	AppDispatcher.dispatch(action)
}

export const loadComments = asyncAC(LOAD_COMMENTS_FOR_ARTICLE, loadCommentsCall);