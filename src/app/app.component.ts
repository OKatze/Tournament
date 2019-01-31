import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  helpNumber = 0;

  refreshTable() {
    this.helpNumber = this.helpNumber + 1;
  }

}
