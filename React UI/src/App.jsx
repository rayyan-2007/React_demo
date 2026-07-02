import "./App.css";
import Card from "./component/card/Card";
import { useState } from "react";
import Context from "./component/Context";
const App = () => {

   const [count, setCount] = useState(0);

     return (
     <> 
      <Context.Provider value = {{  Count:count, SetCount:setCount }}>
        <h1 className="count">Count:{count}</h1>
       <div className="app-container">
         <Card name="Joe Root" email="joe@gmail.com" btnname="click" />
         <Card name="Harry Brook" email="harry@gmail.com" btnname="click" />
         <Card name="Ben Stokes" email="ben@gmail.com" btnname="click" />
       </div>
      </Context.Provider>
     </>
    
     )
  
}
export default App
