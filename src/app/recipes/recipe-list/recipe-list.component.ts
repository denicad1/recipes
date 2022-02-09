import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { canDeactivateComp } from '../can-deactivate-guard.service';
import { recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit, canDeactivateComp {
  recipes:recipe[]=this.RecipeService.getRecipes();
  recDetails:recipe;
  
  
  
  constructor(private RecipeService:RecipeService, private router:Router, private activeRoute:ActivatedRoute) { }


  onNavigate(id:number){
    this.router.navigate([],{relativeTo:this.activeRoute, queryParamsHandling:'preserve'});
  }
  ngOnInit(): void {
    this.RecipeService.recipeSelect.subscribe(recipe=>{
      this.recDetails=recipe;

      
    })
  }
  // newRecipe(name:string,description:string,img:string){
  //   this.RecipeService.newRecipe(new recipe(name,description,img));
  // }
  

  canDeactivate(): boolean | Observable<boolean> | Promise<boolean>{
    return confirm('testing canDeactivateGuard');
  };
  

}
