import AppDispatcher from '../dispatcher'
import { DELETE_ARTICLE, ADD_COMMENT, START, SUCCESS, FAIL, LOAD_ALL_ARTICLES } from '../constants'
import $ from 'jquery'


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

export function loadArticles(){
    AppDispatcher.dispatch({
        type: LOAD_ALL_ARTICLES + START
    });

    $.get('api/article')
        .done((response) => {
            AppDispatcher.dispatch({
                type: LOAD_ALL_ARTICLES + SUCCESS,
                response
            })
        })
        .fail((error) => {
            AppDispatcher.dispatch({
                type: LOAD_ALL_ARTICLES + FAIL,
                error
            })
        })

}