import React from 'react';

import { MenubarStyled } from './menubar.style';

export const Menubar = (props) => {
	return <MenubarStyled>{props.children}</MenubarStyled>
};