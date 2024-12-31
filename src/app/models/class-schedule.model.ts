export class ClassSchedule {
  name: string;
  teacher: string;
  schedule: string;

  constructor(type: string, teacher: string, schedule: string) {
    this.name = type;
    this.teacher = teacher;
    this.schedule = schedule;
  }
}
