import React, { useCallback, useState } from 'react';
import {MdAdd} from "react-icons/md"
import "./TodoInsert.scss"

const TodoInsert = ({ onInsert }) => {
    const [value, setValue] = useState("");

    const onChange = useCallback((event)=>{
        setValue(event.target.value);
    },[]);

    const onSubmit = useCallback((event)=>{
        onInsert(value);
        setValue("");
        //submit이벤트 브라우저 새로고침 없앰
        event.preventDefault();
    },[onInsert,value]);

    return (
        <form className="TodoInsert" onSubmit={onSubmit}>
            <input placeholder="해야 할 일을 입력하세요." value={value} onChange={onChange}/>
            <button type="submit">
                <MdAdd/>
            </button>
        </form>
    );
};

export default TodoInsert;