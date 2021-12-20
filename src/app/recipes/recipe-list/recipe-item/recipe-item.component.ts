import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';


@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {
  
  @Input() recipeItem:recipe;
  constructor(private recipeService:RecipeService) { }

  ngOnInit(): void {
  }

  onRecSelected(){
    
   this.recipeService.recipeSelect.emit(this.recipeItem);
  }





}
