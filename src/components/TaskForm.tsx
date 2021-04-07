import { useState } from 'react';
import Button, { Form, Input } from '../common/StyledTask';
import uniqid from 'uniqid';
import { TaskInterface } from '../common/interfaces';
import styled from 'styled-components';

interface StyledFormProps {
	isOpen: boolean;
}

const FormButton = styled(Button)`
	display: block;
	margin: auto;
	width: 150px;
	padding: 5px;
	margin-top: 10px;
`;

const StyledTaskForm = styled(Form)<StyledFormProps>`
	display: flex;
	z-index: ${({ isOpen }) => (isOpen ? 4 : -1)};
	opacity: ${({ isOpen }) => (isOpen ? 100 : 0)}%;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	width: 40vw;
	max-width: 800px;
	height: 500px;
	background-color: ${({ theme }) => theme.colors.light};
	border: 3px solid ${({ theme }) => theme.colors.dark};
	transform: scale(1.1);
	transition: all 0.5s linear;

	position: absolute;
	left: 0;
	right: 0;
	margin-left: auto;
	margin-right: auto;
`;

const ButtonWrapper = styled.div`
	display: flex;
	justify-content: space-around;
	width: 70%;
	height: 40px;
	margin-top: 320px;
`;

interface TaskFormProps {
	addTask(task: TaskInterface): void;
}

function TaskForm({ addTask }: TaskFormProps) {
	const [taskName, setTaskName] = useState<string>('');
	const [dueDate, setDueDate] = useState('');
	const [isOpen, setIsOpen] = useState<boolean>(false);
	console.log(isOpen);
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsOpen(false);
		const task: TaskInterface = {
			title: taskName,
			dueDate,
			isDone: false,
			id: uniqid(),
		};
		addTask(task);
		setTaskName('');
	};

	return (
		<div>
			<StyledTaskForm isOpen={isOpen} onSubmit={handleSubmit}>
				<h3>Task Form</h3>
				<label>
					<span>Title:</span>
					<Input
						required
						type='text'
						value={taskName}
						onChange={(e) => setTaskName(e.target.value)}
						placeholder='Task Name'
					/>
				</label>
				<label>
					<span>Due Date: </span>
					<Input
						required
						type='date'
						value={dueDate}
						onChange={(e) => setDueDate(e.target.value)}
						min={new Date().toISOString().split('T')[0]}
					/>
				</label>
				<ButtonWrapper>
					<Button type='submit' isPrimary>
						Add
					</Button>
					<Button type='button' isPrimary onClick={() => setIsOpen(false)}>
						Cancel
					</Button>
				</ButtonWrapper>
			</StyledTaskForm>
			<FormButton
				type='button'
				onClick={() => setIsOpen((prevState) => !prevState)}
				isPrimary>
				Add Task
			</FormButton>
		</div>
	);
}

export default TaskForm;
