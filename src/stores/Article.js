import BasicStore from './BasicStore'
import AppDispatcher from '../dispatcher'
import { DELETE_ARTICLE, ADD_COMMENT, LOAD_ALL_ARTICLES, START, SUCCESS, FAIL } from '../constants'

export default class Article extends BasicStore {
    constructor(...args) {
        super(...args);

        this.dispatchToken = AppDispatcher.register((action) => {
            const { type, payload, response, error } = action;

            switch (type) {
                case DELETE_ARTICLE:
                    debugger;
                    this._delete(payload);
                    this.emitChange();
                    break;

                case ADD_COMMENT:
                    AppDispatcher.waitFor([this.getStores().comments.dispatchToken]);
                    this.addCommentById(articleId, args.comment.id);
                    break;
                case LOAD_ALL_ARTICLES + START:
                    this.loading = true;
                    break;
                case LOAD_ALL_ARTICLES + SUCCESS:
                    this.loading = false;
                    response.forEach(this._add);
                    break;
                case LOAD_ALL_ARTICLES + FAIL:
                    break;

            }
            this.emitChange();
        })
    }

    addCommentById(articleId, commentId) {
        let commentsArray = this.getById(articleId).comments;
        commentsArray.push(commentId);
        this.emitChange();
    }
}