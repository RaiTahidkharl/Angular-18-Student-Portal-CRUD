import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { studentModel } from './student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private readonly baseUrl = 'http://localhost:3000/students';

  constructor(private http: HttpClient) {}

  getStudents(): Observable<studentModel[]> {
    return this.http.get<studentModel[]>(this.baseUrl);
  }

  addStudent(student: studentModel): Observable<studentModel> {
    return this.http.post<studentModel>(this.baseUrl, student);
  }

  updateStudent(id: number, student: studentModel): Observable<studentModel> {
    return this.http.put<studentModel>(`${this.baseUrl}/${id}`, student);
  }

  deleteStudent(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
