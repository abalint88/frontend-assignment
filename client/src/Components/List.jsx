import Card from "./Card";

function List({ tasks }) {
    const errorMessage = {
        "title": "No tasks Found",
        "description": ""
    }

    return (
        <div className="list">
            {(tasks && tasks !== []) ? tasks.map((task) =>
                <Card task={task} key={task.id}/>
            ) : <Card task={errorMessage} type="error" />}
        </div>
    );
}

export default List;
