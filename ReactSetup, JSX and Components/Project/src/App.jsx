import Hello from "./Components/Hello"
import Test from "./Components/Test"
import Greeetings from "./Components/Greeetings"
import Greet2 from "./Components/Greet2"
import Card from "./Components/card"
import Students from "./Components/Students"
import Products from "./Components/Products"
const App = () => {

  const name = "Ashish";

  return (
    <div>
      <Hello />
      <Test />
      <Greeetings name ={"Ashish"} />
      <Greet2 
      name={name} 
      age={23}
      />
      <Card title={"Demo card"}>
        <p>Javascript</p>
        <p>Duration 4 week</p>
      </Card>


      <Students/>
      <Products/>



     
    </div>
  )
}

export default App
