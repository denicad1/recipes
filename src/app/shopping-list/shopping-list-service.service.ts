import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ingredient } from './ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
ingredientsChanged=new Subject<ingredient[]>();
  constructor() { }


  private ingredients:ingredient[]=[
    new ingredient('marinara',10),new ingredient('bread',2)
  ];
  

  getIngredients(){
    return this.ingredients.slice();
  }
  setIngredients(ing:ingredient){
    this.ingredients.push(ing);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
  addIngToList(ings:ingredient[]){
    // for (let index = 0; index < ings.length; index++) {
    //   const element = ings[index];
    //   this.setIngredients(element);
      
    // }
    ings.forEach((ing:ingredient)=>{
      this.setIngredients(ing);
    })
    
  }
}
