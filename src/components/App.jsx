import React, { useState } from "react";

function App() {

  const [task, addTask] = useState("")

  const [list, setList] = useState([])

  function handleChange(event) {
    addTask(event.target.value)
  }

  function handleClick(){
    setList(prevValue => {
      return[ ...prevValue, task];
    })
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" value={task} onChange={handleChange}/>
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {list.map((item) => {
            return <li>{item}</li>
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
