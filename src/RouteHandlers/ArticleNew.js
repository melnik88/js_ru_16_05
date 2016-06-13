import React, { PropTypes, Component } from 'react'
import { browserHistory } from 'react-router'
import AuthForm from '../components/AuthForm'

class ArticleNew extends Component {
    static propTypes = {
        switchUser: PropTypes.any
    };

    static contextTypes = {
        user: PropTypes.string,
        switchUser: PropTypes.any
    };

    render() {
        if (this.context.user) {
            return (
                <div>
                    <h2>New Article page</h2>
                </div>
            )
        } else {
            return <AuthForm switchUser = {this.context.switchUser} />
        }
    }
}

export default ArticleNew