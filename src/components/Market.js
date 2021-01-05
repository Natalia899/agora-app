import React, { useState, useEffect } from 'react'
import { inject, observer } from 'mobx-react'
import Item from './Item'

const Market = inject("Inventory")(observer((props) => {
    const [newItem, setNewItem] = useState({ name: '', quantity: 0, price: 0 })

    const handleInput = ({ target }) => {
        let name = target.name
        let value = target.value
        const inputs = { ...newItem }
        inputs[name] = value
        setNewItem(inputs)
    }

const addItem = () => {
   
    props.Inventory.addItem(newItem.name, newItem.price, newItem.quantity)
}
    return (
        <div>
            <input name='name' placeholder='name' value={newItem.name} type='text' onChange={handleInput} />
            <input name='quantity' placeholder='quantity' value={newItem.quantity} type='number' onChange={handleInput} />
            <input name='price' placeholder='price' value={newItem.price} type='number' onChange={handleInput} />
            <button onClick={addItem}>Add</button>
            <p> Total items: {props.Inventory.numItems}</p>
            {props.Inventory.list.map((i, ind) => <Item item={i} key={ind} inventory={props.Inventory} />
            )}
        </div>
    )
}))


export default Market