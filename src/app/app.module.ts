import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule, Router } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeViewComponent } from './home-view/home-view.component';
import { AboutViewComponent} from './about-view/about-view.component';
// add more page components here

@NgModule({
  declarations: [
    AppComponent,
    HomeViewComponent,
    AboutViewComponent
    // add more page components here
  ],
  imports: [
    RouterModule.forRoot([
      {path: 'home', component: HomeViewComponent},
      {path: 'about', component: AboutViewComponent}, // add new route before '' and not after
      {path: '', redirectTo: '/', pathMatch: 'full'}, // default page to load
      {path: '**', redirectTo: '/', pathMatch: 'full'} // default page to load when page is not found
    ]),
    BrowserModule,
    HttpModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [HttpClientModule, RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
