import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './recipes/auth-guard.service';
import { CanDeactivateGuardService } from './recipes/can-deactivate-guard.service';
import { RecipeDetailComponent } from './recipes/recipe-list/recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { ResolveGuardService } from './recipes/resolve-guard.service';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const routes: Routes = [{
path:'shoppingList', component: ShoppingListComponent 
},{
  path:'recipeList', 
 // canActivateChild:[AuthGuardService], 
  canDeactivate:[CanDeactivateGuardService], component: RecipeListComponent, children:[
    {path: ':id', component:RecipeDetailComponent, resolve:{recipe:ResolveGuardService}}
  ]
}
];

@NgModule({
  imports: [RouterModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
