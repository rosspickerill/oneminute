import React from 'react'
import { Link } from 'react-router-dom' 

const ResendCode = ({id, isValid }) => {
	let text = isValid ? 'Thank you for completing your registration. We have emailed you a QR code so that you can start using our service' : 'We already have the details we need from you.'
	return(
		<div> 
			<p>{text}</p>
			You can request a new code here. <Link to={`/resendcode/${id}`}>Resend Code</Link>
		</div>

	)
}

export default ResendCode