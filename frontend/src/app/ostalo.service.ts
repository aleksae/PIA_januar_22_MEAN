import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OstaloService {

  constructor(private http: HttpClient) { }
  private host = "http://localhost:4000"

  all_orders_for_user(username:string){
    const data={
      username: username
    }
    return this.http.post(this.host+'/orders/all_for_user', data)
  }
  all_extras(){
    return this.http.get(this.host+'/orders/all_extras')
  }
}
