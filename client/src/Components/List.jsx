function List({ tasks, handleDelete, handleEdit, handleComplete, handleLoading }) {
    const errorMessage = {
        "title": "No tasks Found!",
        "description": "Please add a new task using the form above."
    }

    const handleKeyDown = (event, fnToPass) => {
        if (event === "keydown" && event.key === 'Enter') {
            return fnToPass
        }
    }

    return (
        <div className="list">
            {(tasks && (tasks.length === 0 || tasks === [])) ? (
                <div className={"card error"}>
                    <h2>{errorMessage.title}</h2>
                    <p>{errorMessage.description}</p>
                </div>
            ) : (
                tasks && tasks.map((task) => (
                    <div key={task.id} className={`card ${task.complete ? "completed" : ""}`}>
                        <h2>{task.title}</h2>
                        <p>{task.description}</p>
                        <div className="sidepanel">
                            <span className="complete" role="button"
                                tabIndex={0}
                                onKeyDown={(e) => handleKeyDown(e, handleComplete(task.id, task))}
                                onClick={() => { handleComplete(task.id, task) }}>✔</span>
                            <span className="edit" role="button"
                                tabIndex={0}
                                onKeyDown={(e) => handleKeyDown(e, handleEdit(task))}
                                onClick={() => { handleEdit(task) }}>✏</span>
                            <span className="delete" role="button"
                                tabIndex={0}
                                onKeyDown={(e) => handleKeyDown(e, handleDelete(handleLoading, task.id))}
                                onClick={() => { handleDelete(handleLoading, task.id) }}>🗑</span>
                        </div>
                    </div>)
                ))}
        </div>
    );
}

export default List;
