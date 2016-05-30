import BasicStore from './BasicStore'
import Article from './Article'
import { normalizedArticles, normalizedComments } from '../fixtures'

const stores = {};

Object.assign(stores, {
    articles: new Article(stores, normalizedArticles),
    comments: new BasicStore(stores, normalizedComments)
});

export const articleStore = stores.articles;
export const commentStore = stores.comments;