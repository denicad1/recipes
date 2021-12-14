import { Component} from '@angular/core';
import { recipe } from './recipes/recipe.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  receivedFeature:string;
  title = 'shopping';
  selection;

  onNavReceive(received:string){
    this.receivedFeature=received;
  
  }
}

