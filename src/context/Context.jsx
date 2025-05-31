import { createContext } from "react";
import { useState } from "react";

export const  myContext = createContext();


const Context = (props) => {
    const [user, setUser] = useState([
        {id: 0, name: "John Doe", email: "john@example.com"},
        {id: 1, name: "Jane Doe", email: "jane@example.com"},
        {id: 2, name: "Bob Smith", email: "bob@example.com"}
    ]);


return <myContext.Provider value={{user, setUser}}>{props.children}</myContext.Provider>

}



export default Context;