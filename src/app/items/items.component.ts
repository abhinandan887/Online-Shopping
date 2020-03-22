import {Component, Input, OnInit, Output} from '@angular/core';
import {Item, MyserviceService} from '../myservice.service';
import { NgbActiveModal, NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import {DetailsComponent} from '../details/details.component';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
  providers: [MyserviceService]
})
export class ItemsComponent implements OnInit {
  allItems: Item [] = [];
  public constructor(private myService: MyserviceService, private modalService: NgbModal) {
  }
  ngOnInit() {
    this.allItems = this.myService.items;
  }

  onCreateOrUpdate(item: Item) {
    this.myService.OnAddInCart(item);
  }

  onShowDetails(item: Item) {
    this.myService.showDetails(item);
    const modalRef = this.modalService.open(DetailsComponent);
    console.log('Inside onShowDetails: ' + item.name, item.qty, item.details);
  }
}
