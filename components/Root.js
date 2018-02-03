import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import App from '../src/App'

const Root = () =>{
	<Router>
		<Switch>
			<Route path='/register' component={App} /> {/* swap component to register component */}
			<Route path='/registration/:id' component={App} /> {/* swap to registeration complete component */}
			<Route path='/' component={App}/>
		</Switch>
		<App />
	</Router>
}