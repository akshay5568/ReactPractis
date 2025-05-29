import axios from "axios";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Show(){
  
    const [product , setProduct] = useState([]);
     
    const getData = async () => {
        let api = 'https://fakestoreapi.com/products'
        const data = await axios.get(api)
        setProduct(data.data);
    }

    const Nav = useNavigate();
    const addData = () => {
        <NavLink to="/show/add"></NavLink>
        Nav('/show/add')
    }

    return(
        <div>
            <h1>Show</h1>
            <button onClick={getData}>fatch Data From Api</button>
            <button onClick={addData}>Add Data in Api</button>
             <br /><br /><hr />
            {product.length > 0 ? product.map(item => <h1>{item.title}</h1>) : "Loading..."}
        </div>
    )
}

export default Show;