import { useState } from 'react';
import Header from './components/Header';

/* interface IProjetc {
	name: string;
} */

const App = () => {
	const [projectName, setProjectName] = useState('');
	const [projects, setProjects] = useState<string[]>([]);
	const addProject = (e: React.FormEvent): void => {
		e.preventDefault();
		setProjects((prevState) => {
			return [...prevState, projectName];
		});
	};

	return (
		<div>
			<Header />
			<form onSubmit={addProject}>
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
				<button>Add</button>
			</form>

			<div className='projectContainer'>
				{projects.map((project) => {
					return <p>{project}</p>;
				})}
			</div>
		</div>
	);
};

export default App;
