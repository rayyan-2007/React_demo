import { useContext } from "react";
import Context from "../Context";

const Button = ({ BtnName }) => {
     
     const data = useContext(Context);
     console.log(data);
    
    return (
     <>
      <button className="card-button" onClick={(()=>{data.SetCount(data.Count+1)})}>{BtnName}</button>
    </>
  )
};
export default Button;
