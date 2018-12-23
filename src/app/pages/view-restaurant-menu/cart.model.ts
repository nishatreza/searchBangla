import { isInteger } from "@ng-bootstrap/ng-bootstrap/util/util";

export class Cart {

    total: number;
    allItems = [];
    uniqueItems = [];
    cartItems = []

    constructor() { }

    getuniqueItems(items) {
        return items.reduce(function (a, b) {
            if (a.indexOf(b) < 0) {
                a.push(b);
                return a;
            }
        }, []);
    }

    setUniqueItems() {
        this.uniqueItems = this.getuniqueItems(this.allItems);
    }

    setSubtotal() {
        this.uniqueItems.forEach(item => {
            item.total = this.getItemTotal(item);
        });
    }

    getItemTotal(item) {
        return Number.parseInt(item.price) * item.quantity;
    }

    delete(name) {
        alert(name);
    }

}