import {Component, OnInit} from '@angular/core';
import {Item, MyserviceService} from '../myservice.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers: [MyserviceService]
})
export class CartComponent implements OnInit {
  totalAmount = 0;
  cartItems: {name: string, price: number, qty: number, details: string} [] = [];
  public constructor(private myService: MyserviceService) {
  }

  ngOnInit() {
    this.cartItems = MyserviceService.cartItems;
  }

  removeFromCart(item: Item) {
    this.myService.deleteFromCart(item);
  }

  setQty(item) {
    this.myService.setQty(item);
  }

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  calculateTotalAmount() {
    this.totalAmount = 0;
    for( let i = 0; i < this.cartItems.length ; i++ ) {
      this.totalAmount += (this.cartItems[i].qty * this.cartItems[i].price);
    }
    return this.totalAmount;
  }

}
