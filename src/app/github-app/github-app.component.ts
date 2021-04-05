import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { GithubService } from '../github.service';
import {User} from '../class/user'
@Component({
  selector: 'app-github-app',
  templateUrl: './github-app.component.html',
  styleUrls: ['./github-app.component.css']
})
export class GithubAppComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
