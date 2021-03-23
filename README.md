const App = () => {
const [todos, setTodos] = useState<null | TaskInterface[]>(null);
const [taskName, setTaskName] = useState<string>('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    	e.preventDefault();
    	setTaskName(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    	e.preventDefault();
    	setTodos((prevTodos) => {
    		if (prevTodos) {
    			return [...prevTodos, { title: taskName, isDone: false, id: uniqid() }];
    		}
    		return [{ title: taskName, isDone: false, id: uniqid() }];
    	});
    	setTaskName('');
    };

    const handleDelete = (id: string) => {
    	setTodos((prevTodos) => {
    		return prevTodos!.filter((todo) => todo.id !== id);
    	});
    };

    const complete = (id: string) => {
    	setTodos((prevTodos) => {
    		return prevTodos!.map((task) => {
    			if (task.id === id) {
    				return { ...task, isDone: !task.isDone };
    			}
    			return task;
    		});
    	});
    };

    const todoComponents = todos?.map((task: TaskInterface) => {
    	return (
    		<Task
    			key={task.id}
    			title={task.title}
    			id={task.id}
    			isDone={task.isDone}
    			handleDelete={handleDelete}
    			complete={complete}
    		/>
    	);
    });

    return (
    	<ThemeProvider theme={darkTheme}>
    		<form onSubmit={handleSubmit}>
    			<input type='text' value={taskName} onChange={handleChange} />
    			<button>Add</button>
    		</form>
    		{todoComponents}
    	</ThemeProvider>
    );

};

export default App;
