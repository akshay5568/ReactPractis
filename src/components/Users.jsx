import { useContext } from "react";
import { myContext } from "../context/Context";
import { Link, useNavigate } from "react-router-dom";


function userList(){
    const {user,setUser} =  useContext(myContext);
    const Navigate = useNavigate();
    return (
        <div>
            {user.map(u => <Link to={`/contextapi/${u.id}`}>{u.name}</Link>)}
            <button onClick={()=> Navigate(-1)}>Go Back</button>
        </div>
    )
}

export default userList;