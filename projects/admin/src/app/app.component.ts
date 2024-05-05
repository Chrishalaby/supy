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
  title = 'admin';

  users = [
    { name: 'John Doe', age: 30 },
    { name: 'Jane Doe', age: 25 },
  ];
  userColumns = [
    { field: 'name', header: 'Name' },
    { field: 'age', header: 'Age' },
  ];
}
