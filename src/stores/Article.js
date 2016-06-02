import BasicStore from './BasicStore'
import AppDispatcher from '../dispatcher'
import { DELETE_ARTICLE, ADD_COMMENT } from '../constants'

export default class Article extends BasicStore {
    constructor(...args) {
        super(...args);

        this.dispatchToken = AppDispatcher.register((action) => {
            const { type, articleId, ...args } = action;

            switch (type) {
                case DELETE_ARTICLE:
                    this._delete(articleId);
                    this.emitChange();
                    break;

                case ADD_COMMENT:
                    AppDispatcher.waitFor([this.getStores().comments.dispatchToken]);
                    this.addCommentById(articleId, args.comment.id);
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