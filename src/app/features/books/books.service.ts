import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getBooks(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/books`)
  }

  addBook(data: any) {
    return this.http.post(`${this.baseUrl}/books`, data)
  }

  deleteBook(id: string) {
    return this.http.delete(`${this.baseUrl}/books/${id}`)
  }
}


