import { Component } from '@angular/core';
import { AbstractTable, ICell } from '../../../shared/table/abstract-table';

@Component({
  selector: 'app-my-table',
  standalone: false,
  
  templateUrl: './my-table.component.html',
  styleUrl: './my-table.component.css'
})
export class MyTableComponent extends AbstractTable {
  override displayedColumns: string[] = ['Text', 'Check Box', 'Date', 'Date Time'];
  override rowData: Array<Array<ICell>> = [
    [
      {
        name: 'Text',
        content: 'Text',
        type: this.TEXT,
      },
      {
        name: 'Check Box',
        content: true,
        type: this.CHECKBOX
      },
      {
        name: 'Date',
        content: '01-12-2024',
        type: this.DATE
      },
      {
        name: 'Date Time',
        content: '01-12-2024',
        type: this.DATE_TIME
      },
    ],
    [
      {
        name: 'Text',
        content: 'Text',
        type: this.TEXT,
        rowspan: 2
      },
      {
        name: 'Check Box',
        content: true,
        type: this.CHECKBOX
      },
      {
        name: 'Date',
        content: '01-12-2024',
        type: this.DATE
      },
      {
        name: 'Date Time',
        content: '01-12-2024',
        type: this.DATE_TIME
      },
    ],
    [
      {
        name: 'Check Box',
        content: false,
        type: this.CHECKBOX
      },
      {
        name: 'Date',
        content: '01-14-2024',
        type: this.DATE
      },
      {
        name: 'Date Time',
        content: '01-14-2024',
        type: this.DATE_TIME
      },
    ],
    [
      {
        name: 'Text',
        content: 'Text',
        type: this.TEXT,
        rowspan: 3
      },
      {
        name: 'Check Box',
        content: false,
        type: this.CHECKBOX
      },
      {
        name: 'Date',
        content: '01-12-2024',
        type: this.DATE
      },
      {
        name: 'Date Time',
        content: '01-12-2024',
        type: this.DATE_TIME
      },
    ],
    [
      {
        name: 'Check Box',
        content: true,
        type: this.CHECKBOX,
        rowspan: 2
      },
      {
        name: 'Date',
        content: '01-12-2024',
        type: this.DATE
      },
      {
        name: 'Date Time',
        content: '01-12-2024',
        type: this.DATE_TIME
      },
    ],
    [
      {
        name: 'Date',
        content: '01-12-2024',
        type: this.DATE
      },
      {
        name: 'Date Time',
        content: '01-12-2024',
        type: this.DATE_TIME
      },
    ],
  ];
}
