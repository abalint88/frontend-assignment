function Add({ handleAdd, isEditing, edited, ref }) {

    return (
        <div className="add">
            <form  ref={ref} onSubmit={handleAdd}>
                <input type="text" name="title" id="title" placeholder="Title" defaultValue={edited ? edited.title : ""} required />
                <textarea name="description" id="description" placeholder="Description" defaultValue={edited ? edited.description : ""} required />
                <button type="submit">{edited ? "Modify" : "Add"}</button>
            </form>
        </div>
    );
}

export default Add;
