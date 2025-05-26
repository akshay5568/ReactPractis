import React,{useState} from "react";
import './index.css';
import Users from  "./components/Users";
import NavBar from "./components/Navbar";



function App(){

  let Data = [
    {songName: 'Tere Naina' , fav: false , artist: 'Akshay Kumar' , img:"https://images.unsplash.com/photo-1495434942214-9b525bba74e9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c29uZ3N8ZW58MHx8MHx8fDA%3D"},
    {songName: 'Tu Chale' , fav: true , artist: 'Chiyyan Vikram' , img:"https://images.unsplash.com/photo-1562603820-5afce6c86210?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNvbmdzfGVufDB8fDB8fHww"},
    {songName: 'Aa Aa gya' , fav: false , artist: 'Salman Khan' , img:"https://plus.unsplash.com/premium_photo-1680550633623-8dc4548fb751?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c29uZ3N8ZW58MHx8MHx8fDA%3D"},
    {songName: 'Jara sa Joom' , fav: false , artist: 'Srk' , img:"https://images.unsplash.com/photo-1583604518057-6c31e12d4e30?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNvbmdzfGVufDB8fDB8fHww"},
    
  ]

 const [songData, setSongData] = useState(Data);

const handleFav = (index) => {
  setSongData((prev) => {
    return prev.map((item,Setindex) => {
      if(Setindex === index){
        return {...item, fav:!item.fav}
      }
      return item;
    })
  })
}

  return (
    <div>
      <NavBar data={songData}/>
      <div className="userData">
        {songData.map((item,index) => (
        <Users key={index} data={item} index={index} handleFav={handleFav}/>
      ))}
      </div>
    </div>
  );
}


export default App;
