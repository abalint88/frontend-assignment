function Add({ handleAdd, edited }) {

    return (
        <div className="add">
            <form onSubmit={handleAdd}>
                <input
                    type="text"
                    name="title"
                    id="title"
                    placeholder="Title"
                    title="Add title here"
                    defaultValue={edited ? edited.title : ""}
                    required />
                <textarea
                    name="description"
                    id="description"
                    placeholder="Description"
                    title="Add description here"
                    defaultValue={edited ? edited.description : ""} />
                <button title="Submit button" type="submit">{edited ? "Modify" : "Add"}</button>
            </form>
        </div>
    );
}

export default Add;
