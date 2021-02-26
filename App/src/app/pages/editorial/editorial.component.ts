import { StorageService } from './../../services/storage.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import {ApiserviceService} from './../../services/apiservice.service'

import { environment } from '../../../environments/environment';
const { server } = environment;

@Component({
  selector: 'app-editorial',
  templateUrl: './editorial.component.html',
  styleUrls: ['./editorial.component.scss']
})
export class EditorialComponent implements OnInit {
  public categories: any;
  public isLoading: boolean;
  public urlImage = server;
  public editoriales: any;

  constructor(
    private api: ApiserviceService,
    // private loading: LoadingService,
    private storage: StorageService,
    private router: Router
  ) {
    // this.loading.isLoading.subscribe(isLoading => this.isLoading = isLoading);
  }

  ngOnInit(): void {
    this.api.all('editorial').subscribe(editoriales => {
      this.editoriales = editoriales.data;
      console.log(editoriales.date);
    });
  }

  goToCategory(category: any): void {
    this.storage.save('__editorial', category);
    this.router.navigate(['/admin/parametros/categoria', category.id]);
  }

  setCategory(editoriales: any): void {
    this.editoriales = editoriales;
  }

  delete(id: number, posicion: number): void {
    this.api.delete(`editorial/${id}`).subscribe(() => {
      this.editoriales.map(item => {
        debugger
        if (item.idEditorial === id) {
          this.editoriales.splice(posicion,1)
        }
      });
    });
  }

  goToEditorial(editorial: any): void {
      this.storage.save('__editorial', editorial);
      this.router.navigate(['/editorialnew', editorial.idEditorial]);
    }
}
