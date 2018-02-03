import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import App from './App'
import RegistrationSuccess from './components/Registration/RegistrationSuccess'

const Root = () =>(
	<Router>
		<Switch>
			<Route path='/registration/:id' component={RegistrationSuccess} /> {/* swap to registeration complete component */}
			<Route path='/register' component={App} /> {/* swap component to register component */}
			<Route exact path='/' component={App}/>
		</Switch>
	</Router>
)


export default Root