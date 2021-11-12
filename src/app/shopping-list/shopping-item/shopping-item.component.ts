import { Component, OnInit,Input } from '@angular/core';
import { stringify } from 'querystring';

@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls: ['./shopping-item.component.scss']
})
export class ShoppingItemComponent implements OnInit {
 @Input('srvElement') element: {name:string,amount:number};

  constructor() {
   }

  ngOnInit(): void {
  }

}
