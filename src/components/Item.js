import React from 'react'
import { observer } from 'mobx-react'


const Item = observer((props) => {
    const buyItem = () => {
        props.inventory.buyItem(props.item.name)
    }

    const changePrice = () => {
        console.log('hello');
        let newPrice = prompt(`What is the new price for ${props.item.name}`)
        props.inventory.changePrice(props.item.name, newPrice)

    }
    return (
        <div>
            <div onDoubleClick={changePrice}>
                <li className='item'> {props.item.quantity} {props.item.name} available at {props.item.price}$ per item   .
                <i onClick={buyItem} class="tiny material-icons"> add_shopping_cart</i> </li>
            </div>
        </div>
    )
})


export default Item