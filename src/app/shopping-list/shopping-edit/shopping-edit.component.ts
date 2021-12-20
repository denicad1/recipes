import { viewClassName } from '@angular/compiler';
import { Component, OnInit,Output,EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { ingredient } from '../ingredient.model';
import { ShoppingListService } from '../shopping-list-service.service';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
  
  // @Output("ingAdd") ingredientAdd=new EventEmitter<ingredient>();
  // name:string="Ingredient Name";
  // amount:number=1;
  @ViewChild('inputAmount') amount:ElementRef;
  @ViewChild('inputName') name:ElementRef;

  constructor(private shoppingListService:ShoppingListService) { }
  onIngredientAdd(){
    const ingName=this.name.nativeElement.value;
    const ingAmount=this.amount.nativeElement.value;
    this.shoppingListService.setIngredients(new ingredient(ingName,ingAmount));
    // this.ingredientAdd.emit(new ingredient(ingName,ingAmount));

  }
  ngOnInit(): void {
  }

}
