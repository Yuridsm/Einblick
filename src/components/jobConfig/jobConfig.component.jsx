import React from 'react';

import { Container, Field, Locations, Plus, Minus, Skill, Degree, JobType, Organization } from './jobConfig.style';

let variableBoolean = true;

const shiftingTheVariableBoolean = (variableBoolean) => {
	if(variableBoolean) {
		variableBoolean = false;
		console.log('testing...', variableBoolean);
	} else {
		variableBoolean = true;
		console.log('testing...', variableBoolean);
	}
};

const shiftingTheBottom  = (variableBoolean) => variableBoolean ? <Plus/> : <Minus/>;

export const JobConfig = () => {
	return (
		<Container>
			<Field>
				<div>
					<p>What do you want to do?</p>
					<a href="#">Clear filters</a>
				</div>
				<input type="text" name="input" placeholder="Software Engineer, fullstack ..."/>
			</Field>
			
			<Locations>
				<div>
					<p>Location</p>
					<a href="#" onClick={shiftingTheVariableBoolean()}>
						{ variableBoolean ? shiftingTheBottom(variableBoolean) : shiftingTheBottom(variableBoolean) }
					</a>
				</div>
				<input type="text" name="locations" placeholder="New York, London, Michigan"/>
			</Locations>

			<Skill>
				<div>
					<p>Skills & Qualifications</p>
					{ false ? <Plus/> : <Minus/> }
				</div>
				<input type="text" name="skills" placeholder="Computer programming, Finance degree, "/>
			</Skill>

			<Degree>
				<div>
					<p>Degree</p>
					{ false ? <Plus/> : <Minus/> }
				</div>
				<select id="cars">
					<option value="Nothing">Nothing</option>
					<option value="Associate">Associate</option>
					<option value="Bachelor">Bachelor's</option>
					<option value="Master">Master's</option>
					<option value="phd">Ph.D.</option>
					<option value="pursuing">Pursuing Degree</option>
				</select>
			</Degree>

			<JobType>
				<div>
					<p>Job types</p>
					{ false ? <Plus/> : <Minus/> }
				</div>
				<select id="cars">
					<option value="Full-time">Full-time</option>
					<option value="Part-time">Part-time</option>
					<option value="Temporary">Temporary</option>
					<option value="Intern">Intern</option>
				</select>
			</JobType>

			<Organization>
				<div>
					<p>Organizations</p>
					{ false ? <Plus/> : <Minus/> }
				</div>
				<select id="cars">
					<option value="Google">Google</option>
					<option value="Spotify">Spotify</option>
					<option value="Netflix">Netflix</option>
					<option value="Youtube">Youtube</option>
					<option value="Facebook">Facebook</option>
					<option value="Instagram">Instagram</option>
				</select>
			</Organization>
		</Container>
	);
};