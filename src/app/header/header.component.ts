import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() feature=new Subject<string>();
  foodInput='';
  foodItems=[];
  constructor() { }

  ngOnInit(): void {
  }
  display(event:any){
    console.log(<HTMLInputElement>event.target.value);
  }
  onNavigate(choice:string){
    
    this.feature.next(choice);
  }



  
}
