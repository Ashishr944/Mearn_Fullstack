// import React from 'react'

const Hello = () => {
  const name = "Ashish";
  const age = 20;

  function chechAge(){
    if( age > 18){
      return "Adult"
    }
    else{
      return "not adult"
    }
  }

  const isAdult = (age > 18) ? true : false;

  return (
    <div>
      <h1>Hello world {name}</h1>
      <h2>this person is: {chechAge()}</h2>
      <h2>this person is: {(age > 18) ? 'Adult': 'not adult'}</h2>
      {isAdult ? <div>This content is for Adult</div> : ""}
      {isAdult && <div>This content is for Adult</div>}
    </div>
  )
}

export default Hello
