import { Component, OnInit } from '@angular/core';
import  {GithubService} from '../github.service'
import{ Repositories} from '../class/repositories'

@Component({
  selector: 'app-github-repos',
  templateUrl: './github-repos.component.html',
  styleUrls: ['./github-repos.component.css']
})
export class GithubReposComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
