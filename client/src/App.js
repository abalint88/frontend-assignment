import React, { useState, useEffect } from "react";

import Add from "./Components/Add";
import List from "./Components/List";
import logo from "./Images/falcon.svg"
import { fetchApi, postApi } from "./Helpers/fetch"


function App() {
  const [tasks, setTasks] = useState([]);

  const serverEndproint = "http://localhost:1337/tasks"

  const handleAdd = e => {
    e.preventDefault();
    const formData = new FormData(e.target);

    let title = formData.get("title")
    let description = formData.get("description")
    
    postApi(serverEndproint, {
      title,
      description
    })
    e.target.reset();
    fetchApi(serverEndproint, setTasks);
  };

  useEffect(() => {
    fetchApi(serverEndproint, setTasks);
    return () => {
      setTasks()
    }
  }, [])

  return (
    <div className="container">
      <img src={logo} className="logo" alt="Falcon.io logo" />

      <Add handleAdd={handleAdd} />
      <List tasks={tasks} />

      <span className="credit">
        Falcon.io homework by Balint Apro
      </span>
    </div>
  );
}

export default App;
