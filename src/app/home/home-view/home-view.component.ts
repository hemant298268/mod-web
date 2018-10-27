import { Component} from '@angular/core';
import { URL } from 'url';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.css']
})
export class HomeViewComponent {
  title = 'linked Container';
  img = 'url(../../../assets/bat.jpg)';
  bckImg = `${this.img}`;


  getBckUrl() {
    return this.bckImg;
  }

}
