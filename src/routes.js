import { Router, Route, IndexRoute, Redirect, IndexRedirect, hashHistory, browserHistory } from 'react-router'
import React from 'react'
import ArticleRoot from './RouteHandlers/ArticlesRoot'
import ArticleIndex from './RouteHandlers/ArticlesIndex'
import ArticleNew from './RouteHandlers/ArticleNew'
import ArticlePage from './RouteHandlers/ArticlePage'
import CommentsRoot from './RouteHandlers/CommentsRoot'
import CommentsPage from './RouteHandlers/CommentsPage'
import NotFound from './RouteHandlers/NotFound'

export default (
    <Router history = {browserHistory}>
        <Redirect from = "/" to = "/articles"/>
        <Route path = "/articles" component = {ArticleRoot}>
            <IndexRoute component = {ArticleIndex}/>
            //Логику аутентификации следовало просто сделать через Flux, а сдесь сделать редирект из onEnter, если юзера нет в сторе
            <Route path = "new" component = {ArticleNew} switchUser = {ArticleRoot.switchUser} />
            <Route path = ":id" component = {ArticlePage} />
        </Route>

        <Route path = "comments" component = {CommentsRoot} >
            <IndexRedirect to = "1"/>
            <Route path = ":page" component = {CommentsPage} />
        </Route>
        <Route path = "*" component = {NotFound} />

    </Router>
)
