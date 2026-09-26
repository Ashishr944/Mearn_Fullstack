
const Students = () => {
    const students = [
      {id:1, name: "Ashish", status:"online" },
      {id:2, name: "Raju", status:"offline" },
      {id:3, name: "Bj", status:"online" }
    ]
  return (
    <div>
     { 
      students.length> 0 && students.map(item => 
        <li key={item.id}> {item.name}{item.status == "online" ? "🟢" : "🔴" } </li>
        )
      }
    </div>
  )
}

export default Students
