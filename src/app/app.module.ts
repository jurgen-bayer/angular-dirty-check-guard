import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './features/home/home.component';
import { EditComponent } from './features/edit/edit.component';
import { RouteNotFoundComponent } from './features/route-not-found/route-not-found.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmDialogComponent } from './core/dialogs/confirm-dialog/confirm-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EditComponent,
    RouteNotFoundComponent,
    ConfirmDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
