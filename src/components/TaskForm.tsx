import { useState } from 'react';
import Button, { Input, Form } from '../common/StyledTask';
import uniqid from 'uniqid';
import { TaskInterface } from './Task';

interface TaskFormProps {
	addTask(task: TaskInterface): void;
}

function TaskForm({ addTask }: TaskFormProps) {
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
			<Form onSubmit={handleSubmit}>
				<Input type='text' value={taskName} onChange={handleChange} />
				<Button isPrimary>Add</Button>
			</Form>
		</div>
	);
}

export default TaskForm;
