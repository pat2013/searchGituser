import { Component } from '@angular/core';
import { GithubService } from '../services/GithubService';
import 'rxjs/add/operator/map';

@Component({
  selector: 'my-profile',
  templateUrl: `./profile.html`
})

export class ProfilesComponent {
  user = [];
  repos = [];
  username : string;
  constructor(private githubService: GithubService) {
    
  }

  searchUser(){
        console.log('It Works');
        this.githubService.updateUser(this.username);

        this.githubService.getUser().subscribe(user => {
            this.user = user;
        })

        this.githubService.getRepos().subscribe(repos => {
            this.repos = repos;
        })
    }
}
