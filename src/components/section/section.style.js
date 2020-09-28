import styled from 'styled-components';

import header from '../../header.svg';

export const Container = styled.div`
	display: flex;
	grid-area: Body;
	align-items: center;
	width: 100vw;

	height: calc(100vh - 50px);
	background-image: url(${header});
	background-repeat: no-repeat;
	
	@media(max-width: 816px) {
		display: flex;
		justify-content: space-around;
		flex-direction: column;
		grid-area: Body;
		align-items: center;
		width: 95%;
	}
`;

export const MainMessage = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: flex-start;
	width: 50%;
	height: 50vh;
	margin-left: 10vw;
	margin-top: 10vh;

	@media(max-width: 816px) {
		display: flex;
		justify-content: space-around;
		margin-top: 10vh;
		margin-left: 0;
		flex-direction: column;
		align-items: center;
		text-align: justify;
	}
`;

export const MainImage = styled.div`
	width: 50%;
	height: 100%;
	background-color: ;
	display: flex;
	justify-content: flex-end;
	padding-right: 10vw;

	> img {
		width: 80%;
	}

	@media(max-width: 816px) {
		display: flex;
		flex-direction: row;
	}
`;

export const Title = styled.div`
	font-size: 64px;
	font-family: 'Bahnschrift';
	font-weight: bold;
	color: #766df4;

	> span {
		padding: 5px;
		background-color: #766df4;
		color: white;
		border-radius: 5px;
	}

	@media(max-width: 816px) {
		
		text-align: center;
	}
`;

export const Description = styled.p`
	font-size: 22px;
	font-family: 'Bahnschrift';
	color: #766df4;

	&::first-letter {
		font-size: 32px;
	}

	@media(max-width: 816px) {
		align-items: center;
		text-align: justify;
		font-size: 16px;
	}
`;
