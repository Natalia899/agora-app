import { observable, action, makeObservable } from 'mobx'
import { Item } from './Item'


export class Inventory {
    constructor() {
        this.list = []

        makeObservable(this, {
            list: observable,
            addItem: action,
            changePrice: action, 
            buyItem: action
        })
    }
 
    addItem = (newItem) => {
        let newI = new Item(newItem)
        this.list.push(newI)
    }
    changePrice = (name, newPrice) => {
        let item = this.list.find(i => i.name === name)
        item.price = newPrice
    }
    buyItem = () => {
        
    }
}

