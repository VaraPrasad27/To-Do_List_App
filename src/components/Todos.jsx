import { useState } from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function Todos(props) {
  const [style, setStyle] = useState("noLine");
  const [isHidden, setHidden] = useState(false);

  function handleClick() {
    props.onDelete(props.id);
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
        <h2 className={style}>{props.content}</h2>
      </div>

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
