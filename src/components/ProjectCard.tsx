interface IProjectCardProps {
	title: string;
	id: string;
	deleteProject: (id: string) => void;
}

const ProjectCard = ({ title, id, deleteProject }: IProjectCardProps) => {
	return (
		<div className='ProjectCard'>
			<p>{title}</p>
			<button onClick={() => deleteProject(id)}>Delete</button>
			<button>Edit</button>
		</div>
	);
};

export default ProjectCard;
