import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackEndApiService {
  apiUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) {
  }

  login(email: string, password: string): Observable<any> {
    const data = {email, password};
    return this.http.post(`${this.apiUrl}/login`, data);
  }

  getList() {
    return this.http.get(`${this.apiUrl}/list`);
  }

  addCustomer(name: string, age: number, phone: string, address: string): Observable<any> {
    const data = {name, age, phone, address};
    return this.http.post(`${this.apiUrl}/create`, data);
  }

  delete(id: number): Observable<any> {
      return this.http.delete(`${this.apiUrl}/customers/${id}/delete`);
  }

  detail(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/customers/${id}/detail`);
  }

  update(id: number, name: string, age: number, phone: string, address: string): Observable<any> {
    const data = {name, age, phone, address};
    return this.http.put(`${this.apiUrl}/customers/${id}/update`, data);
  }
}
