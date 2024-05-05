import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from '../../../shared/button/button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [RouterOutlet, ButtonComponent],
})
export class AppComponent {
  title = 'admin';
}
