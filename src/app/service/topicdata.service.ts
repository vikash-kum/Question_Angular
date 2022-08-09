import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TopicdataService {

  constructor(private http : HttpClient) { }

  getTopic(subject : string) {
    return this.http.get(`http://localhost:8080/admin/${subject}/topic`);
  }
}
