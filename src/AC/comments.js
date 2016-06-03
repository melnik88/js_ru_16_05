import AppDispatcher from '../dispatcher'
import {ADD_COMMENT, START, SUCCESS, FAIL} from '../constants'
import { asyncAC } from './utils'

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