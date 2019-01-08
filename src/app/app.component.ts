import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hemant298268';

  myFunction() {
    const x = document.getElementById('myTopnav');
     if (x.className === 'topnav') {
       x.className += ' responsive';
      } else {
        x.className = 'topnav';
      }
    }

  close() {
    const x = document.getElementById('myTopnav');
     if (x.className === 'topnav responsive') {
      x.className = 'topnav';
      }
  }
}
