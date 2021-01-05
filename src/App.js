import React, { useState, useEffect } from 'react'
import { inject, observer } from 'mobx-react'
import Market from './components/Market'
import 'materialize-css';
import './App.css';

const App = inject("Inventory")(observer((props) => {
  return (
    <div>
      <Market />
    </div>
  )
}))


export default App
