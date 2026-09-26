import { use, useState } from "react"


const NameInput = () => {
    console.log("name is rendering");

    const [name, setName] = useState("");
    const [users, setUsers] = useState([]);
    const handleClick =() => {
        setUsers([...users, name]);
    }

    
  return (
    <div>
        <input type="text" 
        placeholder='enterName'
        onChange={(e) => setName(e.target.value)}
        />
        <button onClick={handleClick}>Add Name</button>
        <h2>Name: {name}</h2>

        <ul>
            {users.map((item, index) => <li key={index}>{item}</li>)}
        </ul>

    </div>
  )
}

export default NameInput
