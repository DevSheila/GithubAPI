import { Component, OnInit } from '@angular/core';
import  {GithubService} from '../github.service'
import{ Repositories} from '../class/repositories'

@Component({
  selector: 'app-github-repos',
  templateUrl: './github-repos.component.html',
  styleUrls: ['./github-repos.component.css']
})
export class GithubReposComponent implements OnInit {
  userRepositories :any;
  name:any;

  constructor(public githubService:GithubService) { }

 

  searchRepositories(searchName: any ){
    console.log(searchName)
    this.githubService.getRepositories(searchName).then((response :any)=>{
        this.userRepositories= this.githubService.userRepositories;
       
        console.log(this.userRepositories);
      },
      (error)=>{
        console.log(error)
      });
  }

  ngOnInit(): void {
  }

}
