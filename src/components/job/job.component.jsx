import React from 'react';

import { Container, SubContainer } from './job.style';
import { Header } from '../header/header.component';
import { JobConfig } from '../jobConfig/jobConfig.component';
import { JobCard } from '../jobCard/jobCard.component';
import { Menubar } from '../header/menubar/menubar.component';

export const Job = props => {
	return (
		<Container>
			<Header/>
			<Menubar>
				<h4>Yuri dos santos melo</h4>
				<h4>Save job</h4>
			</Menubar>
			<SubContainer>
				<JobConfig/>
				<JobCard/>
			</SubContainer>
		</Container>
	);
};