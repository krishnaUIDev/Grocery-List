import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grocery-item',
  templateUrl: './grocery-item.component.html',
  styleUrls: ['./grocery-item.component.css']
})
export class GroceryItemComponent implements OnInit {
 itemName: string = 'Helo word';
  constructor() { }

  ngOnInit() {
  }

}
