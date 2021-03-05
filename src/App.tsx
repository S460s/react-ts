import { useState } from 'react';
import Header from './components/Header';

const App = () => {
	const [projectName, setProjectName] = useState('');

	return (
		<div>
			<Header />
			<form>
				<label>
					Project Name
					<input
						type='text'
						value={projectName}
						onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
							setProjectName(event.target.value)
						}
					/>
				</label>
				<button>Submit</button>
			</form>
		</div>
	);
};

export default App;
