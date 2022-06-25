import {useState} from "react";

function useInputState(initialVal){
    const [value , setValue] = useState(initialVal);

    const handelChange = e =>{
        setValue(e.target.value);
    };
    const reset = () => {
        setValue("");
    }
    return [ value , handelChange , reset];
};
export default useInputState
