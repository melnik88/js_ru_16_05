import AppDispatcher from '../dispatcher'
import { DELETE_ARTICLE, START, SUCCESS, FAIL, LOAD_ALL_ARTICLES, LOAD_ARTICLE_BY_ID } from '../constants'
import { asyncAC } from './utils'
import { loadAllArticlesCall, loadArticleCall } from './apiCalls'


export function deleteArticle(id) {
    const action = {
        type: DELETE_ARTICLE,
        payload: id
    };

    AppDispatcher.dispatch(action)
}

export const loadAllArticles = asyncAC(LOAD_ALL_ARTICLES, loadAllArticlesCall);
export const loadArticleById = asyncAC(LOAD_ARTICLE_BY_ID, loadArticleCall);