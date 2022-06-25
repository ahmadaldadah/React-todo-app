import React , {useContext} from "react";
import {Divider, List, Paper} from "@mui/material";
import {TodosContext} from "./context/todos.context";
import Todo from "./Todo";

function TodoList() {
    const todos = useContext(TodosContext);
    if (todos.length)
        return (
            <Paper>
                <List>
                    {todos.map((todo,i) => (
                        <React.Fragment key={todo.id}>
                            <Todo
                                {...todo}
                                key={todo.id}
                            />
                            <Divider/>
                        </React.Fragment>




                    ))}
                </List>

            </Paper>
        );
            return null;
}
export default TodoList