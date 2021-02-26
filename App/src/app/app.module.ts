import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditorialComponent } from './pages/editorial/editorial.component';
import { AutorComponent } from './pages/autor/autor.component';
import { LibrosComponent } from './pages/libros/libros.component';
import { HomeComponent } from './pages/home/home.component';
import { ErrorComponent } from './pages/error/error.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditorialFormsComponent } from './pages/editorial/editorial-forms.component';
import { FormsAutorComponent } from './pages/autor/forms-autor.component';
import { FormsLibrosComponent } from './pages/libros/forms-libros.component';


@NgModule({
  declarations: [
    AppComponent,
    EditorialComponent,
    AutorComponent,
    LibrosComponent,
    HomeComponent,
    ErrorComponent,
    EditorialFormsComponent,
    FormsAutorComponent,
    FormsLibrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
