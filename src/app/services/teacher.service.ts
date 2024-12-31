import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Teacher } from '../models/teacher.model';

@Injectable({
  providedIn: 'root',
})
export class TeacherService {
  private apiUrl = 'http://localhost/wordpress/wp-json/wp/v2/teacher?acf_format=standard';

  constructor(private http: HttpClient) {}

  getAllTeachers(): Observable<Teacher[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map(teachers =>
        teachers.map(teacher =>
          new Teacher(teacher.acf.name, teacher.acf.title, teacher.acf.photo)
        )
      )
    );
  }

}
