import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.css']
})
export class GroceryListComponent implements OnInit {
  addNewItem: boolean = true;
  addedItem: string = '';
  constructor() {
    // fat arrow function
    setTimeout( () => {
         this.addNewItem = false;
    }, 1000);
  }
 /* onIem() {
    console.log('helo world');
  }
 */
  onClick() {
    console.log('click added');
  }
  onInputChange(event: any) {
   console.log(event.target.value);
    this.addedItem = event.target.value;
  }
  ngOnInit() {
  }
}
