import React, { Component as ReactComponent } from 'react'
import {articleStore} from '../stores'

export default (CustomComponent) => {
    return class DecoratedComponent extends ReactComponent {
        constructor() {
            super();
            this.state = {
                articles: articleStore.getAll()
            };
        }

        componentDidMount() {
            articleStore.addChangeListener(this.handleChange);
        }

        componentWillUnmount() {
            articleStore.removeChangeListener(this.handleChange);
        }

        handleChange = () => {
            this.setState({
                articles: articleStore.getAll()
            })
        }

        render() {
            return <CustomComponent {...this.props} articles = {this.state.articles}  />
        }
    }
}