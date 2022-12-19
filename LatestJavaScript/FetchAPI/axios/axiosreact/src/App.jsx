import React, { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
function App() {
  const [data, setData] = useState([]);
  //! using plain axios get
  // useEffect(() => {
  //   axios.get("https://jsonplaceholder.typicode.com/posts")
  //     .then((res) => setData(res.data))
  //     .catch((err) => console.log(err))
  // }, [])
  //! using axios with async 
  useEffect(() => {
    (async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setData(res.data)
    })()
  }, [])

  return (
    <div className="App">
      <h1>Axios Tutorial</h1>
      {data.map((post) => {
        const { id, title, body } = post
        return (
          <div key={id}>
            <h2>{title}</h2>
            <p>{body}</p>
          </div>
        )
      })}
    </div>
  )
}

export default App
