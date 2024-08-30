import { useState } from "react";
import Header from "./components/Header";
import CreateArea from "./components/CreateArea";
import Todos from "./components/Todos";

function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(newTodo) {
    setTodos((prevTodos) => {
      return [...prevTodos, newTodo];
    });
  }

  function editTodo(id, updatedTodo) {
    setTodos((prevTodos) => {
      return prevTodos.map((todoItem, index) => {
        if (index === id) {
          return updatedTodo;
        } else {
          return todoItem;
        }
      });
    });
  }

  function deleteTodo(id) {
    setTodos((prevTodos) => {
      return prevTodos.filter((todoItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addTodo} />
      <ul>
        {todos.map((todoItem, index) => {
          return (
            <li>
              <Todos
                key={index}
                id={index}
                content={todoItem}
                onEdit={editTodo}
                onDelete={deleteTodo}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
