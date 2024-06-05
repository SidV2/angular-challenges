import { Component } from '@angular/core';
import { StudentCardComponent } from './component/student-card/student-card.component';
import { TeacherCardComponent } from './component/teacher-card/teacher-card.component';

@Component({
  selector: 'app-root',
  template: `
    <div class="grid grid-cols-3 gap-3">
      <app-teacher-card></app-teacher-card>
      <app-student-card></app-student-card>
    </div>
  `,
  standalone: true,
  imports: [TeacherCardComponent, StudentCardComponent],
})
export class AppComponent {}
