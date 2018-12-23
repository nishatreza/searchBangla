import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { Cart } from '../cart.model';

@Component({
  selector: 'app-restaurant-menu',
  templateUrl: './restaurant-menu.component.html',
  styleUrls: ['./restaurant-menu.component.css']
})
export class RestaurantMenuComponent implements OnInit {

  @Input() menuData;
  @Input() restaurantInfo;

  // test = [];
  cart = new Cart();
  uniqueCartItems;
  cartItems;

  constructor() { }

  ngOnInit() {
  }

  // testOutputFunction(itemName, itemPrice) {
  //   const obj = {
  //     item: itemName,
  //     basePrice: itemPrice,
  //     total: '',
  //     quantity: "1"
  //   }
  //   if (!this.test.find(k => k.item == itemName)) {
  //     this.test.push(obj);
  //   }else {
  //     alert('This item is alredy added to the cart');
  //   }
  //   console.log('value after click', this.test);
  // }

  addToCart(item) {
    item.quantity = 1;
    console.log('initial allItems', this.cart.allItems);
    this.cart.allItems.forEach(existingItem => {
      if (existingItem.name === item.name) {
        alert('item is already added');
      }
    });
    if (this.cart.allItems.find(l => l.name == item.name) == undefined) {
      this.cart.allItems.push(item);
      this.cart.setUniqueItems();
      this.cart.setSubtotal();
    }
    console.log('final cart', this.cart);
  }

  remove(event){
    console.log('new cart received', event)
    this.cart.allItems = event;
  }

}
