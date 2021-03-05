interface IProjectCardProps {
	title: string;
}

const ProjectCard = ({ title }: IProjectCardProps) => {
	return (
		<div className='ProjectCard'>
			<p>{title}</p>
			<button>Delete</button>
			<button>Edit</button>
		</div>
	);
};

export default ProjectCard;
