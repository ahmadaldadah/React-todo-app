import React , {createContext } from "react";
import useLocalStorageReducer from "../hooks/useLocalStorageReducer";
import todosReducer from "../reducer/todos.reducer";
const defaultTodos = [
    {id: 1 , task:"Hello everyone" , completed:false},
    {id: 2 , task:"Bye everyone" , completed:true}
];

export const TodosContext = createContext(undefined);
export const DispatchContext = createContext(undefined);

export function TodosProvider(props) {

    const [todos, dispatch] = useLocalStorageReducer("todos",defaultTodos,todosReducer);
    return(
        <TodosContext.Provider value={todos}>
            <DispatchContext.Provider value={dispatch}>
                {props.children}
            </DispatchContext.Provider>
        </TodosContext.Provider>
    )
}