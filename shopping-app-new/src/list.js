//display the list

const List = (props) => {
    let shoppingList = props.list.map((item) => {
        return (
                <tr>
                    <td>{item.name}</td>
                    <td>{item.qty}</td>
                    <td>{item.unit}</td>
                    <td><input onClick={props.onAddToCart}  type="button" value="Add to cart"/></td>
                    <td><input onClick={props.onRemoveItem} type="button" value="Remove item"/></td>
                </tr>
        )
    })
    return (
        <table>

            <thead>
                
                <tr>
                    <td>Item</td>
                    <td>Quantity</td>
                    <td>Unit</td>
                    <td></td>
                    <td></td>
                </tr>
            </thead>
            <tbody>{shoppingList}</tbody>
        </table>
    )
}

export default List;