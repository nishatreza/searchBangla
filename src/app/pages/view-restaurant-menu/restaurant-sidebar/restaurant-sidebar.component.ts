import { Component, OnInit, Input, Output, OnChanges, SimpleChanges, SimpleChange, EventEmitter } from '@angular/core';
import { Cart } from '../cart.model';

@Component({
  selector: 'app-restaurant-sidebar',
  templateUrl: './restaurant-sidebar.component.html',
  styleUrls: ['./restaurant-sidebar.component.css']
})
export class RestaurantSidebarComponent implements OnInit, OnChanges {

  // @Input() cartData;

  @Input() cart;
  @Input() pickUpData;
  @Output() removeItem = new EventEmitter()

  test = new Cart();

  public _cart = [];
  subTotal;
  tax;
  grandTotal;

  constructor() { }

  ngOnInit() {
  }
  checkout(){
    
  }

  ngOnChanges(changes: SimpleChanges) {
    const cart: SimpleChange = changes.cart;
    console.log('prev value: ', cart.previousValue);
    console.log('got cart: ', cart.currentValue);
    if (cart.currentValue) {
      this._cart = cart.currentValue;
      this.subTotal = this.setSubTotal(this._cart, 'total');

      this.tax = Math.round((this.subTotal * 15) / 100);
      this.grandTotal = this.subTotal + this.tax;
      console.log('sub total', this.subTotal);
    }
  }

  setSubTotal(items, prop) {
    return items.reduce(function (a, b) {
      return a + b[prop];
    }, 0);
  }


  updateQuantityPrice(event, item) {
    this._cart.forEach(existingItem => {
      console.log('existing item', existingItem);
      if (existingItem.name === item.name) {
        existingItem.quantity = Number.parseInt(event.target.value);
        existingItem.total = existingItem.quantity * existingItem.price;
      }
    });
    console.log('updated item quantity and toal', this._cart);
    this.subTotal = this.setSubTotal(this._cart, 'total');

    this.tax = Math.round((this.subTotal * 15) / 100);
    this.grandTotal = this.subTotal + this.tax;
    console.log('sub total', this.subTotal);
  }

  removeFromCart(item) {
    console.log('item name to delete ', item.name);
    console.log('current cart items', this._cart);
    this._cart = this._cart.filter(cartItem => cartItem.name != item.name);
    this.removeItem.emit(this._cart);
    this.subTotal = this.setSubTotal(this._cart, 'total');
    
    this.tax = Math.round((this.subTotal * 15) / 100);
    this.grandTotal = this.subTotal + this.tax;
    console.log('sub total', this.subTotal);
  }

  // quantityPlus(index) {
  //   const cartItemId = 'id' + index;
  //   const currentInputValue = (<HTMLInputElement>document.getElementById(cartItemId)).value;
  //   let increasedValue = (parseInt(currentInputValue) + 1).toString();
  //   (<HTMLInputElement>document.getElementById(cartItemId)).value = increasedValue;
  //   //*** insert item in the cart ***//
  //   this.cartData[index].quantity = increasedValue;
  //   console.log(this.cartData[index]);
  // }

  // quantityMinus(index) {
  //   const cartItemId = 'id' + index;
  //   const currentInputValue = (<HTMLInputElement>document.getElementById(cartItemId)).value;
  //   if (parseInt(currentInputValue) > 1) {
  //     let increasedValue = (parseInt(currentInputValue) - 1).toString();
  //     (<HTMLInputElement>document.getElementById(cartItemId)).value = increasedValue;
  //     //*** insert item in the cart ***//
  //     this.cartData[index].quantity = increasedValue;
  //     console.log(this.cartData[index]);
  //   }
  // }

  // typedValue(e, index){
  //   let onlyNumber = /^\d{1,10}$/.test(e.target.value);
  //   if(!onlyNumber){
  //     alert('Please enter any / only number.');
  //     (<HTMLInputElement>document.getElementById('id' + index)).value = '1';
  //     //*** insert item in the cart ***//
  //     this.cartData[index].quantity = '1';
  //     console.log(this.cartData[index]);
  //   }else if(e.target.value > 0){
  //     //*** insert item in the cart ***//
  //     this.cartData[index].quantity = e.target.value;
  //     console.log(this.cartData[index]);
  //   }
  // }

}
