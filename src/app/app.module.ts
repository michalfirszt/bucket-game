import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProgressBarModule } from 'angular-progress-bar';
import { DragAndDropModule } from 'angular-draggable-droppable';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BucketGameComponent } from './bucket-game/bucket-game.component';

@NgModule({
  declarations: [
    AppComponent,
    BucketGameComponent
  ],
  imports: [
    ProgressBarModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DragAndDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
