import React, { useState, useEffect } from "react";

import logo from "./Images/falcon.svg"
import { apiFetch, apiPost, apiDelete, apiUpdate, apiComplete } from "./Helpers/Api"

import Add from "./Components/Add";
import List from "./Components/List";
import Loader from "./Components/Loader";

function App() {
  const [tasks, setTasks] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [edited, setEdited] = useState(null);
  const [error, setError] = useState(null);

  const handleAdd = e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    let title = formData.get("title")
    let description = formData.get("description")

    const payload = { title, description }

    if (edited) {
      apiUpdate(setLoading, edited.id, payload)
      setEdited(null)
    } else {
      apiPost(setLoading, payload)
    }
    e.target.reset();
  };

  const handleEdit = (selectedTask) => {
    setEdited(selectedTask)
  }

  const handleComplete = (selectedTask, payload) => {
    apiComplete(setLoading, selectedTask, payload);
  }

  useEffect(() => {
    apiFetch(setTasks, setError);
    return () => {
      setTasks()
    }
  }, [isLoading])

  return (
    <div className="container">
      <img src={logo} className="logo" alt="Falcon.io logo" />

      <Add
        handleAdd={handleAdd}
        edited={edited}
      />

      {isLoading ?
        <Loader /> :
        <List
          tasks={tasks}
          handleDelete={apiDelete}
          handleLoading={setLoading}
          handleEdit={handleEdit}
          handleComplete={handleComplete}
          handleError={error}
        />}

      <span className="credit">
        Falcon.io homework by Balint Apro
      </span>
    </div>
  );
}

export default App;
