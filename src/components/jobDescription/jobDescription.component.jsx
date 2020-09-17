import React from 'react';

import { Container, FirstLine, Title, ShareIcon, BookmarkIcon, CompanyInfo, Apply, ApplyIcon, Bar, Note } from './jobDescription.style';
import { Header } from '../header/header.component';
import { Menubar } from '../header/menubar/menubar.component';

export const JobDescription = props => {
	return (
		<Container>
			<Header/>
			<Menubar>
				<h4>Yuri dos santos melo</h4>
				<h4>Save job</h4>
			</Menubar>
			<FirstLine>
				<Title>Cloud Customer Engineering Intern, Summer 2021</Title>
				<div>
					<ShareIcon/>
					<BookmarkIcon/>
				</div>
			</FirstLine>
			<CompanyInfo/>
			<Apply>
				<ApplyIcon/>
			</Apply>
			<Bar/>

			<Note/>
		</Container>
	);
};
