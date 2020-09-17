import React from 'react';

import { Container, Document, FirstLine, Title, ShareIcon, BookmarkIcon, CompanyInfo, CompanyName, LocationIcon, Bar, JobInfo, Extra } from './jobCard.style';

export const JobCard = () => {
	return (
		<Container>
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

				<Bar/>

				<JobInfo>
					<p>Qualifications:</p>
					<ul>
						<li>Master's degree in Law field from a Spanish University</li>
						<li>Currently pursuing legal bar qualifications.</li>
						<li>Work experience in a law firm, media/technology company or EU institution.</li>
						<li>Ability to speak and write English and Spanish fluently and idiomatically.</li>
					</ul>
				</JobInfo>
				<Extra>
					<a href="#">Expand</a>
				</Extra>
			</Document>

			<Document>
				<FirstLine>
					<Title>Industry Solutions Architect, Telco Cloud</Title>
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
						<p>Paris, France</p>
					</div>
				</CompanyInfo>

				<Bar/>

				<JobInfo>
					<p>Qualifications:</p>
					<ul>
						<li>Experience with Telco Platform as a Service and Infrastructure as a Service technologies.</li>
						<li>Experience with 4G/5G architectures, wireless/wireline infrastructures, and Network Cloudification (SDN/NFV).</li>
						<li>Experience with edge compute, infrastructure management, resource orchestration, Network Automation/Analytics/Operations, Telco IT, open source architectures.</li>
						<li>xperience with relevant industry standards (3GPP, ETSI) in the telco space.</li>
					</ul>
				</JobInfo>
				<Extra>
					<a href="#">Expand</a>
				</Extra>
			</Document>
		</Container>
	);
};