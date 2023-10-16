import { Component, OnDestroy, OnInit } from '@angular/core';
import { Course } from 'src/app/domain/course';
import { CourseService } from 'src/app/services/course.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit, OnDestroy {

public courses: Course[];
public subCourses: Subscription;
  
  constructor(public courseService: CourseService)
  { 
    this.courses = [];
    this.subCourses = new Subscription();
  }
  
  ngOnDestroy(): void {
    this.subCourses.unsubscribe();
  }
  
  ngOnInit(): void {
    this.subCourses = new Subscription();
    this.getAll();
  }

  getAll(){
    this.subCourses = this.courseService.getAll().subscribe(data => {
      this.courses = data;
    });
  }

}
