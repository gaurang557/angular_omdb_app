import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OmdbService {

  movietitle:string="harry potter";
  
  constructor(
    private http:HttpClient
  ) { }
  searchmovies():Observable<any>{
    const url=`https://www.omdbapi.com/?apikey=a0e14d81&s=`+this.movietitle;
    return this.http.get(url)
  }
}