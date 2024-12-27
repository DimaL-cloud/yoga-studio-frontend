import { Routes } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {TeachersComponent} from './pages/teachers/teachers.component';
import {ClassScheduleComponent} from './pages/class-schedule/class-schedule.component';
import {GoalsComponent} from './pages/goals/goals.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'teachers', component: TeachersComponent },
  { path: 'class-schedule', component: ClassScheduleComponent },
  { path: 'goals', component: GoalsComponent },
  { path: '**', redirectTo: '' },
];
