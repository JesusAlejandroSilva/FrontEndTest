import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../domain/users';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  public url: string;

  constructor(public httpClient: HttpClient) {
    this.url = environment.apiUrl + 'Users/';
   }

  public getAll():Observable<any>{
    return this.httpClient.get(this.url);
  }

  public getById(id:number):Observable<any>{
    return this.httpClient.get(this.url + id);
  }

  public save(users: Users): Observable<any>{
    return this.httpClient.post(this.url, users);
  }

  public delete(id:number){
    return this.httpClient.delete(this.url + id);
  }

}
