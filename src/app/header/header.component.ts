import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  foodInput='';
  foodItems=[];
  constructor() { }

  ngOnInit(): void {
  }
  display(event:any){
    console.log(<HTMLInputElement>event.target.value);
  }


}
