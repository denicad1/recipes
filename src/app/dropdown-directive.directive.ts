import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirectiveDirective implements OnInit {
  displayed:boolean;
  // @Input('appDropdown') classChoice:string='';
  // @HostBinding('class') class:string;
  // @HostListener('click') click(Eventdata:Event){
  //   this.displayed?this.class=this.classChoice:this.class='';
  //   this.displayed=!this.displayed;
  // }
  @HostBinding('class.open')isOpen:boolean=false;
  @HostListener('click') openMenu(){
    this.isOpen=!this.isOpen;
  }
  constructor(private elRef:ElementRef) {

   }
   ngOnInit(): void {
       this.displayed=true;
   }

}
