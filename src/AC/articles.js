import AppDispatcher from '../dispatcher'
import { DELETE_ARTICLE, ADD_COMMENT, START, SUCCESS, FAIL, LOAD_ALL_ARTICLES } from '../constants'
import { asyncAC } from './utils'
import { loadAllArticlesCall } from './apiCalls'


export function deleteArticle(id) {
    const action = {
        type: DELETE_ARTICLE,
        payload: id
    };

    AppDispatcher.dispatch(action)
}

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

export const loadAllArticles = asyncAC(LOAD_ALL_ARTICLES, loadAllArticlesCall);