import { Component, Input, OnInit } from '@angular/core';
import  {GithubService} from '../github.service'
import{ User} from '../class/user'
@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
