import styled from 'styled-components';

export const Container = styled.div`
	display: grid;
	grid-area: Nav;
	grid-template-columns: 1fr 2fr 3fr 1fr;
	grid-template-areas: 'brand menu input buttons';
	padding: 0 10vh;
	height: 50px;
`;

export const Brand = styled.div`
	display: flex;
	flex-shrink: 3;
	grid-area: brand;
	font-size: 28px;
	font-family: 'Bahnschrift', sans-serif;
	color: #766df4;
	align-self: center;
	> a {
		text-decoration: none;
		color: #766df4;
	}
`;

export const Menu = styled.div`
	grid-area: menu;
	flex-shrink: 2;
	display: flex;
	justify-content: flex-end;
	align-items: center;
`;

export const Item = styled.div`
	display: flex;
	align-items: center;
	font-size: 16px;
	font-family: 'Bahnschrift';
	color: white;
	margin-left: 20px;
	grid-area: menu;

	> a {
		text-decoration: none;
		color: #766df4;
		padding: 5px;
	}

	> span a {
		text-decoration: none;
		background-color: rgba(118,109,244,0.14);
		padding: 5px 18px;
		border-radius: 18px;
		color: #766df4;
	}

	> span a:hover {
		background-color: rgb(118,109,244);
		color: white;
		transition: color .3s ease-in-out;
	}
`;

export const Input = styled.div`
	display: flex;
	justify-content: flex-end;
	flex-grow: 2;
	flex-shrink: 1;
	font-size: 16px;
	grid-area: input;
	width: 100%;

	> input {
		width: calc(95% - 15px);
		height: calc(75% - 2px);
		display: flex;
		align-self: center;
		border-radius: 6px;
		border-color: #dadce0;
		border-width: 1px;
		border-style: solid;
		padding-left: 15px;
		font-size: 16px;
		font-family: 'Bahnschrift';
		outline: 0;
		box-shadow: 0 2px 4px rgba(0,0,0,.11);
	}
`;

export const Buttons = styled.div`
	display: flex;
	flex-grow: 2;
	flex-shrink: 1;
	grid-area: buttons;
	justify-content: space-around;
	align-items: center;
`;

export const Login = styled.div`
	display: flex;
	flex-shrink: 0;
	align-items: center;
	
	> a {
		text-decoration: none;
		padding: 8px 18px;
		border-radius: 5px;
		background-color: rgba(118,109,244,0.14);
		color: #766df4;
		font-size: 16px;
		font-family: 'Bahnschrift';
		border: 1px solid rgba(118,109,244,0.2);
	}
`;

export const Signup = styled.div`
	display: flex;
	flex-shrink: 0;
	align-items: center;
	
	> a {
		text-decoration: none;
		padding: 8px 18px;
		border-radius: 5px;
		background-color: rgb(118,109,244);
		color: #fff;
		font-size: 16px;
		font-family: 'Bahnschrift';
		border: 1px solid #766df4;
	}
`;