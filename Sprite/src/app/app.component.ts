import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sprite';
  left:number = 0;
  top:number = 0;

  nextCard():void {
    this.left+=143;
    if(this.left>500) {
      this.left=0;
      this.top-=194;
    }
  }
}
