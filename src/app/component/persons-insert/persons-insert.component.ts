import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persons } from 'src/app/domain/persons';
import { PersonsService } from 'src/app/services/persons.service';
import swal from'sweetalert2';
@Component({
  selector: 'app-persons-insert',
  templateUrl: './persons-insert.component.html',
  styleUrls: ['./persons-insert.component.css']
})
export class PersonInsertComponent implements OnInit {

  public persons: Persons;
  public showMsg: boolean = false;
  public msg: string;
  public type: string;
  public Alert: string;
  
  constructor(public personService: PersonsService,
    private router: Router){ 
      this.persons = new Persons('','','','','',new Date());
      this.msg = '';
      this.type = '';
      this.Alert = '';
  }

  ngOnInit(): void {
    this.persons = new Persons('','','','','',new Date());
  }
   
  public save(){
    this.personService.save(this.persons).subscribe(data => {
      this.router.navigate(['/user-list'])
      swal.fire('Saved successfully', this.Alert, 'success')
    }, error => {
      console.log(error);
      this.showMsg = true;
      this.msg = 'An error has ocurred in the procedure';
      this.type = 'danger'
    });
  }

}
