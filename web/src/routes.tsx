import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CreateOrphanage from './pages/CreateOrphanage';
import Delete from './pages/Delete';
import Landing from './pages/Landing';
import Orphanage from './pages/Orphanage';
import OrphanagesMap from './pages/OrphanagesMap';
import Sucess from './pages/Sucess';
import Login from './layouts/Login';

function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Landing} />
				<Route exact path="/app" component={OrphanagesMap} />
				<Route exact path="/orphanages/create" component={CreateOrphanage} />
				<Route exact path="/orphanages/:id" component={Orphanage} />
				<Route exact path="/sucess" component={Sucess} />
				<Route exact path="/remove/:name" component={Delete} />
				<Route exact path="/login" component={Login} />
			</Switch>
		</BrowserRouter>
	);
}

export default Routes;
