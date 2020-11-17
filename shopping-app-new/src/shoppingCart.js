const ShoppingCart = (props) => {
    let shoppingCart = props.cart.map((item) => {
        return (
                <tr>
                    <td>{item.name}</td>
                    <td>{item.qty}</td>
                    <td>{item.unit}</td>
                </tr>
        )
    })
    return (
        <table>

            <thead>
                <h2>Shopping Cart</h2>
                <tr>
                    <td>Item</td>
                    <td>Quantity</td>
                    <td>Unit</td>
                </tr>
            </thead>
            <tbody>{shoppingCart}</tbody>
        </table>
    )   
}

export default ShoppingCart;