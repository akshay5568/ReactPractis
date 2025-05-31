import { data } from "autoprefixer";
import { useState } from "react";
import { useForm } from "react-hook-form";

function TodoList(){


    const [data,setData] = useState("");
    const [todos, setTodos] = useState([]);

const handleChange = (e) => {
    setData(e.target.value);
}
const handleSubmit = (e) => {
    e.preventDefault();
    if(data.trim() !== ""){
        setTodos([...todos,data]);
        setData("");
    }
}
 

    return (
        <div>
                <form action="" onSubmit={handleSubmit}>
                    <input type="text" name="todo" placeholder="create Todo" value={data} onChange={handleChange}/>
                <button>Add Todo</button>
                </form>
                {todos.map((item,index) => {
                    return <div className="flex">
                        <h1 className="pr-[55px]">{item}</h1>
                        <button onClick={()=> setTodos(prev => prev.filter((_,i) => i !== index))}>delete</button>
                    </div>
                })}
        </div>
    )
}

export default TodoList;