import React, { useState, useEffect } from 'react'
import { observer } from 'mobx-react'
import Market from './components/Market'

const App = observer((props) => {
console.log(props);
  return (
    <div>
    <Market inventory={props.inventory} />
    </div>
  )
})


export default App
