import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/domain/course';
import { CourseService } from 'src/app/services/course.service';
import { __values } from 'tslib';
import swal from'sweetalert2';

@Component({
  selector: 'app-course-delete',
  templateUrl: './course-delete.component.html',
  styleUrls: ['./course-delete.component.css']
})
export class CourseDeleteComponent implements OnInit{
  public id!: number;
  public course: Course;
  public showMsg: boolean = false;
  public msg: string;
  public type: string;
  public Alert: string;
  
  constructor(public courseService: CourseService,
    private router: Router, private activatedRoute: ActivatedRoute){ 
      this.course = new Course(0, '', 0);
      this.msg = '';
      this.type = '';
      this.Alert = '';
  }

  ngOnInit(): void {
    this.GetById();
  }

    public GetById(){
      this.activatedRoute.params.subscribe(params =>{
        this.id = params['id'];
        this.courseService.getById(this.id).subscribe(data => {
        this.course = data;
      });
    });
  }
  
  public delete(){
    this.courseService.delete(this.course.CourseID).subscribe(data => {
      this.router.navigate(['/course-list'])
      swal.fire('Successfully Deleted', this.Alert, 'success')
    }, error => {
      console.log(error);
      this.showMsg = true;
      this.msg = 'An error has ocurred in the procedure';
      this.type = 'danger'
    });
  }

}
