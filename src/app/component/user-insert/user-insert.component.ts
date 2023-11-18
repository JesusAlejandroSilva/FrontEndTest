import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from 'src/app/domain/users';
import { UsersService } from 'src/app/services/users.service';
import swal from'sweetalert2';

@Component({
  selector: 'app-user-insert',
  templateUrl: './user-insert.component.html',
  styleUrls: ['./user-insert.component.css']
})
export class UserInsertComponent {

  public users: Users;
  public showMsg: boolean = false;
  public msg: string;
  public type: string;
  public Alert: string;
  
  constructor(public usersService: UsersService,
    private router: Router){ 
      this.users = new Users('', '');
      this.msg = '';
      this.type = '';
      this.Alert = '';
  }

  ngOnInit(): void {
    this.users = new Users('', '');
  }
   
  public save(){
    this.usersService.save(this.users).subscribe(data => {
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
