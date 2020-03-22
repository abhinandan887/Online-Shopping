import { Injectable } from '@angular/core';

export interface Item {
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
  static ITEMS: Item[] = [
    {
      name: 'Samsung Galaxy S10',
      price: 67000,
      qty: 0,
      details: '6 GB Ram + 128 GB ROM + Triple Camera at rear',
      imgPath: 'assets/product_img/galaxy-s10.jpg'
    },
    {
      name: 'Iphone XI',
      price: 99999,
      qty: 0,
      details: '6 GB Ram + 512 GB ROM + Best Camera in smartphone',
      imgPath: 'assets/product_img/Apple iPhone 11 Pro.jpg'
    },
    {
      name: 'Google Pixel',
      price: 83000,
      qty: 0,
      details: '6 GB Ram + 128 GB ROM + Stock Android',
      imgPath: 'assets/product_img/Pixel3.jpg'
    },
    {
      name: 'One Plus 7 Pro',
      price: 57000,
      qty: 0,
      details: '8 GB Ram + 128 GB ROM + Cheapest Flagship',
      imgPath: 'assets/product_img/OnePlus7Pro.jpg'
    }
  ];
  public static cartItems: {name: string, price: number, qty: number, details: string} [] = [];
  public items = MyserviceService.ITEMS;
  public static currentItem: Item;
  constructor() {
  }

  OnAddInCart(item: Item) {
    if (MyserviceService.cartItems.indexOf(item) === -1) {
        item.qty = 1;
        MyserviceService.cartItems.push(item);
    } else {
      const index = MyserviceService.cartItems.indexOf(item);
      const curQty: number = MyserviceService.cartItems[index].qty.valueOf();
      MyserviceService.cartItems[index].qty = curQty + 1;
    }
  }


  setQty(item: Item) {
    const index: number = MyserviceService.cartItems.indexOf(item);
    if (item.qty <= 0) {
      alert('Value can not be null or zero ');
      item.qty =  MyserviceService.cartItems[index].qty;
      return;
    }
    MyserviceService.cartItems[index].qty = MyserviceService.cartItems[index].qty;
  }

  deleteFromCart(item: Item) {
    const index: number = MyserviceService.cartItems.indexOf(item);
    if (index !== -1) {
      MyserviceService.cartItems.splice(index, 1);
    }
  }

  showDetails( item: Item) {
    MyserviceService.currentItem = item;
    console.log('Inside Service showDetails: ' + MyserviceService.currentItem.name);
  }

}
