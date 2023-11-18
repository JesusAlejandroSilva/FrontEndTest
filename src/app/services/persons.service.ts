import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persons } from '../domain/persons';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PersonsService {

 public url: string;

  constructor(public httpClient: HttpClient) {
    this.url = environment.apiUrl + 'Persons/';
   }

  public getAll():Observable<any>{
    return this.httpClient.get(this.url);
  }

  public getById(id:number):Observable<any>{
    return this.httpClient.get(this.url + id);
  }

  public save(persons: Persons): Observable<any>{
    return this.httpClient.post(this.url, persons);
  }

  public edit(persons: Persons): Observable<any>{
    return this.httpClient.put(this.url + '/'+ persons.Id_Number, persons);
  }

  public delete(id:number){
    return this.httpClient.delete(this.url + id);
  }


}
