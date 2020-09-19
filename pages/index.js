import { useState, useEffect } from "react";

//components imports
import Card from "../components/card";
import TodoForm from "../components/todoform";

export default function Home() {
  const [todos, setTodos] = useState([{}]);
  const [todo, setTodo] = useState("");

  useEffect(() => {
    const stuff = localStorage.getItem("todos");
    if (stuff) {
      setTodos(JSON.parse(stuff));
    }
  }, []);

  return (
    <div>
      <div className="container">
        <TodoForm
          todos={todos}
          todo={todo}
          setTodos={setTodos}
          setTodo={setTodo}
        />
        {todos.map((item, index) => (
          <Card
            item={item.name}
            index={item.id}
            todos={todos}
            setTodos={setTodos}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}
