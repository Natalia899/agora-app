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
        <div className='main-container'>
            <h3 className='total'> Total items: {props.Inventory.numItems}</h3>
            {props.Inventory.list.map((i, ind) => <Item item={i} key={ind} inventory={props.Inventory} />
            )}

            <div className="row">
                <div className="input-field col s6">
                    <input value={newItem.name} id="first_name2" type="text" name='name' onChange={handleInput} className="validate" />
                    <label className="active" for="first_name2">Name</label>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s6">
                    <input value={newItem.price} id="first_name3" type="number" name='price' onChange={handleInput} className="validate" />
                    <label className="active" for="first_name3">Price</label>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s6">
                    <input value={newItem.quantity} id="first_name4" type="number" name='quantity' onChange={handleInput} className="validate" />
                    <label className="active" for="first_name4">Quantity</label>
                </div>
            </div>
            <a class="waves-effect waves-light btn" onClick={addItem}>Add</a>
        </div>
    )
}))


export default Market