import styled from 'styled-components';
import { setColor, setRem, setLetterSpacing, setFonts, setFont, setBorder, setTransition } from '../../styles';

export const PrimaryBtn = styled.button`
	display: inline-block;
	background: ${setColor.primaryColor};
	color: ${setColor.mainWhite};
	text-transform: capitalize;
	font-size: ${setRem(18)};
	${setFont.main};
	padding: ${setRem(17)} ${setRem(36)};
	${setBorder({ setColor: setColor.primaryColor })};
	${setLetterSpacing(3)};
	${setTransition({ time: '2s' })};
	&:hover {
		background: transparent;
		color: ${setColor.primaryColor};
		cursor: pointer;
	}
	${(props) => `margin: ${props.t || 0} ${props.r || 0} ${props.b || 0} ${props.l || 0}`};
	text-decoration: none;
`;

export const SmallBtn = styled(PrimaryBtn)`
  padding: ${setRem(9)} ${setRem(12)};
`;
