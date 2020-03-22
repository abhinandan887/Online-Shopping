import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Item, MyserviceService} from '../myservice.service';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  providers: [MyserviceService]
})
export class DetailsComponent implements OnInit {
  itemDetails: Item;
  constructor(public activeModal: NgbActiveModal, private myservice: MyserviceService) { }

  ngOnInit() {
    console.log('Inside Modal Component: ' + MyserviceService.currentItem);
    this.itemDetails = MyserviceService.currentItem;
    console.log('item name: ' + this.itemDetails);
  }

}
