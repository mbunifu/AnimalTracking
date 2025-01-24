import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GeotrackingService {

  constructor(private httpClient : HttpClient) { }

  //Get all animal species
  getAllAnimalSpecies(): Observable<any> {
    const getUrl = `${environment.API}/api/v1/productCategories/get/all`;

    return this.httpClient.get<any>(getUrl);
  }

  //get animal breeds
  getAnimalBreeds(speciesId: number):Observable<any> {
    const getUrl = `${environment.API}/api/v1/typeOfProducts/get/all?categoryId=${speciesId}`;

    return this.httpClient.get<any>(getUrl);
  }
}
