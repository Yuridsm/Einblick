import styled from 'styled-components';

import { Share } from '@styled-icons/evaicons-solid/Share';
import { Bookmark } from '@styled-icons/boxicons-solid/Bookmark';
import { Buildings } from '@styled-icons/boxicons-solid/Buildings';
import { Location } from '@styled-icons/icomoon/Location';
import { Edit } from '@styled-icons/entypo/Edit';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 75vw;
	height: calc(100vh);
	background-color: red;
`;

export const Subcontainer = styled.div`
	display: flex;
	width: 100%;
	height: calc(100vh - 50px - 70px);
`;

export const DocumentSection = styled.div`
	display: flex;
	flex-direction: column;
	width: 75vw;
	height: calc(100vh - 50px - 70px);
	background-color: #fff;
	align-items: center;
	overflow-y: scroll;

	::-webkit-scrollbar {
		width: 8px;
	}
	
	::-webkit-scrollbar-thumb {
		background-color: #766df4;
		border-radius: 4px;
	}

	::-webkit-scrollbar-track {
		background-color: rgba(118,109,244,0.14);
	}
`;

export const Document = styled.div`
	display: flex;
	flex-direction: column;
	width: calc(85% - 40px - 40px);
	background-color: #fff;
	padding: 20px 40px;
	margin: 50px 0;
	box-shadow: 0 0px 5px 0px rgba(0,0,0, .2);
	border-radius: 4px;
`;

export const FirstLine = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const Title = styled.div`
	font-family: 'bahnschrift';
	font-size: 24px;
`;

export const ShareIcon = styled(Share)`
	width: 20px;
	height: 20px;
	color: #766df4;
	margin-left: 20px;
	cursor: pointer;
`;

export const BookmarkIcon = styled(Bookmark)`
	width: 20px;
	height: 20px;
	color: #766df4;
	margin-left: 20px;
	cursor: pointer;
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

export const Apply = styled.div`
	display: flex;
	justify-content: flex-end;

	> button {
		font-size: 16px;
		font-family: 'bahnschrift';
		padding: 8px 20px;
		cursor: pointer;
		border: none;
		background-color: #766df4;
		color: #fff;
		border-radius: 4px;
		box-shadow: 0 0px 2px 0px rgba(0,0,0, .15);
		outline: 0;
	}

	> button:hover {
		box-shadow: 1px 1px 10px -1px rgba(0,0,0, .2);
	}
`;

export const ApplyIcon = styled(Edit)`
	width: 20px;
	height: 20px;
	color: white;
	margin-right: 10px;
`;

export const Bar = styled.div`
	width: 100%;
	height: 1px;
	background-color: rgba(0,0,0, .2);
	margin: 10px 0;
`;

export const Note = styled.div``;

export const List = styled.div`
	display: flex;
	flex-direction: column;

	> p {
		font-size: 18px;
		font-family: 'bahnschrift';
		margin: 10px 0 0 0;
	}

	> ul {
		display: flex;
		list-style: none;
		flex-direction: column;
	}

	> ul div {
		display: flex;
		align-items: center;
		padding: 3px 0;
	}

	> ul div span {
		display: inline-block;
		width: 5px;
		height: 5px;
		border-radius: 50px;
		background-color: rgba(0,0,0, .2);
		margin-right: 10px;
	}

	> ul div li {
		font-size: 16px;
		font-family: 'bahnschrift';
		color: rgba(0,0,0,0.85);
	}
`;

export const About = styled.div`
	display: flex;
	justify-content: space-between;
	flex-direction: column;

	> h1 {
		font-size: 24px;
		font-family: 'bahnschrift';
		margin: 20px 0;
	}

	> p {
		font-size: 16px;
		font-family: 'bahnschrift';
		color: rgba(0,0,0,0.85);
		margin-bottom: 10px;
	}
`;