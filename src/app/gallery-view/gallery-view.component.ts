import { Component, OnDestroy} from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HomeSvcService } from '../home-svc.service';
import { map } from 'rxjs/operators';
import { interval } from 'rxjs';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-gallery-view',
  templateUrl: './gallery-view.component.html',
  styleUrls: ['./gallery-view.component.css'],
  animations: [
    trigger('myTrigger', [
      state('invisible', style({
        'opacity' : '0'
      })),
      state('visible', style({
        'opacity' : '1'
      })),
      transition('invisible => visible', animate('600ms ease-in'))
    ])
  ]
})
export class GalleryViewComponent {

  title = 'Gallery';
  state = 'visible';
  route = 'gallery';
  txtlist; // stores the list of text files for current route
  txtcounter = 0; // maintains the counter of text displayed
  txtlimit;
  imgcounter = 0;
  imglist;
  imglimit;
  bckimg;
  // fiximage = '../../assets/image/home/h1(1).jpg';
  // fiximage = '../../assets/image/gallery/h3.jpg';
  image = '../../assets/image/gallery/h3.jpg'; // default image
  txt1: any;
  filename = 'h1.txt'; // default name forfile content
  t1; t2; t3; t4; t5; t6; t7; t8; t9; t10;
  timer;
  objtxtlist;
  objimglist;
  objtext;
// [ngStyle]="{'background-image':'url(' + image + ')'}"
  constructor(private homeSvc: HomeSvcService, private tit: Title) {
    tit.setTitle(this.title);
    this.txtlist = this.getTextList();
    this.imglist = this.getImgList();
    this.timer = setInterval(() => {
      this.state = 'invisible';
      this.change('change');
      this.setImg('change');
    }, 150000);
  }

    getTextList() {
      this.objtxtlist = this.homeSvc.getTextList(this.route).subscribe(value => {
        console.log('text list ' + value);
        this.txtlist = value;
        this.txtlimit = Object.keys(this.txtlist).length;
      });
    }

    getImgList() {
      this.objtxtlist = this.homeSvc.getImgList(this.route).subscribe(value => {
        console.log('image list ' + value);
        this.imglist = value;
        this.imglimit = Object.keys(this.imglist).length;
      });
    }

    change(mode: string) {
      if (mode === 'change') {
      if (this.txtcounter < (this.txtlimit - 1)) {
        this.filename = this.txtlist[this.txtcounter];
        this.getText();
        this.txtcounter++;
      } else {
        this.filename = this.txtlist[this.txtcounter];
        this.getText();
        this.txtcounter = 0;
      }
    } else if (mode === 'init') {
      this.getText();
    }
    }

    animate_img() {
      this.state = (this.state === 'visible' ?  'invisible' : 'visible');
    }

    set_visible($event) {
      this.state = 'visible';
    }

    setImg(mode: string) {
      this.bckimg = document.getElementById('home_mid_img');
      if (mode === 'change') {
      if (this.imgcounter < (this.imglimit - 1)) {
        this.image = '../../assets/image/' + this.route + '/' + this.imglist[this.imgcounter];
        this.bckimg.backgroundImage = 'url("' + this.image + '")';
        this.imgcounter++;
        console.log(this.image);
      } else {
        this.image = '../../assets/image/' + this.route + '/' + this.imglist[this.imgcounter];
        this.bckimg.style.backgroundImage = 'url(' + this.image + ')';
        this.imgcounter = 0;
        console.log(this.image);
      }
    } else if (mode === 'init') {
      // this.image = '../../assets/image/' + this.route + '/' + this.imglist[this.imgcounter];
      this.bckimg.backgroundImage = 'url("' + this.image + '")';
    }
    }

    getText() {
      this.objtext = this.homeSvc.getText(this.route, this.filename).subscribe(value => {
        console.log('text ' + value);
        this.t1 = value.l1;
        this.t2 = value.l2;
        this.t3 = value.l3;
        this.t4 = value.l4;
        this.t5 = value.l5;
        this.t6 = value.l6;
        this.t7 = value.l7;
        this.t8 = value.l8;
        this.t9 = value.l9;
        this.t10 = value.l10;
      });
    }

    previous() {
      this.state = 'invisible';
      console.log('previous button clicked');
      if (this.txtcounter === 0) {
        this.txtcounter = this.txtlimit;
      }
      if (this.txtcounter < 0) {
        this.txtcounter = this.txtlimit;
      } else {
        this.txtcounter--;
      }

      if (this.imgcounter === 0) {
        this.imgcounter = this.imglimit;
      }
      if (this.imgcounter < 0) {
        this.imgcounter = this.imglimit;
      } else {
        this.imgcounter--;
      }

      // change text
      console.log('txtlimit' + this.txtlimit);
      console.log('txtcounter' + this.txtcounter);
      console.log('filename' + this.txtlist[this.txtcounter]);
      this.filename = this.txtlist[this.txtcounter];
      this.getText();

      // change image
      this.image = '../../assets/image/' + this.route + '/' + this.imglist[this.imgcounter];
    }

    next() {
      this.state = 'invisible';
      console.log('next button clicked');
      if (this.txtcounter < (this.txtlimit - 1)) {
        this.txtcounter++;
      } else {
        this.txtcounter = 0;
      }

      if (this.imgcounter < (this.imglimit - 1)) {
        this.imgcounter++;
      } else {
        this.imgcounter = 0;
      }

      // change text
      console.log('txtlimit' + this.txtlimit);
      console.log('txtcounter' + this.txtcounter);
      console.log('filename' + this.txtlist[this.txtcounter]);
      this.filename = this.txtlist[this.txtcounter];
      this.getText();

      // change image
      this.image = '../../assets/image/' + this.route + '/' + this.imglist[this.imgcounter];
    }

    // tslint:disable-next-line:use-life-cycle-interface
    ngOnInit() {
      this.change('init');
      this.setImg('init');
    }

    // tslint:disable-next-line:use-life-cycle-interface
    ngOnDestroy() {
      if (this.objtext != null) {
        this.objtext.unsubscribe();
      }
      if (this.objtxtlist != null) {
        this.objtxtlist.unsubscribe();
      }
      if (this.objimglist != null) {
        this.objimglist.unsubscribe();
      }
      if (this.timer != null) {
        clearInterval(this.timer);
      }

    }
}
