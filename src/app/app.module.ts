import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';


import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MatToolbarModule, MatIconModule, MatCardModule, MatButtonModule,MatProgressSpinnerModule} from '@angular/material';
@NgModule({
  imports:[ BrowserModule, FormsModule, AppRoutingModule,HttpClientModule, MatToolbarModule, MatIconModule, MatButtonModule, MatCardModule ,MatProgressSpinnerModule],
  declarations: [ AppComponent, HelloComponent, HomeComponent, AboutComponent ],
  providers: [],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
