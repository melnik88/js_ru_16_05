import BasicStore from './BasicStore'
import AppDispatcher from '../dispatcher'
import { DELETE_ARTICLE, ON_ADD_COMMENT } from '../constants'

export default class Article extends BasicStore {
    constructor(...args) {
        super(...args);

        AppDispatcher.register((action) => {
            const { type, articleId, ...args } = action;

            switch (type) {
                case DELETE_ARTICLE:
                    this._delete(articleId);
                    this.emitChange();
                    break;

                case ON_ADD_COMMENT:
                    this.addCommentById(articleId, args.commentId);
                    break;
            }
        })
    }

    addCommentById(articleId, commentId) {
        let commentsArray = this.getById(articleId).comments;
        commentsArray.push(commentId);
        this.emitChange();
    }
}