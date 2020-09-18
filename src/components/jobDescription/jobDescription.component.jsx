import React from 'react';

import { Container, Subcontainer, DocumentSection, Document, FirstLine, Title, ShareIcon, BookmarkIcon } from './jobDescription.style';
import { CompanyInfo, CompanyName, LocationIcon, Apply, ApplyIcon, Bar, Note, List } from './jobDescription.style';
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

			<Subcontainer>
				<DocumentSection>
					<Document>
						<FirstLine>
							<Title>Cloud Customer Engineering Intern, Summer 2021</Title>
							<div>
								<ShareIcon/>
								<BookmarkIcon/>
							</div>
						</FirstLine>
						<CompanyInfo>
							<div>
								<CompanyName/>
								<p>Google</p>
							</div>
							<div>
								<LocationIcon/>
								<p>Madrid, Spain</p>
							</div>
						</CompanyInfo>
						<Apply>
							<button>
								<ApplyIcon/>Apply
							</button>
						</Apply>
						<Bar/>
						{ true ? <Note/> : '' }


						<List>
							<p>Minimum qualifications:</p>
							<ul>
								<div><span></span><li>Bachelor’s degree or equivalent practical experience.</li></div>
								<div><span></span><li>Sales experience in technology, advertising and/or Internet. Experience growing a market.</li></div>
								<div><span></span><li>Sales leadership experience.</li></div>
								<div><span></span><li>Experience owning sales team operations: portfolio management team building, KPI measurement, execution.</li></div>
							</ul>
						</List>

						<List>
							<p>Preferred qualifications:</p>
							<ul>
								<div><span></span><li>Ability to model and coach sales behaviors including, C-level engagement, effective questioning, objection handling, competitive selling, building pipeline.</li></div>
								<div><span></span><li>Thought leadership, as demonstrated by industry expertise, ability to influence, high executive functioning.</li></div>
								<div><span></span><li>Ability to develop and deliver business strategies and relationships sustainable in the short- and long-term.</li></div>
								<div><span></span><li>Demonstrated analytical skills.</li></div>
							</ul>
						</List>
						<Bar/>

						
					</Document>
				</DocumentSection>
			</Subcontainer>
		</Container>
	);
};
