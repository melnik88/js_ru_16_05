import BasicStore from './BasicStore'
import AppDispatcher from '../dispatcher'
import { DELETE_ARTICLE, ADD_COMMENT, LOAD_ALL_ARTICLES, LOAD_ARTICLE_BY_ID, START, SUCCESS, FAIL } from '../constants'

export default class Article extends BasicStore {
    constructor(...args) {
        super(...args);

        this.dispatchToken = AppDispatcher.register((action) => {
            const { type, payload, response, error } = action;

            switch (type) {
                case DELETE_ARTICLE:
                    debugger;
                    this._delete(payload);
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

                case LOAD_ARTICLE_BY_ID + START:
                    this.getById(payload.id).loading = true;
                    break;
                case LOAD_ARTICLE_BY_ID + SUCCESS:
                    this._add(response);
                    break;
                case LOAD_ARTICLE_BY_ID + FAIL:
                    break;
                default:
                    return;
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