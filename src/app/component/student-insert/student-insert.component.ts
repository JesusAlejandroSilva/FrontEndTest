import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/domain/student';
import { StudentService } from 'src/app/services/student.service';
import swal from'sweetalert2';

@Component({
  selector: 'app-student-insert',
  templateUrl: './student-insert.component.html',
  styleUrls: ['./student-insert.component.css']
})
export class StudentInsertComponent {

  
  public student: Student;
  public showMsg: boolean = false;
  public msg: string;
  public type: string;
  public Alert: string;
  
  constructor(public studentService: StudentService,
    private router: Router){ 
      this.student = new Student(0, '', '', new Date());
      this.msg = '';
      this.type = '';
      this.Alert = '';
  }

  ngOnInit(): void {
    this.student = new Student(0, '', '', new Date());
  }
   
  public save(){
    this.studentService.save(this.student).subscribe(data => {
      this.router.navigate(['/student-list'])
      swal.fire('Saved successfully', this.Alert, 'success')
    }, error => {
      console.log(error);
      this.showMsg = true;
      this.msg = 'An error has ocurred in the procedure';
      this.type = 'danger'
    });
  }


}
