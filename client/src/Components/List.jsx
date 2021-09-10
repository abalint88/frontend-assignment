function List({ tasks, handleDelete, handleEdit, handleComplete, handleLoading, handleError }) {
    const errorMessage = {
        "title": "No tasks Found!",
        "description": "Please add a new task using the form above."
    }

    const networkError = {
        "title": "Can't connect to server",
        "description": "It seems, that the server is not running on the expected port. http://localhost:1337/tasks"
    }

    const handleKeyDown = (event, fnToPass) => {
        if (event === "keydown" && event.key === 'Enter') {
            return fnToPass
        }
    }

    return (
        <div className="list">
            {(tasks && (tasks.length === 0 || tasks === [])) ? (
                <div
                    className={"card error"}
                    aria-label={errorMessage.title}>
                    <h2>{errorMessage.title}</h2>
                    <p>{errorMessage.description}</p>
                </div>
            ) : (
                handleError ? (
                    <div
                        className={"card error"}
                        aria-label={networkError.title}>
                        <h2>{networkError.title}</h2>
                        <p>{networkError.description}</p>
                    </div>) : (
                    tasks && tasks.map((task) => (
                        <div key={task.id}
                            className={`card ${task.complete ? "completed" : ""}`}
                            title={task.title}>
                            <h2 title={task && task.complete ? "Complete" : "Not Complete"}>{task.title}</h2>
                            <p>{task.description}</p>
                            <div className="sidepanel">
                                {task.complete ? "" :
                                    (<span className="complete" role="button"
                                        tabIndex={0}
                                        title="Complete"
                                        aria-label="complete"
                                        onKeyDown={(e) => handleKeyDown(e, handleComplete(task.id, task))}
                                        onClick={() => { handleComplete(task.id, task) }}>✔</span>
                                    )}
                                <span
                                    className="edit"
                                    role="button"
                                    title="Edit"
                                    aria-label="edit"
                                    tabIndex={0}
                                    onKeyDown={(e) => handleKeyDown(e, handleEdit(task))}
                                    onClick={() => { handleEdit(task) }}>✏</span>
                                <span
                                    className="delete"
                                    role="button"
                                    title="Delete"
                                    aria-label="delete"
                                    tabIndex={0}
                                    onKeyDown={(e) => handleKeyDown(e, handleDelete(handleLoading, task.id))}
                                    onClick={() => { handleDelete(handleLoading, task.id) }}>🗑</span>
                            </div>
                        </div>)
                    )))}
        </div>
    );
}

export default List;
