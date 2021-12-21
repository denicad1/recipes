import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  @Input() details:recipe;
  

  constructor() { }

  ngOnInit(): void {
  }

  addToShopList(){}

}
