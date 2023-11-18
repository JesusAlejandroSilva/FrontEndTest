import { Component, OnDestroy, OnInit } from '@angular/core';
import { Persons } from 'src/app/domain/persons';
import { PersonsService } from 'src/app/services/persons.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class PersonsListComponent implements OnInit, OnDestroy {

public persons: Persons[];
public subpersons: Subscription;
  
  constructor(public personsService: PersonsService)
  { 
    this.persons = [];
    this.subpersons = new Subscription();
  }
  
  ngOnDestroy(): void {
    this.subpersons.unsubscribe();
  }
  
  ngOnInit(): void {
    this.subpersons = new Subscription();
    this.getAll();
  }

  getAll(){
    this.subpersons = this.personsService.getAll().subscribe(data => {
      this.persons = data;
    });
  }

}
