import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-specials',
  templateUrl: './specials.component.html',
  styleUrls: ['./specials.component.css']
})
export class SpecialsComponent implements OnInit {
  @Input() private products;

  constructor() { }

  ngOnInit() {
  }

}
