import React , {useContext , memo} from "react";
import useToggle from "./hooks/useToggle";
import EditTodoForm from "./EditTodoForm";
import {Checkbox, IconButton, ListItem, ListItemSecondaryAction, ListItemText} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {DispatchContext} from "./context/todos.context";

function Todo({id ,task, completed}) {
    const dispatch = useContext(DispatchContext)
    const [isEditing , toggle] = useToggle(false);
    return (
        <ListItem style={{height:"64px"}} >
            {isEditing ? <EditTodoForm id={id} task={task} toggleEditForm={toggle} /> :
                <>
                    <Checkbox
                        onClick={() => dispatch({type:"TOGGLE" , id:id})} tabIndex={-1}
                        checked={completed}/>
                    <ListItemText style={{ textDecoration: completed ? "line-through" : "none"}}>
                        {task}
                    </ListItemText>
                    <ListItemSecondaryAction>
                        <IconButton onClick={() => dispatch({type:"REMOVE" , id:id})} aria-label="Delete">
                            <DeleteIcon/>
                        </IconButton>
                        <IconButton  aria-label="Edit" onClick={toggle}>
                            <EditIcon/>
                        </IconButton>

                    </ListItemSecondaryAction>
                </>

            }


        </ListItem>
    )
}
export default memo(Todo) ;