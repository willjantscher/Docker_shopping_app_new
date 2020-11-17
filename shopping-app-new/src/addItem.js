const AddItem = (props) =>{
    return (
        <div>
            <h2>Add Item</h2>
            <form onSubmit={props.onAddItem}>
                <input name="item" id="0" placeholder="name" onChange={props.onInputChange}></input>
                <input name="qty" id="1" placeholder="qty" onChange={props.onInputChange}></input>
                <input name="unit" id="2" placeholder="unit" onChange={props.onInputChange}></input>
                <input type="submit" value="Add to List"/>
            </form>
        </div>    
    )
}



export default AddItem