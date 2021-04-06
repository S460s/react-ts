import React, { useReducer } from 'react';
import uniqid from 'uniqid';

import styled, { ThemeProvider } from 'styled-components';
import { darkTheme } from './theme';
import Button, { Title } from './common/StyledTask';

import Task from './components/Task';
import { checkStorage, populateStorage } from './helper/localStorageLogic';
import { TaskInterface } from './common/interfaces';

import TaskForm from './components/TaskForm';
import ProgressBar from './components/ProgressBar';

const BigBtn = styled(Button)`
	width: 150px;
	padding: 5px;
	margin-top: 10px;
`;

const TaskConteiner = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	flex-wrap: nowrap;
	justify-content: center;
	height: max-content;
	width: 100vw;
`;

type ACTIONTYPE =
	| { type: 'add'; payload: TaskInterface }
	| { type: 'edit'; payload: { id: string; newName: string } }
	| { type: 'delete'; payload: string }
	| { type: 'complete'; payload: string }
	| { type: 'clear' };

const initialValue: TaskInterface[] | [] = checkStorage<any[]>('tasks', []);

function reducer(state: typeof initialValue, action: ACTIONTYPE) {
	let value: TaskInterface[] | null = null;
	switch (action.type) {
		case 'add':
			value = [
				...state,
				{
					title: action.payload.title,
					dueDate: action.payload.dueDate,
					isDone: false,
					id: uniqid(),
				},
			];
			break;

		case 'delete':
			value = state.filter((todo) => todo.id !== action.payload);
			break;

		case 'complete':
			value = state.map((task: TaskInterface) => {
				return task.id === action.payload
					? { ...task, isDone: !task.isDone }
					: task;
			});
			break;

		case 'edit':
			value = state.map((task: TaskInterface) => {
				return task.id === action.payload.id
					? { ...task, title: action.payload.newName }
					: task;
			});
			break;

		case 'clear':
			value = state.filter((task: TaskInterface) => {
				return !task.isDone;
			});
			break;

		default:
			throw new Error();
	}
	populateStorage<TaskInterface[]>(value, 'tasks');
	return value;
}

const App = () => {
	const [tasks, dispatch] = useReducer(reducer, initialValue);

	const handleAddTask = (task: TaskInterface) => {
		dispatch({ type: 'add', payload: task });
	};

	const handleDelete = (id: string): void => {
		dispatch({ type: 'delete', payload: id });
	};

	const complete = (id: string): void => {
		dispatch({ type: 'complete', payload: id });
	};

	const editTask = (id: string, newName: string): void => {
		dispatch({ type: 'edit', payload: { id, newName } });
	};

	const clearCompletedTasks = (): void => {
		dispatch({ type: 'clear' });
	};

	const todoComponents = tasks.map((task: TaskInterface) => {
		return (
			<Task
				key={task.id}
				title={task.title}
				dueDate={task.dueDate}
				id={task.id}
				isDone={task.isDone}
				handleDelete={handleDelete}
				complete={complete}
				edit={editTask}
			/>
		);
	});

	return (
		<ThemeProvider theme={darkTheme}>
			<Title>Task App</Title>
			<TaskForm addTask={handleAddTask} />
			<ProgressBar tasks={tasks} />
			<TaskConteiner>
				{todoComponents}
				<BigBtn onClick={clearCompletedTasks} isPrimary>
					Clear
				</BigBtn>
			</TaskConteiner>
		</ThemeProvider>
	);
};

export default App;
