import { useState } from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";
import EditIcon from "@mui/icons-material/Edit";
import Edit from "./Edit";

function Todos(props) {
  const [style, setStyle] = useState("noLine");
  const [isHidden, setHidden] = useState(false);
  const [isEditing, setEditing] = useState(false);

  function onEdit(id, content) {
    props.onEdit(id, content);
  }

  function handleClick() {
    props.onDelete(props.id);
  }

  function handleEdit() {
    if (isEditing) {
      setEditing(false);
    } else {
      setEditing(true);
    }
  }

  function handleCheck(event) {
    const { checked } = event.target;
    // console.log(checked);
    if (checked) {
      setStyle("line");
      setHidden(true);
    } else {
      setStyle("noLine");
      setHidden(false);
    }
  }

  return (
    <div className="todo">
      <div>
        <input
          type="checkbox"
          name="complet-check"
          id="check"
          onClick={handleCheck}
        />

        {isEditing ? (
          <Edit
            id={props.id}
            content={props.content}
            onEdit={onEdit}
            onDone={handleEdit}
          />
        ) : (
          <h2 className={style}>{props.content}</h2>
        )}
      </div>

      {/* edit button */}
      <Zoom in={!isHidden}>
        <Fab onClick={handleEdit}>
          <EditIcon />
        </Fab>
      </Zoom>

      {/* delete button */}
      <Zoom in={isHidden}>
        <Fab onClick={handleClick}>
          {" "}
          <DeleteOutlineIcon />{" "}
        </Fab>
      </Zoom>
    </div>
  );
}

export default Todos;
