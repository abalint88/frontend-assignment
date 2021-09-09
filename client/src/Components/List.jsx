function List({ tasks, handleDelete, handleEdit, handleLoading }) {
    const errorMessage = {
        "title": "No tasks Found!",
        "description": "Please add a new task using the form above."
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
                    <div key={task.id} className="card">
                        <h2>{task.title}</h2>
                        <p>{task.description}</p>
                        <div className="sidepanel">
                            <span className="edit" role="button"
                            tabIndex={0}
                            onKeyDown={() => {if (Event.key === 'Enter') {handleEdit(task)}}}
                            onClick={() => { handleEdit(task) }}>✏</span>
                            <span className="delete" role="button"
                            tabIndex={0}
                            onKeyDown={() => {if (Event.key === 'Enter') {handleDelete(handleLoading, task.id )}}}
                            onClick={() => { handleDelete(handleLoading, task.id) }}>🗑</span>
                        </div>
                    </div>)
                ))}
        </div>
    );
}

export default List;
