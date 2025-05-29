import { useNavigate, useParams } from "react-router-dom";


function Hello(){
     const {name} = useParams();
     const Navi = useNavigate();   
     const goBack = () => {
            Navi(-1);
     }  
     return (
    <div>
     <h1>Hello {name}</h1>
     <button onClick={goBack}>Go back</button>
    </div> 
    )   
}


export default Hello;