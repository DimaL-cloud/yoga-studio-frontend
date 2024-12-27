export class JoinUsFormModel {
  name: string = '';
  phone: string = '';
  class: string = '';

  constructor(name: string, phone: string, course: string) {
    this.name = name;
    this.phone = phone;
    this.class = course;
  }
}
