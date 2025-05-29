import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Adddata(){
   const {register, handleSubmit, reset} = useForm();

   const handleForm =  (data) => {
       const {title,description,price} = data;
       reset();
       addDataInApi(title,description,price);
   }

    const addDataInApi =  async (title,description,price) => {
        let api = 'https://fakestoreapi.com/products';
        const data = {title,description,price};
        const dataSendToApi = await axios.post(api,data);
        console.log(data);
        console.log(dataSendToApi);
   }

   const naviGate = useNavigate();
   const Navi = () => {
       naviGate("/show");
   }
   

    return (
        <div>
            <h1>AddData</h1>
            <form action='' onSubmit={handleSubmit(handleForm)}>
                    <input {...register('title')} type="text" placeholder="title" required />
                    <input {...register('price')} type="number" placeholder="price" required/>
                    <input {...register('description')} type="text" placeholder="description" required/>
                    <button>Submit</button>
            </form>

            <br /><br />
            <hr />
            <button onClick={Navi}>Go Back</button>
        </div>
    )
}

export default Adddata;