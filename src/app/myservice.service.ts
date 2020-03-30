import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

export interface Item {
  id: number;
  itemId: number;
  name: string;
  price: number;
  qty: number;
  details: string;
  imgPath: string;
}

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  public static currentItem: Item;
  itemURL = 'http://localhost:3000/items';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
  constructor(private http: HttpClient) {
  }
  /*private handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
      console.error('Client Side Error: ', errorResponse.error.message);
    } else {
      console.error('Server Side Error: ', errorResponse);
    }
    return new ErrorCode('There is problem with service. Please try again later');
  }*/

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.itemURL);
  }

  getCartItem(item: Item): Observable<Item> {
    const id = item.id;
    const url = `${this.itemURL}/${id}`;
    return this.http.get<Item>(url);
  }

  getUpdatedCart(): Observable<Item[]> {
    return this.http.get<Item[]>(this.itemURL + '?qty_ne=0');
  }

  addOrUpdateCart(item: Item): Observable<Item> {
    /*
    * In Both cases we are sending Patch request
    * Reason for that we are using same Table for both Item and cart
    * If Item gets added in cart then we update the qty and the cartId for cart
    * Through this we distinguish whether this data is present or not in cart.
    */
    const id = item.id;
    const url = `${this.itemURL}/${id}`;
    if (item.qty > 0) {
      // Inside PUT Operation
      item.qty = item.qty + 1;
      return this.http.patch<Item>(url, {qty: item.qty}, this.httpOptions);
    } else {
      // Inside Post Operation
      item.qty = 1;
      // item.cartId = item.itemId;
      return this.http.patch<Item>(url, {qty: item.qty}, this.httpOptions);
    }
  }

  setQty(item: Item) {
    const id = item.id;
    const url = `${this.itemURL}/${id}`;
    return this.http.patch<Item>(url, {qty: item.qty}, this.httpOptions);
  }

  deleteFromCart(item: Item): Observable<Item> {
    const id = item.id;
    const url = `${this.itemURL}/${id}`;
    return this.http.patch<Item>(url, {qty: 0, cartId: null}, this.httpOptions);
    // Below is actual Delete request. Here we are just setting qty as 0.
    // return this.http.delete<Item>(url);
  }

  showDetails( item: Item) {
    MyserviceService.currentItem = item;
    console.log('Inside Service showDetails: ' + MyserviceService.currentItem.name);
  }

}
