import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  template: `<button
    [ngStyle]="{ 'background-color': color }"
    pButton
    type="button"
    label="Click Me"
  ></button>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Input() color: string = 'blue';
}
