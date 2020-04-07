import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';


import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule,HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, HomeComponent, AboutComponent ],
  providers: [],
  bootstrap:    [ AppComponent ],
})
export class AppModule { }
