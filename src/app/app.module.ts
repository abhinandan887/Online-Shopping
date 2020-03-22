import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbActiveModal, NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import {ItemsComponent} from './items/items.component';
import { CartComponent } from './cart/cart.component';
import {FormsModule} from '@angular/forms';
import { DetailsComponent } from './details/details.component';
import {MyserviceService} from './myservice.service';

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    CartComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule
  ],
  providers: [NgbActiveModal],
  bootstrap: [AppComponent],
  entryComponents: [DetailsComponent]
})
export class AppModule {

}
