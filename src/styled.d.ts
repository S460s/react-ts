import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		borderRadius: string;

		animations: {
			fadeIn: Keyframes;
		};

		fontSize: {
			small: string;
			medium: string;
			large: string;
		};

		colors: {
			light: string;
			lightAccent: string;
			dark: string;
			darkAccent: string;
			primary: string;
		};
	}
}
