import React, { useState, useEffect } from 'react'
import { inject, observer } from 'mobx-react'
import Market from './components/Market'

const App = inject("Inventory")(observer((props) => {
console.log(props);
  return (
    <div>
    <Market />
    </div>
  )
}))


export default App
