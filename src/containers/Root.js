import React, { PropTypes, Component } from 'react'
//import Article from './Article'
import Counter from './Counter'
import { Provider } from 'react-redux'

class Root extends Component {
    static PropTypes = {
        store: PropTypes.object.isRequired
    };

    render() {
        return (
            <Provider store={this.props.store}>
                <Counter/>
            </Provider>
        )
    }
}

export default Root