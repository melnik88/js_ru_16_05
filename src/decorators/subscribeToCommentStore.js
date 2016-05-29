import React, { Component as ReactComponent } from 'react'
import {commentStore} from '../stores'

export default (CustomComponent) => {
    return class DecoratedComponent extends ReactComponent {

        componentDidMount() {
            commentStore.addChangeListener(this.handleChange);
        }

        componentWillUnmount() {
            commentStore.removeChangeListener(this.handleChange);
        }

        render() {
            return <CustomComponent {...this.props} />
        }
    }
}