import { Component, Input, OnInit } from '@angular/core';
import  {GithubService} from '../github.service'
import{ User} from '../class/user'

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  userProfile!: User;

  constructor(public githubService:GithubService) { }

 

  searchUser(searchName: any ){
    console.log(searchName)
    this.githubService.getProfile(searchName).then((response :any)=>{
        this.userProfile = this.githubService.userProfile;
        // this.userProfile = response;
       
        console.log(this.userProfile);
      },
      (error)=>{
        console.log(error)
      });
  }


  ngOnInit(): void {
    
    this.searchUser('philipplackner')
  }
}
