import React from 'react'
import BasicSubscribeTo from './SubscribeToStore'
import { articleStore } from '../stores'

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