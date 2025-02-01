import { Component, Type } from '@angular/core';
import { MyTableComponent } from './modules/my-module/my-table/my-table.component';

interface ITab {
  label: string;
  componentOutlet: Type<any> | any;
  displayPermission: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-ui-2';

  tabs: Array<ITab> = [
    {
      label: 'My Table',
      componentOutlet: MyTableComponent,
      displayPermission: ''
    },
    {
      label: 'Blank Tab',
      componentOutlet: MyTableComponent,
      displayPermission: ''
    }
  ]
}
