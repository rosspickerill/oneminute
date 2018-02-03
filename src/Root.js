import React from 'react'
import { HashRouter as Router } from 'react-router-dom'
import App from './App'
// import Home from './Home'
import { Route, Switch } from 'react-router-dom'

const Root = () => (
        <Router>
            <Switch>
                <Route path="/" component={App} />
                {/* <Route path="/" component={Home} /> */}
            </Switch>
        </Router>
)

export default Root