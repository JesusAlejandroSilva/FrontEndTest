import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseListComponent } from './component/course-list/course-list.component';
import { CourseInsertComponent } from './component/course-insert/course-insert.component';
import { CourseEditComponent } from './component/course-edit/course-edit.component';
import { CourseDeleteComponent } from './component/course-delete/course-delete.component';
import { StudentListComponent } from './component/student-list/student-list.component';
import { StudentInsertComponent } from './component/student-insert/student-insert.component';
import { StudentEditComponent } from './component/student-edit/student-edit.component';
import { StudentDeleteComponent } from './component/student-delete/student-delete.component';

const routes: Routes = [
  {path: 'course-list', component: CourseListComponent},
  {path: 'course-insert', component: CourseInsertComponent},
  {path: 'client-edit/:id', component: CourseEditComponent},
  {path: 'client-delete/:id', component: CourseDeleteComponent},
  {path: 'student-list', component: StudentListComponent},
  {path: 'student-insert', component: StudentInsertComponent},
  {path: 'student-edit/:id', component: StudentEditComponent},
  {path: 'student-delete/:id', component: StudentDeleteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
