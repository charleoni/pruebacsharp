import { EditorialFormsComponent } from './pages/editorial/editorial-forms.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AutorComponent } from './pages/autor/autor.component';
import { EditorialComponent } from './pages/editorial/editorial.component';
import { ErrorComponent } from './pages/error/error.component';
import { HomeComponent } from './pages/home/home.component';
import { LibrosComponent } from './pages/libros/libros.component';
import { FormsAutorComponent } from './pages/autor/forms-autor.component';
import { FormsLibrosComponent } from './pages/libros/forms-libros.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'autor', component: AutorComponent },
  { path: 'autornew', component: FormsAutorComponent },
  { path: 'autornew/:id', component: FormsAutorComponent },
  { path: 'editorial', component: EditorialComponent },
  { path: 'editorialnew', component: EditorialFormsComponent },
  { path: 'editorialnew/:id', component: EditorialFormsComponent },
  { path: 'libros', component: LibrosComponent },
  { path: 'librosnew', component: FormsLibrosComponent },
  { path: 'librosnew/:id', component: FormsLibrosComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
