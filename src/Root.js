import React from 'react'
import { HashRouter as Router } from 'react-router-dom'
import App from './App'
import { Route, Switch } from 'react-router-dom'

const Root = () => (
        <Router>
            <Switch>
                <Route path="/" component={App} />
            </Switch>
        </Router>
)

export default Root