// create profilecard components
const Card = ({data})=>{
    return(
        <div className="profile">
      <h2>Hi There👋</h2>
      <img src={data.image} alt={data.name} />
      <p>My name is {data.name} and I am {data.age} years old.</p>
      <h2>About Me:</h2>
      <p>{data.bio}</p>
    </div>
  );
}


export default Card;