import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  receivedFeature;
  title = 'shopping';

  onNavReceive(received:string){
    this.receivedFeature=received;
  
  }
}

