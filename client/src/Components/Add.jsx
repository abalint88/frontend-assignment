function Add({handleAdd}) {
    return (
        <div className="add">
            <form onSubmit={handleAdd}>
                <input type="text" name="title" id="title" placeholder="Title" required />
                <textarea name="description" id="description" placeholder="Description" required />
                <button type="submit">Add</button>
            </form>
        </div>
    );
}

export default Add;
