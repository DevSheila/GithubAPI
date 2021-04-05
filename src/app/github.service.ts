import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
// import { environment} from '../environments/environment'
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

  myHeaders:any= new Headers();
  public requestOptions = {
      method: 'GET',
      headers: this.myHeaders.append("Authorization", "token 1234567890"),
      redirect: 'profile'
  };

  public getProfile(searchQuery: String){

      return new Promise((resolve, reject) => {
        let apiURL = `https://api.github.com/users/${searchQuery}`;
        this.http.get(apiURL,this.requestOptions )
        .toPromise()
        .then(
            (response:any) => {
              this.userProfile= response; 
              console.log(response);
              resolve(response);
            },
            (error) => {
                    console.log(error);
                    reject();
                  }

          );
      });
  
  }


  public getRepositories(searchQuery:String){
    return new Promise((resolve, reject) => {
      let apiURL = `https://api.github.com/users/${searchQuery}/repos?`;
      this.http.get(apiURL,this.requestOptions)
      .toPromise()
      .then(
          (response:any) => {
            this.userRepositories= response; 
            console.log(response);
            resolve(response);
          },
          (error) => {
                  console.log(error);
                  reject();
                }

        );
    });
  }
  
}

 
 

