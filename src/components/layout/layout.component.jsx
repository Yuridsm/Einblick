import React from 'react';

import './layout.style.css';

import { Header } from '../header/header.component';
import { Section } from '../section/section.component';

export const Layout = (props) => {
	return <div class="grid">
		<Header/>
		<Section/>
	</div>;
};
