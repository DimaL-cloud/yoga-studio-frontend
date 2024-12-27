export class ClassSchedule {
  type: string;
  teacher: string;
  schedule: { day: string, time: string }[];

  constructor(type: string, teacher: string, schedule: { day: string, time: string }[]) {
    this.type = type;
    this.teacher = teacher;
    this.schedule = schedule;
  }
}
