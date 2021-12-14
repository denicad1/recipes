import { viewClassName } from '@angular/compiler';
import { Component, OnInit,Output,EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { ingredient } from '../ingredient.model';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
  
  @Output("ingAdd") ingredientAdd=new EventEmitter<ingredient>();
  // name:string="Ingredient Name";
  // amount:number=1;
  @ViewChild('inputAmount') amount:ElementRef;
  @ViewChild('inputName') name:ElementRef;

  constructor() { }
  onIngredientAdd(){
    const ingName=this.name.nativeElement.value;
    const ingAmount=this.amount.nativeElement.value;
    this.ingredientAdd.emit(new ingredient(ingName,ingAmount));

  }
  ngOnInit(): void {
  }

}
