import React, { useState, useEffect } from 'react'
import { inject, observer } from 'mobx-react'


const Item = observer((props) => {
    console.log(props);

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
                {props.item.quantity} {props.item.name} available at {props.item.price}$ per item.
</div>
            <button onClick={buyItem}>Buy item</button>


        </div>

    )
})


export default Item