import React, { useState, useEffect } from 'react'
import { observer } from 'mobx-react'
import Item from './Item'

const Market = observer((props) => {
   
    return (
        <div>
            {props.inventory.list.map((i, ind) => <Item item={i} key={ind} inventory={props.inventory} />
            )}
        </div>
    )
})


export default Market