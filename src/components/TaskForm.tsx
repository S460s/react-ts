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
	display: ${(props) => (props.isOpen ? 'flex' : 'none')};
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	margin: auto;
	width: 50%;
	max-width: 500px;
	height: 500px;
	background-color: ${({ theme }) => theme.colors.light};
	z-index: 4;
	border: 3px solid ${({ theme }) => theme.colors.dark};
	position: absolute;
	left: 50%;
	transform: translate(-50%, 0);
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
						required={true}
						type='text'
						value={taskName}
						onChange={(e) => setTaskName(e.target.value)}
						placeholder='Task Name'
					/>
				</label>
				<label>
					<span>Due Date: </span>
					<Input
						required={true}
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
