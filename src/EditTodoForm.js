import React , {useContext} from "react";
import {TextField} from "@mui/material";
import useInputState from "./hooks/useInputState";
import {DispatchContext} from "./context/todos.context";
function EditTodoForm({id , task , toggleEditForm}){
    const dispatch =  useContext(DispatchContext)
    const [value , handelChange , reset] = useInputState(task)
    return(
        <form onSubmit={e => {
            e.preventDefault()
            dispatch({type:"EDIT" , id:id , newTask:value})
            reset()
            toggleEditForm()
        }}
        style={{marginLeft:"0.8rem" ,width:"50%"}}>
            <TextField
                margin='normal'
                value={value}
                onChange={handelChange}
                fullWidth
                autoFocus
            />

        </form>
    )
}
export default EditTodoForm;