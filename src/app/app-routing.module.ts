import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {ListComponent} from './list/list.component';
import {LoginedGuard} from './logined.guard';
import {CreateComponent} from './create/create.component';
import {DeleteComponent} from './delete/delete.component';
import {UpdateComponent} from './update/update.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'list', component: ListComponent},
  {
    path: '', canActivate: [LoginedGuard],
    children: [
      {path: 'create', component: CreateComponent},
      {path: 'list/delete/:id', component: DeleteComponent},
      {path: 'list/update/:id', component: UpdateComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
