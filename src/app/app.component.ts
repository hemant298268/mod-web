import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mod-web';

  myFunction() {
    const x = document.getElementById('myTopnav');
     if (x.className === 'topnav') {
       x.className += ' responsive';
      } else {
        x.className = 'topnav';
      }
    }
}
