import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TableModule } from 'primeng/table';
@Component({
  selector: 'app-custom-grid',
  standalone: true,
  imports: [CommonModule, TableModule],
  template: `<p-table
    [value]="data"
    [columns]="columns"
    responsiveLayout="scroll"
  >
    <ng-template pTemplate="header" let-columns>
      <tr>
        <th *ngFor="let col of columns">
          {{ col.header }}
        </th>
      </tr>
    </ng-template>
    <ng-template pTemplate="body" let-rowData let-columns="columns">
      <tr>
        <td *ngFor="let col of columns">
          {{ rowData[col.field] }}
        </td>
      </tr>
    </ng-template>
  </p-table>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomGridComponent {
  @Input() data: any[] = [];
  @Input() columns: any[] | undefined;
}
