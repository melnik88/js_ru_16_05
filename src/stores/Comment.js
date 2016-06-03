import BasicStore from './BasicStore'
import AppDispatcher from '../dispatcher'
import { ADD_COMMENT, LOAD_ALL_COMMENTS, START, SUCCESS, FAIL } from '../constants'
import {onAddComment} from '../AC/articles'

export default class Article extends BasicStore {
	constructor(...args) {
		super(...args);

		this.dispatchToken = AppDispatcher.register((action) => {
			const { type, payload, response } = action;
			switch (type) {
				case ADD_COMMENT:
					payload.comment.id = this.getLastId() + 1;
					this._add(payload.comment);
					break;

				case LOAD_ALL_COMMENTS + START:
					break;
				case LOAD_ALL_COMMENTS + SUCCESS:
					const { articleId } = payload;
					const { records } = response;

					for (let i = 0; i < records.length; i++) {
						if (records[i].article == articleId) {
							this._add(records[i]);
						}
					}

					break;
				case LOAD_ALL_COMMENTS + FAIL:
					break;

				default:
					return;
			}
			this.emitChange();
		})
	}
}
