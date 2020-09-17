import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Layout } from './components/layout/layout.component';
import { Job } from './components/job/job.component';
import { JobDescription } from './components/jobDescription/jobDescription.component';

export const Routes = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={ Layout } />
				<Route path="/jobs" exact component={ Job } />
				<Route path="/job/:jobId" component={ JobDescription } />
			</Switch>
		</BrowserRouter>
	);
}