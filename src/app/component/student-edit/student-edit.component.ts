import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Student } from 'src/app/domain/student';
import { StudentService } from 'src/app/services/student.service';
import swal from'sweetalert2';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent {

  public id!: number;
  public student: Student;
  public showMsg: boolean = false;
  public msg: string;
  public type: string;
  public Alert: string;
  
  constructor(public studentService: StudentService,
    private router: Router, private activatedRoute: ActivatedRoute){ 
      this.student = new Student(0, '', '', new Date());
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
      this.studentService.getById(this.id).subscribe(data => {
      this.student = data;
    });
  });
}

  public edit(){
    this.studentService.edit(this.student).subscribe(data => {
      this.router.navigate(['/student-list'])
      swal.fire('Successfully Edited', this.Alert, 'success')
    }, error => {
      console.log(error);
      this.showMsg = true;
      this.msg = 'An error has ocurred in the procedure';
      this.type = 'danger'
    });
  }
}
