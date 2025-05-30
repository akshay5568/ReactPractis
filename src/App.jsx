import TodoList from "./components/TodoList";
import NavBar from "./components/Navbar";
import Routess from "./Router/Routess";


function App(){
   return (
    <div>
        <NavBar />
        <Routess />
        <TodoList/>
    </div>
   )
}


export default App;