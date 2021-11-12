import { Component, OnInit,Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
  
  @Output("ingAdd") ingredientAdd=new EventEmitter<{ingName:string, ingAmount:number}>();
  name:string="Ingredient Name";
  amount:number=1;

  constructor() { }
  onIngredientAdd(){
    this.ingredientAdd.emit({ingName:this.name,ingAmount:this.amount});

  }
  ngOnInit(): void {
  }

}
