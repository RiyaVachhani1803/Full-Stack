import { useState } from 'react'
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
    let [todos, setTodos] = useState([]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () => {
    setTodos((prevTodos) => {
        return [...prevTodos, { task: newTodo, id: uuidv4(), isDone: false }];
        });        
        setNewTodo("");
    };

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    };

    let deleteTodo = (id) => {
        setTodos((prevTodos) => {
            return prevTodos.filter((todo) => todo.id !== id);
        });
    };

    let upperCaseAll = () => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) => {
                return { ...todo, task: todo.task.toUpperCase() };
            })
        );
    };

    let upperCaseOne = (id) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, task: todo.task.toUpperCase() };
                } else {
                    return todo;
                }
            })
        );
    };

    let MarkAsDone = (id) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, isDone:true};
                } else {
                    return todo;
                }
            })
        );
    };

    let MarkAllAsDone = () => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) => {
                return { ...todo, isDone:true};
            })
        );
    };

    return (
        <div>
            <h1>Todo List</h1>
            <input placeholder="Add a task" value={newTodo} onChange={updateTodoValue} /> 
            &nbsp; &nbsp;
            <button onClick={addNewTask}>Add Task</button>
            <br></br>
            <br></br>

            <h3>Tasks Todo :</h3>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <span style={todo.isDone ? { textDecoration: "line-through" } : {}}>
                            {todo.task}
                        </span>
                        &nbsp; &nbsp;
                        <button onClick={() => deleteTodo(todo.id)}>Delete</button> &nbsp; &nbsp;
                        <button onClick={() => upperCaseOne(todo.id)}>Uppercase</button> &nbsp; &nbsp;
                        <button onClick={() => MarkAsDone(todo.id)}>Mark As Done</button>

                    </li>
                ))}
            </ul>
            <br></br>
            <button onClick={upperCaseAll}>Uppercase All Tasks</button> &nbsp; &nbsp;
            <button onClick={MarkAllAsDone}>Mark All as Done</button>
        </div>
    );
}