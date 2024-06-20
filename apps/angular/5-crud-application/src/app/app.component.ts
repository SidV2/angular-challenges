import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TodoComponent } from './components/todo.component';

@Component({
  standalone: true,
  imports: [CommonModule, TodoComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  template: `
    <app-todo />
  `,
  styles: [],
})
export class AppComponent {}
