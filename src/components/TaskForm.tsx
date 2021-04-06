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
	margin-top: 350px;
`;

interface TaskFormProps {
	addTask(task: TaskInterface): void;
}

function TaskForm({ addTask }: TaskFormProps) {
	const [taskName, setTaskName] = useState<string>('');
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		e.preventDefault();
		setTaskName(e.target.value);
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsOpen(false);
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
				<h3>Task Form</h3>
				<Input
					required={true}
					type='text'
					value={taskName}
					onChange={handleChange}
					placeholder='Task Name'
				/>
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
