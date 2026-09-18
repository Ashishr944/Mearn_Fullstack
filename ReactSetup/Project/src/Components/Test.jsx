import "./style.css"

const Test = () => {
    const name = ["Ashish", "a", "b"];
    const dogImgUrl = "https://www.taiyogroup.in/wp-content/uploads/2024/05/Taiyo-Category-Dog-Image.jpg";

    
   
  return (
    <div>
     

     <ul>
      {
      name.map((item)=> {
      <li>{item}</li>
      })
      }
      {
      name.map((item)=>{ 
        return <li>{item}</li>
        })
      }
     </ul>




     
     <ul>
      <img src={dogImgUrl}/>

     </ul>
  
      {/* Style in css */}
     <ul>
      {/* <div className="box"></div> */}

      <div 
      style= {{
          height: "200px",
          width: "500px",
          backgroundColor: "red",
          display: "flex",
          justifyContent: "center",
          alignItems: "center" 
        }}>
      
      </div>
     </ul>
    </div>
  )
}

export default Test
