import React from 'react';

import { Container, Subcontainer, DocumentSection, Document, FirstLine, Title, ShareIcon, BookmarkIcon } from './jobDescription.style';
import { CompanyInfo, CompanyName, LocationIcon, Apply, ApplyIcon, Bar, Note, List } from './jobDescription.style';
import { About } from './jobDescription.style';

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

						<About>
							<h1>About</h1>
							<p>With a rapidly growing array of sales teams, it's important to have knowledgeable, charismatic leaders to guide our client sales teams. As a Sales manager, you'll lead and coach high-performing account teams that use consultative sales skills to understand our advertisers' needs and deliver measurable solutions that grow their businesses. You will also work with the sales leadership team to set strategic objectives and run the day-to-day operations for the business. Sales managers willingly help their teams and roll up their sleeves to partner directly with clients to provide comprehensive service. You are an excellent communicator with a proven ability to train and motivate a large team, and you take an analytical approach to sales management.</p>
							<p>Google Customer Solutions (GCS) sales teams are trusted advisors who maintain a relentless focus on customer success by bringing the best Google has to offer. As a GCS Sales Agency Lead for Denmark, you'll manage client relationships and lead the business engagement with agencies in the market. You will enable your team to always reach for ambitious performance goals. You and your team will also work with a wide variety of top GCS agencies to deliver the optimal advertising solution for every partner and their clients.</p>
							<p>You'll enable your team to work towards business goals and OKRs, assisting them in managing portfolios of diverse businesses at various stages. Your knowledge of how Google’s solutions can solve various clients' business challenges will be key to success. You'll set the vision for how your team understands and transforms their customers and the business.</p>
							<p>When our millions of advertisers and publishers are happy, so are we! Our Google Customer Solutions (GCS) team of entrepreneurial, enthusiastic and client-focused members are the "human face" of Google, helping entrepreneurs both individually and broadly build their online presence and grow their businesses. We are dedicated to growing the unique needs of advertising companies. Our teams of strategists, analysts, advisers and support specialists collaborate closely to spot and analyze customer needs and trends. In collaboration, we create and implement business plans broadly for all types of businesses.</p>
						</About>
						
					</Document>
				</DocumentSection>
			</Subcontainer>
		</Container>
	);
};
