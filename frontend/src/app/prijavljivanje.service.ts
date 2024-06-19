import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PrijavljivanjeService {

  constructor(private http:HttpClient) { }
  private host = "http://localhost:4000"

  prijava(username:string, password:string, type:string){
    const data={
      username:username,
      password: password,
      type: type
    }

    return this.http.post(this.host+'/users/login', data);
  }
}
