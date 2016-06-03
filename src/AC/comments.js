import AppDispatcher from '../dispatcher'
import {ADD_COMMENT, LOAD_ALL_COMMENTS, START, SUCCESS, FAIL} from '../constants'
import { asyncAC } from './utils'
import { loadAllCommentsCall } from './apiCalls'

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

export const loadAllComments = asyncAC(LOAD_ALL_COMMENTS, loadAllCommentsCall);