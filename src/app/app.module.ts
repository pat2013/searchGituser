import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { ProfilesComponent } from './components/profiles.component';
import { HttpModule } from '@angular/http';
import { GithubService } from './services/GithubService';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports:      [ BrowserModule, 
                  HttpModule,
                  FormsModule
                ],
  declarations: [ AppComponent ,
                  ProfilesComponent
                ],
  providers: [ GithubService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
