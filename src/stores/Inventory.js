import { observable, computed, action, makeObservable } from 'mobx'
import { Item } from './Item'


export class Inventory {
    constructor() {
        this.list = [{ name: 'phone', price: 100, quantity: 7 }]

        makeObservable(this, {
            list: observable,
            addItem: action,
            changePrice: action,
            buyItem: action,
            numItems: computed
        })
    }

    addItem = (name, price = 0, quantity = 1) => {
        if (this.list.some(obj => obj.name === name)) {
            let itemToChange = this.list.find(i => i.name === name)
            itemToChange.price = price
            itemToChange.quantity++
        } else {
            let newI = new Item(name, price, quantity)
            this.list.push(newI)
        }
    }
    changePrice = (name, newPrice) => {
        let item = this.list.find(i => i.name === name)
        item.price = newPrice
    }
    buyItem = (name) => {
        let relevantItem = this.list.find(i => i.name === name)
        let index = this.list.indexOf(name)
        if (relevantItem.quantity === 1) {
            this.list.splice(index, 1)
        } else {
            relevantItem.quantity--
        }
    }
    get numItems() {
        let total = 0
        this.list.forEach(r => total += r.quantity)
        return total
    }
}

