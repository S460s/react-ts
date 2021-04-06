import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Button from '../common/StyledTask';
import { TaskInterface } from '../common/interfaces';

interface TaskProps extends TaskInterface {
	handleDelete(id: string): void;
	complete(id: string): void;
	edit(id: string, newName: string): void;
}

interface StyledTaskProps {
	isComplete: boolean;
}

const TaskWrapper = styled.div`
	animation: 2s linear ${({ theme }) => theme.animations.fadeIn};
	width: 70%;
`;

const StyledTask = styled.div<StyledTaskProps>`
	border: 3px solid ${({ theme }) => theme.colors.lightAccent};
	border-bottom: none;
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	max-width: 800px;
	min-width: 400px;
	margin-top: 10px;
	color: ${({ theme }) => theme.colors.dark};
	text-decoration: ${({ isComplete }) =>
		isComplete ? 'line-through' : 'none'};
	height: 60px;
`;
const Details = styled.div<{ on: boolean }>`
	max-width: 800px;
	min-width: 400px;
	width: 100%;
	border: 3px solid ${({ theme }) => theme.colors.lightAccent};
	border-top: none;
	height: ${({ on }) => (on ? 60 : 0)}px;
	transition: height 0.5s ease;
	overflow-y: hidden;
`;

const TaskTitle = styled.p`
	font-size: ${({ theme }) => theme.fontSize.large};
	cursor: pointer;
`;

const ButtonWrap = styled.div`
	width: 30%;
	height: 100%;
	display: flex;
	justify-content: space-between;
`;

const Input = styled.input`
	font-size: ${({ theme }) => theme.fontSize.large};
	border: none;
	width: 50%;
	border-bottom: solid 2px ${({ theme }) => theme.colors.dark};
	color: ${({ theme }) => theme.colors.dark};
	outline: none;
	margin-left: 10px;
`;

function Task({
	title,
	id,
	isDone,
	handleDelete,
	complete,
	edit,
}: TaskProps): JSX.Element {
	const [editMode, setEditMode] = useState(false);
	const [detailsMode, setDetailsMode] = useState(false);
	const [newTitle, setNewTitle] = useState(title);

	const toggleEdit = (): void => {
		if (!isDone) {
			setEditMode((prevState) => !prevState);
		}
	};

	const deleteTodo = (): void => {
		handleDelete(id);
	};

	const completeTodo = (): void => {
		complete(id);
	};

	const saveTodo = (): void => {
		edit(id, newTitle);
		toggleEdit();
	};

	return (
		<TaskWrapper
			onMouseEnter={() => setDetailsMode(true)}
			onMouseLeave={() => setDetailsMode(false)}>
			<StyledTask isComplete={isDone}>
				{!editMode ? (
					<React.Fragment>
						<TaskTitle onClick={completeTodo}>Task: {title}</TaskTitle>

						<ButtonWrap>
							<Button onClick={toggleEdit}>Edit</Button>
							<Button onClick={deleteTodo}>Delete</Button>
						</ButtonWrap>
					</React.Fragment>
				) : (
					<React.Fragment>
						<Input
							value={newTitle}
							onChange={(e) => setNewTitle(e.target.value)}
						/>
						<ButtonWrap>
							<Button onClick={saveTodo}>Save</Button>
							<Button onClick={toggleEdit}>Cancel</Button>
						</ButtonWrap>
					</React.Fragment>
				)}
			</StyledTask>
			<Details on={detailsMode}>
				<p>Details</p>
			</Details>
		</TaskWrapper>
	);
}

export default Task;
