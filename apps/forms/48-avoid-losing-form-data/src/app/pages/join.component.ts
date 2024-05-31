import { Dialog } from '@angular/cdk/dialog';
import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  inject,
  signal,
} from '@angular/core';
import { Observable } from 'rxjs';
import { AlertDialogComponent } from '../ui/dialog.component';
import { FormComponent } from '../ui/form.component';
@Component({
  standalone: true,
  imports: [FormComponent, AlertDialogComponent],
  template: `
    <section class="mx-auto	max-w-screen-sm">
      <div class="rounded-lg bg-white p-8 shadow-lg lg:p-12">
        <app-form (isSaved)="isSaved.set($event)" />
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JoinComponent {
  isSaved = signal(true);
  #dialog = inject(Dialog);

  @HostListener('window:beforeunload', ['$event'])
  windowBeforeUnoad($event: any) {
    let dialogRef;
    if (!this.isSaved()) {
      dialogRef = this.#dialog.open(AlertDialogComponent);
    }
  }

  canDeactivate(): boolean | Observable<unknown> {
    if (!this.isSaved()) {
      const dialogRef = this.#dialog.open(AlertDialogComponent);
      return dialogRef.closed;
    }
    return true;
  }
}
