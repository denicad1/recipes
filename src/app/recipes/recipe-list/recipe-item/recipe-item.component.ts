import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { recipe } from '../../recipe.model';


@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {
  @Output() onSelected=new EventEmitter<void>();
  @Input() recipeItem:recipe;
  constructor() { }

  ngOnInit(): void {
  }

  onRecSelected(){
    
    this.onSelected.emit();
  }





}
