import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomGridComponent } from '../../../shared/CustomGrid/CustomGrid.component';
import { ButtonComponent } from '../../../shared/button/button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [RouterOutlet, ButtonComponent, CustomGridComponent],
})
export class AppComponent {
  title = 'client';
  users = [
    { location: 'New York', size: 30 },
    { location: 'Los Angeles', size: 25 },
  ];
  userColumns = [
    { field: 'location', header: 'Location' },
    { field: 'size', header: 'Size' },
  ];
}
