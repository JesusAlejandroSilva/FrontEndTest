import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/domain/course';
import { CourseService } from 'src/app/services/course.service';
import swal from'sweetalert2';
@Component({
  selector: 'app-course-insert',
  templateUrl: './course-insert.component.html',
  styleUrls: ['./course-insert.component.css']
})
export class CourseInsertComponent implements OnInit {

  public course: Course;
  public showMsg: boolean = false;
  public msg: string;
  public type: string;
  public Alert: string;
  
  constructor(public courseService: CourseService,
    private router: Router){ 
      this.course = new Course(0, '', 0);
      this.msg = '';
      this.type = '';
      this.Alert = '';
  }

  ngOnInit(): void {
    this.course = new Course(0, '', 0);
  }
   
  public save(){
    this.courseService.save(this.course).subscribe(data => {
      this.router.navigate(['/course-list'])
      swal.fire('Saved successfully', this.Alert, 'success')
    }, error => {
      console.log(error);
      this.showMsg = true;
      this.msg = 'An error has ocurred in the procedure';
      this.type = 'danger'
    });
  }

}
