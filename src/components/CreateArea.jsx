import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";

function CreateArea(props) {
  const [todo, setTodo] = useState("");

  function handleChange(event) {
    const { value } = event.target;
    // console.log(value);
    setTodo(value);
  }

  function handleClick() {
    props.onAdd(todo);
    setTodo("");
  }

  return (
    <div className="create-todo">
      <input
        type="text"
        value={todo}
        placeholder="Add your todo"
        onChange={handleChange}
      />

      {/* add button */}
      <Fab onClick={handleClick}>
        {" "}
        <AddIcon />{" "}
      </Fab>
    </div>
  );
}

export default CreateArea;
