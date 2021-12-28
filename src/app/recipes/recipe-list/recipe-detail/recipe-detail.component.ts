import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ingredient } from 'src/app/shopping-list/ingredient.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list-service.service';
import { recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  @Input() details:recipe;
  

  constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit(): void {
  }
  addToIngList(ing:ingredient[]){
    this.shoppingListService.addIngToList(ing);

  }

  

}
