import React from 'react';

import { Container, Brand, Menu, Item, Input, Buttons, Login, Signup } from './header.style';

export const Header = props => {
	return(
	<Container>
		<Brand><a href="/">Einblick</a></Brand>
		<Menu>
			<Item><span><a href="/jobs">Job</a></span></Item>
			<Item><a href="#">Comunnity</a></Item>
			<Item><a href="#">Blog</a></Item>
		</Menu>

		<Input>
			<input type="text" placeholder="Search your Job here"/>
		</Input>

		<Buttons>
			<Login><a href="#">Login</a></Login>
			<Signup><a href="#">Sign up</a></Signup>
		</Buttons>
	</Container>);
}
