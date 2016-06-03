import BasicStore from './BasicStore'
import Article from './Article'
import Comment from './Comment'
import { normalizedArticles, normalizedComments } from '../fixtures'

const stores = {};

Object.assign(stores, {
    articles: new Article(stores),
    comments: new Comment(stores, normalizedComments)
});

window.stores = stores;

export default stores
export const articleStore = stores.articles;
export const commentStore = stores.comments;