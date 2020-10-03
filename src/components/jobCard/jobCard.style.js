import styled from 'styled-components';

import { Share } from '@styled-icons/evaicons-solid/Share';
import { Bookmark } from '@styled-icons/boxicons-solid/Bookmark';
import { Buildings } from '@styled-icons/boxicons-solid/Buildings';
import { Location } from '@styled-icons/icomoon/Location';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: #f8f9fa;
	padding: 0 50px;
	width: 75vw;
	height: calc(100vh - 50px - 70px);
	overflow-y: scroll;

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

export const Document = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: calc(100% - 50px);
	min-height: calc(60% - 40px);
	margin-top: 80px;
	border: solid 1px #dadce0;
	border-radius: 4px;
	padding: 20px 40px;
	background-color: white;

	&:hover {
		box-shadow: 0 6px 10px rgba(0,0,0,.11);
		transition: box-shadow .2s ease;
	}

	&:last-child {
		margin-bottom: 80px;
	}
`;

export const FirstLine = styled.div`
	display: flex;
	justify-content: space-between;
	cursor: pointer;
`;

export const Title = styled.div`
	font-size: 24px;
	font-family: 'bahnschrift';
`;

export const ShareIcon = styled(Share)`
	width: 20px;
	height: 20px;
	color: black;
	margin-left: 20px;
`;

export const BookmarkIcon = styled(Bookmark)`
	width: 20px;
	height: 20px;
	color: black;
	margin-left: 20px;
`;

export const CompanyInfo = styled.div`
	display: flex;

	> div {
		display: flex;
		align-items: center;
		font-family: 'bahnschrift';
		font-size: 16px;
		color: rgba(0,0,0,0.5);
		margin-right: 20px;
	}
`;

export const CompanyName = styled(Buildings)`
	width: 20px;
	height: 20px;
	color: rgba(0,0,0,0.24);
	margin-right: 8px;
`;

export const LocationIcon = styled(Location)`
	width: 20px;
	height: 20px;
	color: rgba(0,0,0,0.24);
	margin-right: 8px;
`;

export const Bar = styled.div`
	width: 100%;
	height: 1px;
	background-color: #dadce0;
	margin: 5px 0;
`;

export const JobInfo = styled.div`
	display: flex;
	flex-direction: column;

	> p {
		font-size: 16px;
		font-family: 'bahnschrift';
	}

	> ul {
		list-style: none;
	}

	> ul li {
		font-size: 16px;
		font-family: 'bahnschrift';
		color: rgba(0,0,0,0.85);
		line-height: 1.6;-
	}

	> ul li::before {
		content: '';
		display: inline-block;
		margin-right: 10px;
		width: 5px;
		height: 5px;
		border-radius: 50%;
		background-color: rgba(0,0,0,0.14);
		align-items: center;
	}
`;

export const Extra = styled.div`
	display: flex;
	justify-content: space-around;

	> a {
		text-decoration: none;
		color: #766df4;
		font-size: 16px;
		font-family: 'bahnschrift';
	}
`;