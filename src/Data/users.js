const users = [
	{
		id: 1,
		email: 'one@one.com',
		name: 'joe',
		isValid: true
	},
	{
		id:2,
		email: 'two@one.com',
		isValid: false
	},
	{
		id: 3,
		email: 'one@one.com',
		name: 'joe',
		isValid: true,
		newRegistration: true
	}
]


const paymentDetails = [{
	id: 1,
	card:{
		number: '1232132132131312',
		ccv:123,
		nameOnCard:'joe bloggs'
	}
}]

export default users