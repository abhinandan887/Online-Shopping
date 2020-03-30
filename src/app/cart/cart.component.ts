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
  cartItems: Item [] = [];
  public constructor(private myService: MyserviceService) {
  }

  ngOnInit() {
    this.refreshView();
  }
  refreshView() {
    this.getCart();
  }
  getCart() {
    this.myService.getUpdatedCart().subscribe(
      (data: Item[]) => {
        console.log('Inside getCart():' + data[0].name, data[0].qty);
        this.cartItems = data;
      }, ( error: Response) => {
        alert('An Unexpected error occurred.');
        console.error(error);
      });
  }

  removeFromCart(item: Item) {
    this.myService.deleteFromCart(item).subscribe(
      (data: Item) => {
      }, ( error: Response) => {
        alert('An Unexpected error occurred.');
        console.error(error);
      }, () => {
        this.refreshView();
      });
  }

  setQty(item) {
    this.myService.setQty(item).subscribe(
      (data: Item) => {
        console.log('Inside setQty():' + data[0].name, data[0].qty);
      }, ( error: Response) => {
        alert('An Unexpected error occurred.');
        console.error(error);
      }, () => {
        this.refreshView();
      });
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
