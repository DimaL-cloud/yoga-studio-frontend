import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import { ClassSchedule } from '../models/class-schedule.model';
import { Teacher } from '../models/teacher.model';

@Injectable({
  providedIn: 'root',
})
export class ClassScheduleService {
  private classScheduleApiUrl = 'http://localhost/wordpress/wp-json/wp/v2/class_schedule?acf_format=standard';
  private teacherApiUrl = 'http://localhost/wordpress/wp-json/wp/v2/teacher';

  constructor(private http: HttpClient) {}

  getAllClassSchedules(): Observable<ClassSchedule[]> {
    return forkJoin({
      classSchedules: this.http.get<any[]>(this.classScheduleApiUrl),
      teachers: this.http.get<any[]>(this.teacherApiUrl)
    }).pipe(
      map(({ classSchedules, teachers }) => {
        const teacherMap = new Map<number, Teacher>();
        teachers.forEach(teacher => {
          teacherMap.set(teacher.id, new Teacher(teacher.acf.name, teacher.acf.title, teacher.acf.photo));
        });

        return classSchedules.map(classSchedule => {
          const teacher = teacherMap.get(classSchedule.acf.teacher[0].ID);
          return new ClassSchedule(
            classSchedule.acf.name,
            teacher?.name || '',
            classSchedule.acf.schedule
          );
        });
      })
    );
  }
}
