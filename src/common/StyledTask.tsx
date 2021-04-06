import styled from 'styled-components';
interface ButtonProps {
	isPrimary?: boolean;
}

const Button = styled.button<ButtonProps>`
	background-color: ${({ isPrimary, theme }) =>
		isPrimary ? theme.colors.primary : theme.colors.light};
	color: ${({ isPrimary, theme }) =>
		isPrimary ? theme.colors.light : theme.colors.primary};

	width: 120px;
	outline: none;
	border: none;
	cursor: pointer;
	font-size: ${({ theme }) => theme.fontSize.medium};
`;

export const Form = styled.form`
	width: 100vw;
	height: 30px;
	justify-content: center;
`;

export const Title = styled.h1`
	color: ${({ theme }) => theme.colors.primary};
	text-align: center;
`;

export const Input = styled.input`
	width: 50%;
	min-width: 300px;
	min-height: 30px;
	margin-top: 20px;
	outline: none;
	border: ${({ theme }) => theme.colors.primary} 2px solid;
`;

export default Button;
