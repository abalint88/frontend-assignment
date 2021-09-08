function Card({ task, type }) {
    return (
        <div className={"card " + type}>
            <h2>{task.title}</h2>
            <p>{task.description}</p>
        </div>
    );
}

export default Card;
