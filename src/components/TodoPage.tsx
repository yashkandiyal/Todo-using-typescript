import React, { useState } from "react";
import TodoCard from "./TodoCard";

const TodoPage = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const [task, setTask] = useState<string>("");

  const captureTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  const addTodo = () => {
    if (task.trim() !== "") {
      setTodos([...todos, task]);
      setTask(""); // Clear input after adding todo
    }
  };

  const deleteTodo = (index: number) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div>
      <div className="flex justify-center mt-10">
        <input
          type="text"
          placeholder="Enter todo"
          className="border-2 border-black px-4 py-2 rounded-lg mr-2"
          value={task}
          onChange={captureTodo}
        />
        <button
          className="border-2 border-black bg-slate-400 px-4 py-2 rounded-lg"
          onClick={addTodo}>
          Add Todo
        </button>
      </div>

      <div className="flex flex-col justify-center items-center mt-4">
        {todos.length > 0 &&
          todos.map((item: string, index: number) => (
            <div key={index}>
              <TodoCard todo={item} onDelete={() => deleteTodo(index)} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default TodoPage;
