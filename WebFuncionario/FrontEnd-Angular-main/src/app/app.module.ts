import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { HomeComponent } from './pages/home/home.component';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [ 
    BrowserModule, 
    HttpClientModule 
  ],
  declarations: [
    
  ],
  bootstrap: [
    
  ]
})
export class AppModule { }
