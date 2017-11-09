import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.css']
})
export class GroceryListComponent implements OnInit {
  addNewItem: boolean = true;
   addedItem: string = '';
  display: boolean = true;
  items: string[] = ['mango', 'banana', 'apple'];


  constructor() {
    // fat arrow function
    /*setTimeout( () => {
         this.addNewItem = false;
    }, 1000);*/
  }
  onItemAdded() {
   // console.log('click added');
    this.display = false;


  }
  onInputChange(event: any) {
   console.log(event.target.value);
    // this.addedItem = event.target.value;
  }
  ngOnInit() {
  }
}
