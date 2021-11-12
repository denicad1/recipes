import { Component, OnInit } from '@angular/core';
import { ingredient } from './ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  ingredients:ingredient[]=[
    new ingredient('marinara',10),new ingredient('bread',2)
  ];

  constructor() { }
  onListAdd(ingData:{ingName:string,ingAmount:number}){
    this.ingredients.push(new ingredient(ingData.ingName,ingData.ingAmount));
  }
  ngOnInit(): void {
  }

}
