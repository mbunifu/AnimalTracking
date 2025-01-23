import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { environment } from "src/environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }


  getAdminUsers(): Observable <any[]>{

    const usersUrl = `${environment.baseUrl}/api/v1/admin/get/all`;

    return this.http.get<any[]>(usersUrl);
  }

}
