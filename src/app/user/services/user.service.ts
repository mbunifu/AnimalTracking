import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpclient: HttpClient) { }

  public register
  getTotalAnimals(): Observable<any> {
    const farmerUrl = `${environment.baseUrl}/api/v1/farmAnimals/get/animal/count`;
    return this.httpclient.get<any>(farmerUrl)
  }

  fetchUsers(): Observable<any> {
    const farmerUrl = `${environment.baseUrl}/api/v1/farmers/get/all`;
    return this.httpclient.get<any>(farmerUrl)
  }



  getAdminUsers(): Observable<any[]> {

    const usersUrl = `${environment.baseUrl}/api/v1/admin/get/all`;

    return this.httpclient.get<any[]>(usersUrl);
  }

}
