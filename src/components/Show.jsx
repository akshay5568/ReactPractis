import axios from "axios";
import { useState } from "react";

function Show(){
  
    const [product , setProduct] = useState([]);
     
    const getData = async () => {
        let api = 'https://fakestoreapi.com/products'
        const data = await axios.get(api)
        setProduct(data.data);
    }


    return(
        <div>
            <h1>Show</h1>
            <button onClick={getData}>fatch Data From Api</button>
             <br /><br /><hr />
            {product.length > 0 ? product.map(item => <h1>{item.title}</h1>) : "Loading..."}
        </div>
    )
}

export default Show;