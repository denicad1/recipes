import { EventEmitter, Injectable } from '@angular/core';
import { ingredient } from './ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
ingredientsChanged=new EventEmitter<ingredient[]>();
  constructor() { }


  private ingredients:ingredient[]=[
    new ingredient('marinara',10),new ingredient('bread',2)
  ];
  

  getIngredients(){
    return this.ingredients.slice();
  }
  setIngredients(ing:ingredient){
    this.ingredients.push(ing);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
