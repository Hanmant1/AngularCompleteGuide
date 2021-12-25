import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-complete-guide';
  loadedFeature: string = 'reciepe';
  navigate(selectedFeature: string) {
    
    this.loadedFeature = selectedFeature;
  }
}
