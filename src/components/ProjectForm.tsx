import ProjectCard from './ProjectCard';
import uniqid from 'uniqid';
import { useState } from 'react';

const ProjectForm = () => {
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
				{projects.map((project: string) => {
					return <ProjectCard key={uniqid()} title={project} />;
				})}
			</div>
		</div>
	);
};

export default ProjectForm;
