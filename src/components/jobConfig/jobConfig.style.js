import styled from 'styled-components';

import { PlusCircleOutline } from '@styled-icons/evaicons-outline/PlusCircleOutline';
import { MinusCircleOutline } from '@styled-icons/evaicons-outline/MinusCircleOutline';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0;
	overflow-y: scroll;
	padding: 0 10px;
	width: 25vw;
	height: calc(100vh - 50px - 70px);

	::-webkit-scrollbar {
		width: 10px;
	}
	
	::-webkit-scrollbar-thumb {
		background-color: #766df4;
		border-radius: 10px;
	}

	::-webkit-scrollbar-track {
		background-color: rgba(118,109,244,0.14);
	}
`;

export const Field = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	padding: 40px 0 10px 0;
	border-bottom: 1px solid #dadce0;

	> div {
		display: flex;
		justify-content: space-between;
		font-size: 16px;
		align-items: center;
		font-family: 'bahnschrift';
		margin: 0 0 10px 0;
	}

	> div a {
		text-decoration: none;
		color: #766df4;
		font-size: 16px;
	}

	> div p {
		font-size: 16px;
		font-family: 'bahnschrift';
		color: #766df4;
		margin: 0;
	}

	> input {
		height: 48px;
		border: solid 1px #dadce0;
		border-radius: 4px;
		padding-left: 5%;
		box-shadow: 0 2px 4px rgba(0,0,0,.11);
		font-size: 16px;
		font-family: 'Bahnschrift';
		outline: 0;
	}
`;

export const Locations = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	width: 100%;
	padding: 20px 0 10px 0;
	border-bottom: 1px solid #dadce0;

	> div {
		display: flex;
		justify-content: space-between;
		font-size: 16px;
		align-items: center;
		margin: 0 0 10px 0;
	}

	> div p {
		font-size: 16px;
		font-family: 'bahnschrift';
		color: #766df4;
		margin: 0;
	}

	> input {
		height: 48px;
		border: solid 1px #dadce0;
		border-radius: 4px;
		padding-left: 5%;
		box-shadow: 0 2px 4px rgba(0,0,0,.11);
		font-size: 16px;
		font-family: 'Bahnschrift';
		outline: 0;
	}
`;

export const Plus = styled(PlusCircleOutline)`
	width: 20px;
	height: 20px;
	color: #766df4;
	margin: 5px;
	cursor: pointer;
`;

export const Minus = styled(MinusCircleOutline)`
	width: 20px;
	height: 20px;
	color: #766df4;
	margin: 5px;
	cursor: pointer;
`;

export const Skill = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	width: 100%;
	padding: 20px 0 10px 0;
	border-bottom: 1px solid #dadce0;
	font-size: 16px;

	> div {
		display: flex;
		justify-content: space-between;
		font-size: 16px;
		align-items: center;
		margin: 0 0 10px 0;
	}

	> div p {
		font-size: 16px;
		font-family: 'bahnschrift';
		color: #766df4;
		margin: 0;
	}

	> input {
		height: 48px;
		border: solid 1px #dadce0;
		border-radius: 4px;
		padding-left: 5%;
		box-shadow: 0 2px 4px rgba(0,0,0,.11);
		outline: 0;
		font-size: 16px;
		font-family: 'Bahnschrift';
	}
`;

export const Degree = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	width: 100%;
	padding: 20px 0 10px 0;
	border-bottom: 1px solid #dadce0;

	> div:first-child {
		display: flex;
		width: 100%;
		justify-content: space-between;
		align-items: center;
		font-family: 'bahnschrift';
		color: #766df4;
	}

	> select {
		width: 100%;
		height: 48px;
		padding-left: 5%;
		padding-right: 5%;
		font-family: 'bahnschrift';
		font-size: 16px;
		color: #766df4;
		box-shadow: 0 2px 4px rgba(0,0,0,.11);
		border: 1px solid #dadce0;
		border-radius: 5px;
	}

	> select, &:active {
		outline: 0;
	}
`;

export const JobType = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	width: 100%;
	padding: 20px 0 10px 0;
	border-bottom: 1px solid #dadce0;

	> div:first-child {
		display: flex;
		width: 100%;
		justify-content: space-between;
		align-items: center;
		font-family: 'bahnschrift';
		color: #766df4;
	}

	> select {
		width: 100%;
		height: 48px;
		padding-left: 5%;
		padding-right: 5%;
		font-family: 'bahnschrift';
		font-size: 16px;
		color: #766df4;
		box-shadow: 0 2px 4px rgba(0,0,0,.11);
		border: 1px solid #dadce0;
		border-radius: 5px;
	}

	> select, &:active {
		outline: 0;
	}
`;

export const Organization = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	width: 100%;
	padding: 20px 0 10px 0;
	border-bottom: 1px solid #dadce0;

	> div:first-child {
		display: flex;
		width: 100%;
		justify-content: space-between;
		align-items: center;
		font-family: 'bahnschrift';
		color: #766df4;
	}

	> select {
		width: 100%;
		height: 48px;
		padding-left: 5%;
		padding-right: 5%;
		font-family: 'bahnschrift';
		font-size: 16px;
		color: #766df4;
		box-shadow: 0 2px 4px rgba(0,0,0,.11);
		border: 1px solid #dadce0;
		border-radius: 5px;
	}

	> select, &:active {
		outline: 0;
	}
`;
