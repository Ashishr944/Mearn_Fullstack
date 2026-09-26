import A from "./A";
const Greeetings = (prop) => {
    console.log(prop);
  return (
    <div>
      <h2>Hii {prop.name}</h2>
      <A name= {prop.name}/>
    </div>
  )
}

export default Greeetings
