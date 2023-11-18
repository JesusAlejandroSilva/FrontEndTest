import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonInsertComponent } from './component/persons-insert/persons-insert.component';
import { UserInsertComponent } from './component/user-insert/user-insert.component';
import { PersonsListComponent } from './component/user-list/user-list.component';

const routes: Routes = [
  {path:'user-list',component: PersonsListComponent},
  {path: 'persons-insert', component: PersonInsertComponent},
  {path: 'user-insert', component: UserInsertComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
