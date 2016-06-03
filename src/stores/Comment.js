import BasicStore from './BasicStore'
import AppDispatcher from '../dispatcher'
import { ADD_COMMENT } from '../constants'
import {onAddComment} from '../AC/articles'

export default class Article extends BasicStore {
	constructor(...args) {
		super(...args);

		this.dispatchToken = AppDispatcher.register((action) => {
			const { type, payload } = action;
			switch (type) {
				case ADD_COMMENT:
					payload.comment.id = this.getLastId() + 1;
					this._add(payload.comment);
					break;
			}
		})
	}
}
