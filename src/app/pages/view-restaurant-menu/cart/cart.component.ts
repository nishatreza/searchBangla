import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { Cart } from '../cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnChanges {

  @Input() cart: Cart;

  private _cart: any;
  cartTotal;

  constructor() { }
  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    const cart: SimpleChange = changes.cart;
    console.log('prev value: ', cart.previousValue);
    console.log('got cart: ', cart.currentValue);
    if (cart.currentValue) {
      this._cart = cart.currentValue;
      this.cartTotal = this.setCartTotal(this._cart, 'total');
      console.log('cart total', this.cartTotal);
    }
  }

  setCartTotal(items, prop) {
    return items.reduce(function (a, b) {
      return a + b[prop];
    }, 0);
  }


  updateQuantityPrice(event, item) {
    this._cart.forEach(existingItem => {
      // console.log('existing item', existingItem);
      if (existingItem.name === item.name) {
        existingItem.quantity = Number.parseInt(event.target.value);
        existingItem.total = existingItem.quantity * existingItem.price;
      }
    });
    console.log('updated item quantity and toal', this._cart);
    this.cartTotal = this.setCartTotal(this._cart, 'total');

  }

}
