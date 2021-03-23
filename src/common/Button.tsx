import styled from 'styled-components';
interface ButtonProps {
	isPrimary?: boolean;
}

const Button = styled.button<ButtonProps>`
	background-color: ${({ isPrimary, theme }) =>
		isPrimary ? theme.colors.primary : theme.colors.light};
	color: ${({ isPrimary, theme }) => (isPrimary ? theme.colors.light : theme.colors.primary)};
	width: 100px;
	outline: none;
	border: none;
	cursor: pointer;
	font-size: ${({ theme }) => theme.fontSize.medium};
`;

export default Button;
