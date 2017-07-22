import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public products:Array<Product>;

  ngOnInit() {
    this.products = [
      {
        name: "Nazwa1",
        price: 41,
      },
      {
        name: "Nazwa2",
        price: 54
      }];
  }
}
