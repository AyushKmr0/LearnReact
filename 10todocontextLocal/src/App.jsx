import { useEffect, useState } from "react";
import "./App.css";
import { TodoProvider } from "./context";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function App() {
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
    };

    const updateTodo = (id, todo) => {
        setTodos((prev) =>
            prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
        );
    };

    const deleteTodo = (id) => {
        setTodos((prev) => prev.filter((todo) => todo.id != id));
    };

    const toggleComplete = (id) => {
        setTodos((prev) =>
            prev.map((prevTodo) =>
                prevTodo.id === id
                    ? { ...prevTodo, completed: !prevTodo.completed }
                    : prevTodo
            )
        );
    };

    useEffect(() => {
        const todos = JSON.parse(localStorage.getItem("todos")) || [];

        if (todos && todos.length > 0) {
            setTodos(todos);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    return (
        <TodoProvider
            value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
        >
            <div className="bg-[#172842] min-h-screen min-w-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">
                        Manage Your Todos
                    </h1>
                    <div className="mb-4">
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {todos.map((todo) => (
                            <div key={todo.id} className="w-full">
                                <TodoItem todo={todo} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </TodoProvider>
    );
}

export default App;

// import React, { useState } from "react";
// import { TodoProvider } from "./context";

// function App() {
//     const [todos, setTodos] = useState([]);

//     const addTodo = (todo) => {
//         setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
//     };

//     const updateTodo = (id, todo) => {
//         setTodos((prev) =>
//             prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
//         );
//     };

//     const deleteTodo = (id) => {
//         setTodos((prev) => prev.filter((todo) => todo.id !== id));
//     };

//     const toggleCompleted = (id) => {
//         setTodos((prev) =>
//             prev.map((prevTodo) =>
//                 prevTodo.id === id
//                     ? { ...prevTodo, completed: !prevTodo.completed }
//                     : prevTodo
//             )
//         );
//     };

//     return (
//         <TodoProvider
//             value={{ todos, addTodo, updateTodo, deleteTodo, toggleCompleted }}
//         >
//             <div className="bg-[#172842] min-h-screen py-8">
//                 <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
//                     <h1 className="text-2xl font-bold text-center mb-8 mt-2">
//                         Manage Your Todos
//                     </h1>
//                     <div className="mb-4">{/* Todo form goes here */}</div>
//                     <div className="flex flex-wrap gap-y-3">
//                         {/*Loop and Add TodoItem here */}
//                     </div>
//                 </div>
//             </div>
//         </TodoProvider>
//     );
// }

// export default App;
