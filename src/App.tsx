import React, { useReducer, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Task, { TaskInterface } from './components/Task';
import { darkTheme } from './theme';
import uniqid from 'uniqid';
import Button, { Input, Form, Title } from './common/StyledTask';
import { checkStorage, populateStorage, getData } from './helper/localStorageLogic';
const ClearBtn = styled(Button)`
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

function setInitialTasks() {
	if (checkStorage('tasks')) {
		return getData('tasks');
	}
	return [];
}

const initialValue: TaskInterface[] | [] = setInitialTasks();

function reducer(state: typeof initialValue, action: ACTIONTYPE) {
	switch (action.type) {
		case 'add':
			const tasks = [...state, { title: action.payload.title, isDone: false, id: uniqid() }];
			populateStorage(tasks, 'tasks');
			return [...state, { title: action.payload.title, isDone: false, id: uniqid() }];

		case 'delete':
			return state.filter((todo) => todo.id !== action.payload);

		case 'complete':
			return state.map((task: TaskInterface) => {
				return task.id === action.payload ? { ...task, isDone: !task.isDone } : task;
			});

		case 'edit':
			return state.map((task: TaskInterface) => {
				return task.id === action.payload.id ? { ...task, title: action.payload.newName } : task;
			});
		case 'clear':
			return state.filter((task: TaskInterface) => {
				return !task.isDone;
			});
		default:
			throw new Error();
	}
}

const App = () => {
	const [tasks, dispatch] = useReducer(reducer, initialValue);
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
		dispatch({ type: 'add', payload: task });
		setTaskName('');
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
			<Form onSubmit={handleSubmit}>
				<Input type='text' value={taskName} onChange={handleChange} />
				<Button isPrimary>Add</Button>
			</Form>
			<TaskConteiner>
				<ClearBtn onClick={clearCompletedTasks} isPrimary>
					Delete Completed Tasks
				</ClearBtn>
				{todoComponents}
			</TaskConteiner>
		</ThemeProvider>
	);
};

export default App;
