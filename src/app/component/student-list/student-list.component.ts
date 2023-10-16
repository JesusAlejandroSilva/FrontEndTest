import { Component } from '@angular/core';
import { Student } from 'src/app/domain/student';
import { Subscription } from 'rxjs';
import { StudentService } from 'src/app/services/student.service';


@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent {

  public students: Student[];
  public substudents: Subscription;
    
    constructor(public studentService: StudentService )
    { 
      this.students = [];
      this.substudents = new Subscription();
    }
    
    ngOnDestroy(): void {
      this.substudents.unsubscribe();
    }
    
    ngOnInit(): void {
      this.substudents = new Subscription();
      this.getAll();
    }
  
    getAll(){
      this.substudents = this.studentService.getAll().subscribe(data => {
        this.students = data;
      });
    }
}
