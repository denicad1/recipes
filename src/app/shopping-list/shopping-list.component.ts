import { Component, OnInit } from '@angular/core';
import { ingredient } from './ingredient.model';
import { ShoppingListService } from './shopping-list-service.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
   ingredients:ingredient[];

  constructor(private shoppingListService:ShoppingListService) { }
 
  ngOnInit(): void {
    this.ingredients=this.shoppingListService.getIngredients();
    this.shoppingListService.ingredientsChanged.subscribe((ingredients:ingredient[])=>{
      this.ingredients=ingredients;
    })
  }
  

}
