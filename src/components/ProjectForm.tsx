import ProjectCard from './ProjectCard';
import uniqid from 'uniqid';
import { useState } from 'react';

interface IProject {
	title: string;
	id: string;
}

const ProjectForm = () => {
	const [projectName, setProjectName] = useState('');
	const [projects, setProjects] = useState<IProject[]>([]);

	const addProject = (e: React.FormEvent): void => {
		e.preventDefault();
		setProjects((prevState) => {
			const newProject: IProject = {
				title: projectName,
				id: uniqid(),
			};
			return [...prevState, newProject];
		});
	};

	const deleteProject = (id: string): void => {
		setProjects((prevList) => {
			const newList = prevList.filter((project) => {
				return project.id !== id;
			});
			return newList;
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
						onChange={(event: React.ChangeEvent<HTMLInputElement>): void =>
							setProjectName(event.target.value)
						}
					/>
				</label>
				<button>Add</button>
			</form>

			<div className='projectContainer'>
				{projects.map((project: IProject) => {
					return (
						<ProjectCard
							key={project.id}
							deleteProject={deleteProject}
							id={project.id}
							title={project.title}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default ProjectForm;
