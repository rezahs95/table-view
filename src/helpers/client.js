const isAuthenticated = () => {
	return true
}

const setTokenLocalStorage = (token) => {
	if (window.localStorage) {
		window.localStorage.setItem('token', token)
	}
}

const setTokenSessionStorage = (token) => {
	if (window.sessionStorage) {
		window.sessionStorage.setItem('token', token)
	}
}

const client = {
	isAuthenticated,
	setTokenLocalStorage,
	setTokenSessionStorage,
}

export default client