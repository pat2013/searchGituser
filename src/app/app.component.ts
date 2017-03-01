import { Component } from '@angular/core';
import { GithubService } from './services/GithubService';
import { HttpModule } from '@angular/http';
import { ProfilesComponent } from './components/profiles.component';

@Component({
  selector: 'my-app',
  templateUrl: `./main.html`,
  providers: [GithubService],
})

export class AppComponent  {
  private title: string;
    constructor() {
        this.title = "Github Search";
    }
}
