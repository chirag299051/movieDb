import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  url: any = "https://www.omdbapi.com/?apikey=b9e96893&t="

  getData(name) {
    return this.http.get(this.url + name);
  }

}
