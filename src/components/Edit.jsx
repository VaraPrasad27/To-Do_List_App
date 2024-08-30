import DoneIcon from "@mui/icons-material/Done";
import { Fab, Zoom } from "@mui/material";
import { useState } from "react";

function Edit(props) {
  const [updatedTodo, setTodo] = useState(props.content);

  function handleClick() {
    props.onEdit(props.id, updatedTodo);
    props.onDone();
  }

  function handleChange(event) {
    const { value } = event.target;
    setTodo(value);
  }

  return (
    <div className="edit">
      <input type="text" value={updatedTodo} onChange={handleChange} />
      <Zoom className="done" in={true}>
        <Fab onClick={handleClick}>
          <DoneIcon />
        </Fab>
      </Zoom>
    </div>
  );
}

export default Edit;
