import React, { useState, useEffect, useRef } from "react";

import Add from "./Components/Add";
import List from "./Components/List";
import logo from "./Images/falcon.svg"
import { apiFetch, apiPost, apiDelete, apiUpdate } from "./Helpers/fetch"

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [edited, setEdited] = useState(null);
  const form = useRef(null);

  const handleAdd = e => {
    e.preventDefault();

    const formData = new FormData(e.target);

    let title = formData.get("title")
    let description = formData.get("description")


    if(edited) {
      apiUpdate(setLoading, edited.id, {
        title,
        description
      })
      setEdited(null)
    }
    else {
      apiPost(setLoading, {
        title,
        description
      })
    }
    e.target.reset();
  };

  const handleEdit = (selectedTask) => {
    setEdited(selectedTask)
  }

  useEffect(() => {
    apiFetch(setTasks);
    return () => {
      setTasks()
    }
  }, [loading])

  return (
    <div className="container">
      <img src={logo} className="logo" alt="Falcon.io logo" />

      <Add
        handleAdd={handleAdd}
        edited={edited}
        ref={form}
      />
      <List
        tasks={tasks}
        handleDelete={apiDelete}
        handleLoading={setLoading}
        handleEdit={handleEdit}
      />

      <span className="credit">
        Falcon.io homework by Balint Apro
      </span>
    </div>
  );
}

export default App;
