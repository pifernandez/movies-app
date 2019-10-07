import React from 'react'
import Home from './containers/Home'
import TopRated from './containers/TopRated'
import Popular from './containers/Popular'
import { BrowserRouter as Router, Route } from 'react-router-dom'

const AppRouter = () => (
	<Router>
		<Route exact path={'/'} component={Home} />
		<Route exact path={'/top'} component={TopRated}/>
		<Route exact path={'/popular'} component={Popular}/>
	</Router>
)

export default AppRouter
