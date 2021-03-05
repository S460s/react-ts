import ProjectCard from './ProjectCard';
import uniqid from 'uniqid';
import { useState } from 'react';

interface IProject {
	title: string;
	id: number;
}

const ProjectForm = () => {
	const [projectName, setProjectName] = useState('');
	const [projects, setProjects] = useState<IProject[]>([]);

	const addProject = (e: React.FormEvent): void => {
		e.preventDefault();
		setProjects((prevState) => {
			const newProject: IProject = {
				title: projectName,
				id: +uniqid(),
			};
			return [...prevState, newProject];
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
				{projects.map((project: IProject) => {
					return <ProjectCard key={project.id} title={project.title} />;
				})}
			</div>
		</div>
	);
};

export default ProjectForm;
