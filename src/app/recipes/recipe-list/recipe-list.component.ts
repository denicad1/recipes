import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes:recipe[]=this.RecipeService.getRecipes();
  recDetails:recipe;
  

  
  constructor(private RecipeService:RecipeService) { }

  ngOnInit(): void {
    this.RecipeService.recipeSelect.subscribe(recipe=>{
      this.recDetails=recipe;

      
    })
  }
  // newRecipe(name:string,description:string,img:string){
  //   this.RecipeService.newRecipe(new recipe(name,description,img));
  // }
  


  

}
