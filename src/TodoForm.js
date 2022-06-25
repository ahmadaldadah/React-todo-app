import React ,{useContext} from "react";
import {Paper, TextField} from "@mui/material";
import useInputState from "./hooks/useInputState";
import {DispatchContext} from "./context/todos.context";

function TodoForm() {
    const [value , handelChange , reset] = useInputState("");
    const dispatch = useContext(DispatchContext);
    return(
        <Paper style={{margin: "1rem 0" , padding : "0 1rem"}}>
            <form onSubmit={e=>{
                e.preventDefault();
                dispatch({type:"ADD" , task: value});
                reset();
            }}>
            <TextField value={value} onChange={handelChange} label="Add new todo" fullWidth margin="normal" />
            </form>
        </Paper>
    )

}
export default TodoForm