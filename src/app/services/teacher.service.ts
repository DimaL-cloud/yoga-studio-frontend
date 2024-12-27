import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Teacher } from '../models/teacher.model';

@Injectable({
  providedIn: 'root',
})
export class TeacherService {
  private apiUrl = 'http://127.0.0.1/wordpress/wp-json/wp/v2/teacher';
  private mediaUrl = 'http://127.0.0.1/wordpress/wp-json/wp/v2/media';

  constructor(private http: HttpClient) {}

  getAllTeachers(): Observable<Teacher[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      switchMap(teachers => {
        const teacherObservables = teachers.map(teacher =>
          this.getPhotoUrl(teacher.acf.photo).pipe(
            map(photoUrl => new Teacher(teacher.acf.name, teacher.acf.title, photoUrl))
          )
        );
        return forkJoin(teacherObservables);
      })
    );
  }

  private getPhotoUrl(photoId: number): Observable<string> {
    return this.http.get<any>(`${this.mediaUrl}/${photoId}`).pipe(
      map(media => media.source_url)
    );
  }
}
