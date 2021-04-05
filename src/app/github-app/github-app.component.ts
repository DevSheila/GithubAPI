import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { GithubService } from '../github.service';
import {User} from '../class/user'
@Component({
  selector: 'app-github-app',
  templateUrl: './github-app.component.html',
  styleUrls: ['./github-app.component.css']
})
export class GithubAppComponent implements OnInit {

  @Output() searchOutput = new EventEmitter<any>()
  // constructor() { }


  userProfile = new User(0,0,0,"","","","","",new Date())
  searchName: any ;

  search(){
    this.searchOutput.emit(this.searchName);
    console.log(this.searchName)
    this.userProfile = new User(0,0,0,"","","","","",new Date())
    console.log(this.searchOutput)
    this.searchName=""

  }
  constructor() { }

  ngOnInit(): void {
  }

}
