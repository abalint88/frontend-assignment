function List({ tasks, handleDelete, handleEdit, handleLoading }) {
    const errorMessage = {
        "title": "No tasks Found",
        "description": ""
    }
    return (
        <div className="list">
            {(!tasks || tasks.lenght === 0) ? (
                <div className={"card error"}>
                    <h2>{errorMessage.title}</h2>
                    <p>{errorMessage.description}</p>
                </div>
            ) : tasks.map((task) => (
                <div key={task.id} className="card">
                    <h2>{task.title}</h2>
                    <p>{task.description}</p>
                    <div className="sidepanel">
                        <span className="edit" onClick={() => { handleEdit(task) }}>✏</span>
                        <span className="delete" onClick={() => { handleDelete(handleLoading, task.id) }}>🗑</span>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default List;
