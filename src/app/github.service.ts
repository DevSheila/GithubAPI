import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment} from '../environments/environment'
import { Observable, throwError } from 'rxjs';
import {User} from './class/user'
import {Repositories} from './class/repositories'
@Injectable({
  providedIn: 'root'
})
export class GithubService {

  userProfile = new User(0,0,0,"","","","","",new Date);
  userRepositories = new Repositories(0,0,"","","","",new Date);

  constructor(private http :HttpClient) {
   }
}
