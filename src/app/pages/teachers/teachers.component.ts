import {Component, OnInit} from '@angular/core';
import {TeacherCardComponent} from './teacher-card/teacher-card.component';
import {NgForOf, NgIf} from '@angular/common';
import {Teacher} from '../../models/teacher.model';
import {TeacherService} from '../../services/teacher.service';

@Component({
  selector: 'app-teachers',
  imports: [
    TeacherCardComponent,
    NgForOf,
    NgIf
  ],
  templateUrl: './teachers.component.html',
  standalone: true,
  styleUrl: './teachers.component.css'
})
export class TeachersComponent implements OnInit {
  allTeachers: Teacher[] = [];

  displayedTeachers: Teacher[] = [];

  constructor(private teacherService: TeacherService) {}

  ngOnInit() {
    this.teacherService.getAllTeachers().subscribe(teachers => {
      this.allTeachers = teachers;
      this.displayedTeachers = this.allTeachers.slice(0, 8);
    });
  }

  loadMoreTeachers() {
    const currentLength = this.displayedTeachers.length;
    const additionalTeachers = this.allTeachers.slice(currentLength, currentLength + 8);
    this.displayedTeachers = [...this.displayedTeachers, ...additionalTeachers];
  }

  hasMoreTeachers(): boolean {
    return this.displayedTeachers.length < this.allTeachers.length;
  }
}
