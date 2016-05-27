//also know as HOC higher order components
import React, { Component as ReactComponent } from 'react'

export default (CustomComponent) => {
    return class DecoratedComponent extends ReactComponent {
        state = {
            openedItemId: null
        };

        openItem = id => ev => {
            if (ev) ev.preventDefault();
            this.setState({
                openedItemId: this.state.openedItemId == id ? null : id
            })
        };

        render() {
            return <CustomComponent {...this.props} openedItemId = {this.state.openedItemId} openItem = {this.openItem} />
        }
    }
}