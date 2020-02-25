import React, { useState } from 'react';
import './App.css';


const App = () => {

  const [query, setQuery] = useState('');
  const [data, setData]   = useState({});

  const changeHandler = e => {
    setQuery(e.target.value)
  }
  
  const submitHandler = e => {
    if(e.key === 'Enter') {
      fetch('https://my-json-server.typicode.com/SChoolWab/fakeAPI/db')
      .then(res => res.json())
      .then(result => {
        setData(result);
      })
      console.log(data)
    }
  }
  return (
    <div className="app">
      <input
        type = "text"
        className= "search-bar"
        placeholder = "Search"
        onChange = { changeHandler }
        value = { query }
        onKeyPress = { submitHandler }
      />

    <div className="box">
      <h1>Sofiqul Islam</h1>
      <p>Graphics Designer</p>
    </div>
    

  </div>
  )
}

export default App;
