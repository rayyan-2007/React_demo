import "./App.css";
import Card from "./component/card/Card";
const App = () => {
    return (
       <>
    <div className="app-container">
      <Card name="Joe Root" email="joe@gmail.com" btnname="click"/>
      <Card name="Harry Brook" email="harry@gmail.com" btnname="click"/>
      <Card name="Ben Stokes" email="ben@gmail.com" btnname="click"/>
    </div>
    </>
    ) 
}
export default App
