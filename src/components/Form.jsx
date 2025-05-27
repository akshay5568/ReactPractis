import React from "react";
import { useForm } from "react-hook-form";
import "../form.css"
import { data } from "autoprefixer";

function Form({addData}){

    const { register, handleSubmit, reset } = useForm();
  
     let handleForm = (data) => {
         addData(data);
         reset();
     }
    
    return(
        <div className="form">
            <form action="" onSubmit={handleSubmit(handleForm)}>
                <input {...register('name') }type="text" placeholder="name" required/>
                <input {...register('email') }type="email" placeholder="email" required />
                <input {...register('img') }type="text" placeholder="img"  />
                <input {...register('des') }type="text" placeholder="description" required />
                <button>Submit</button>
            </form>
        </div>
    )
}


export default Form;