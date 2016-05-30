import React from 'react'
import BasicSubscribeTo from './SubscribeToStore'
import { commentStore } from '../stores'

export default (CustomComponent) => {
    return class DecoratedComponent extends BasicSubscribeTo {
        constructor() {
            super();
            this._store = commentStore;
        }

        render() {
            return <CustomComponent {...this.props} />
        }
    }
}