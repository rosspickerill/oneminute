import users from '../Data/users'

export const getUser = id => {
	const user = users.find(function(user){
		return user.id == id
	})
	return user
}

