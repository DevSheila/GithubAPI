import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GithubProfileComponent} from './github-profile/github-profile.component';
import {GithubReposComponent} from './github-repos/github-repos.component';
import {NotFoundComponent} from './not-found/not-found.component'
const routes: Routes = [
  { path: 'profile', component: GithubProfileComponent},
  {path: 'repositories', component: GithubReposComponent},
  {path: '', redirectTo:'/profile', pathMatch:'full'},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
