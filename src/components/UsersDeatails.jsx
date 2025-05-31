import { useNavigate, useParams } from "react-router-dom";
import { myContext } from "../context/Context";
import { useContext } from "react";

function UsersDeatails (){
    const Navigate = useNavigate();
    const {id} = useParams();
    const {user} = useContext(myContext);
   
    return (
        <div>
            <h1>Id : {user[id].id}</h1>
            <h1>Name : {user[id].name}</h1>
            <h1>Email : {user[id].email}</h1>
            <button onClick={() => Navigate(-1)}>Go Back</button>
        </div>
    )

}   
export default UsersDeatails;