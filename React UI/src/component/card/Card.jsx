import Button from "../button/Button";

const Card = (props_object) => {
        const { name, email, btnname } = props_object;
        console.log(name,email,btnname)
    return (
         <>
    <div className="card-container">

       <div className="card-content">
        <h1 className="card-name">{name}</h1>
        <p className="card-email">{email}</p>
      </div>

      <div className="card-btn">
        <Button BtnName={btnname} />
      </div>
      
    </div>
    </>
    )
  
};

export default Card;
