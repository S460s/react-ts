import { useState } from 'react';
import Button, { Form, Input } from '../common/StyledTask';
import uniqid from 'uniqid';
import { TaskInterface } from '../common/interfaces';
import styled from 'styled-components';

interface StyledFormProps {
	isOpen: boolean;
}

const StyledTaskForm = styled(Form)<StyledFormProps>`
	display: ${(props) => (props.isOpen ? 'flex' : 'none')};
`;

interface TaskFormProps {
	addTask(task: TaskInterface): void;
	isOpen: boolean;
}

function TaskForm({ addTask, isOpen }: TaskFormProps) {
	const [taskName, setTaskName] = useState<string>('');

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		e.preventDefault();
		setTaskName(e.target.value);
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const task: TaskInterface = {
			title: taskName,
			isDone: false,
			id: uniqid(),
		};
		addTask(task);
		setTaskName('');
	};

	return (
		<div>
			<StyledTaskForm isOpen={isOpen} onSubmit={handleSubmit}>
				<Input
					type='text'
					value={taskName}
					onChange={handleChange}
					placeholder='Task Name'
				/>
				<Button isPrimary>Add</Button>
			</StyledTaskForm>
		</div>
	);
}

export default TaskForm;
