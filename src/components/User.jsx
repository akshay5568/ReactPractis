
import { Link } from "react-router-dom";


function User(){
    return (
       <>
       <div className="">
        <h1>User</h1>
        <p>Welcome to the User Page</p>

       <div className="flex w-1/2 flex-col mb-3"> 
        <Link to="/user/aditya" >Aditya</Link>
        <Link to="/user/anisha" >Aditya</Link>
        <Link to="/user/ireland" >Aditya</Link>
       </div>

      </div>
       </> 
    )
}

export default User;