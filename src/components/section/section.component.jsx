import React from 'react';

import { Container, MainMessage, MainImage, Image, Title, Description } from './section.style';

import header from '../../header.svg';
import body from '../../body.svg';

export const Section = props => {
	return (
		<Container>
			<MainMessage>
				<Title>Welcome to <span>Einblick</span></Title>
				<Description>We build products that empower developer and engineer and connect them to solutions that enable productivity, growth, and discovery in all field since computing, mathematics, physics, chemical up to engineering.</Description>
			</MainMessage>
			<MainImage>
				<img src={body}/>
			</MainImage>
		</Container>
	);
};