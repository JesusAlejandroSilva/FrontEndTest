import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseListComponent } from './component/course-list/course-list.component';
import { StudentListComponent } from './component/student-list/student-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CourseService } from './services/persons.service';
import { CourseInsertComponent } from './component/course-insert/course-insert.component';
import { FormsModule } from '@angular/forms';
import { CourseEditComponent } from './component/course-edit/course-edit.component';
import { CourseDeleteComponent } from './component/course-delete/course-delete.component';
import { StudentInsertComponent } from './component/user-insert/user-insert.component';
import { StudentEditComponent } from './component/student-edit/student-edit.component';
import { StudentDeleteComponent } from './component/student-delete/student-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    StudentListComponent,
    CourseInsertComponent,
    CourseEditComponent,
    CourseDeleteComponent,
    StudentInsertComponent,
    StudentEditComponent,
    StudentDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [
    CourseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
