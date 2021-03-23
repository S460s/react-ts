import { DefaultTheme, keyframes } from 'styled-components';

const darkTheme: DefaultTheme = {
	borderRadius: '10px',
	// material UI dark color pallate

	fontSize: {
		small: '10px',
		medium: '15px',
		large: '20px',
	},

	animations: {
		fadeIn: keyframes`
			from{
				opacity: 0%;
				transform: scale(0.2) ;
			}
			to{
				opacity: 100%;
				transform: scale(1); 
			}
		`,
	},

	colors: {
		lightAccent: '#88b0b6',
		light: '#f5f6f6',
		primary: '#ea8f2d',
		darkAccent: '#ae6043',
		dark: '#324355',
	},
};

export { darkTheme };
