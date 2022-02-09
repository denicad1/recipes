import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ingredient } from '../shopping-list/ingredient.model';
import { RecipeService } from './recipe.service';
import {recipe} from './recipe.model';




@Injectable({
  providedIn: 'root'
})


export class ResolveGuardService implements Resolve<recipe> {

  constructor(private recipeServ:RecipeService) { }
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):  recipe | Observable<recipe> | 
  Promise<recipe> {
      return this.recipeServ.getRecipe(+route.params['id']);
  }
 
  

  
}
