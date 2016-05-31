import BasicStore from './BasicStore'
import AppDispatcher from '../dispatcher'
import { ADD_COMMENT } from '../constants'
import {onAddComment} from '../AC/articles'

export default class Article extends BasicStore {
	constructor(...args) {
		super(...args);

		AppDispatcher.register((action) => {
			const { type, articleId, comment } = action;
			switch (type) {
				case ADD_COMMENT:
					comment.id = this.getLastId() + 1;
					this._add(comment);
					//А вот это плохо, лучше подписиваться на ADD_COMMENT в ArticleStore
					setTimeout(()=> {
						onAddComment(articleId, comment.id)
					});
					break;
			}
		})
	}
}
