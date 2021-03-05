interface IProjectCard {
	title: string;
}

const ProjectCard = ({ title }: IProjectCard): React.ReactNode => {
	return (
		<div className='ProjectCard'>
			<p>{title}</p>
			<button>Delete</button>
			<button>Edit</button>
		</div>
	);
};

export default ProjectCard;
