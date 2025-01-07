import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MyTableComponent } from './modules/my-module/my-table/my-table.component';
import { SortableDirective } from './shared/sortable-directive/sortable.directive';
import { UndoDirective } from './shared/undo-directive/undo.directive';
import { MyNewModalComponent } from './modules/my-module/my-new-modal/my-new-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MyTableComponent,
    SortableDirective,
    UndoDirective,
    MyNewModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
