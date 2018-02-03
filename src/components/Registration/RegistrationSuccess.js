import React, { Component } from 'react'
/*
1. get the user information
1a. user is valid 
user {
	isvalid: true,
	id:313123213,
	emailaddress: a@a.com
	name: a b

}

2. Please provide payment details

2a validation on the form
 name as on card + other card details

2b submit payment details

3 render payment details saved - QR code has been generated and sent to your email address.





********

resendQRcode page. 






*/

import { getUser } from '../../api/user'
import RegistrationForm from './RegistrationForm'
import ResendCode from './ResendCode'

class RegistrationSuccess extends Component {
	state = {
		isValid: false,
		email:'',
		cardNumber: '',
		ccv:'',
		nameOnCard:'',
		id:'',
		isFormValid: false,

	}

	handleChange = (inputName) => (event) => {
	    this.setState({
	      [inputName]:event.target.value
	    })
  	}
	
	componentDidMount(){
		const user = getUser(this.props.match.params.id)
		this.setState({...user})

	}

	handleSubmit = (e) =>{
		e.preventDefault()
		if(this.state.isFormValid){
			//api.updateUser()

			
			this.setState( (prevState) => ({
					...prevState,
					isValid:true,
					newRegistration:true
				})
			)
		}
	}
	
	render(){
		const newRegistration = false
		return (
			<div>
				{this.state.isValid ? 

					<ResendCode id={this.state.id} isValid={this.state.newRegistration} /> : 
					<RegistrationForm {...this.state} handleChange={this.handleChange}/> 
				}
			
  			</div>
		)
	}
}

export default RegistrationSuccess