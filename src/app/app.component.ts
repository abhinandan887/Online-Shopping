import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Online-Shopping';
  public isCollapsed = true;

  sendMail() {
    const link = 'mailto:abhinandan887@gmail.com';
    window.open(link);
  }
}
