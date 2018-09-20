import React from 'react'
import {Route} from 'react-router-dom'

const renderMergedProps = (component, ...rest) => {
	const finalProps = Object.assign({}, ...rest)
	return (
		React.createElement(component, finalProps)
	)
}

const PublicRoute = ({component, ...rest}) => {
	return (
		<Route {...rest} render={routeProps => {
			return renderMergedProps(component, routeProps, rest)
		}}/>
	)
}

export default PublicRoute