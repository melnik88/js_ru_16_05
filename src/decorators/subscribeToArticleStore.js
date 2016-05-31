import React from 'react'
import BasicSubscribeTo from './SubscribeToStore'
import { articleStore } from '../stores'

//При разработке HOC надо делать их общими, что б один использовать везде, а не в создавать новые для каждого случая - тогда теряется весь смысл
export default (CustomComponent) => {
    return class DecoratedComponent extends BasicSubscribeTo {
        constructor() {
            super();
            this.state = {
                articles: articleStore.getAll()
            };
            this._store = articleStore
        }

        handleChange = () => {
            this.setState({
                articles: articleStore.getAll()
            })
        };

        render() {
            return <CustomComponent articles = {this.state.articles}  />
        }
    }
}
