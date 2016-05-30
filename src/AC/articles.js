import AppDispatcher from '../dispatcher'
import { DELETE_ARTICLE, ADD_COMMENT, ON_ADD_COMMENT } from '../constants'

export function deleteArticle(id) {
    const action = {
        type: DELETE_ARTICLE,
        articleId: id
    };
    AppDispatcher.dispatch(action)
}

export function addComment(articleId, comment) {
    const action = {
        type: ADD_COMMENT,
        articleId: articleId,
        comment: comment
    };
    AppDispatcher.dispatch(action)
}

export function onAddComment(articleId, commentId) {
    const action = {
        type: ON_ADD_COMMENT,
        articleId: articleId,
        commentId: commentId
    };
    AppDispatcher.dispatch(action)
}