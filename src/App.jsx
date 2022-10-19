import { useState } from "react";
import "./App.css";
import { ClickCounter2 } from "./components/ClickCounter2";

    
        


function App(){
    const [num,setNum]=useState(0)

   const Incre =()=>{
    setNum(num + 1);
    }

    const Decre =()=>{
        setNum(num - 1);
        }


    return(
    <div className='main_div'>
        <div><h2>Click Counter</h2></div>
        <ClickCounter2 />
        <div className='btn_div'>
            <button onClick={Incre}>Incre</button>
            <h1>{num}</h1>
            <button onClick={Decre}>Decre</button>
        </div>
        
    </div>
    
    )

}
export default App;