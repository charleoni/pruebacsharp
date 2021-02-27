import { StorageService } from './../../services/storage.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import {ApiserviceService} from './../../services/apiservice.service'

import { environment } from '../../../environments/environment';
const { server } = environment;

import Swal from 'sweetalert2';

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
        if (item.idEditorial === id) {
          this.confirmar()
          this.editoriales.splice(posicion,1)
        }
      });
    });
  }

  goToEditorial(editorial: any): void {
      this.storage.save('__editorial', editorial);
      this.router.navigate(['/editorialnew', editorial.idEditorial]);
    }

  anular(editarialId: any, indexOfElement: number) {
    
    Swal.fire({
      title: '¿Estas seguro?',
      html: `¡Esto eliminará el registro con id <strong>#${editarialId}</strong>!`,
      icon: 'warning',
      // input: 'textarea',
      // inputPlaceholder: 'Ingrese por favor el motivo ...',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Si, borrarlo!',
      cancelButtonText: 'Cancelar'})
    //   inputValidator: (value) => {
    //     console.log(value.trim().length);
    //     return new Promise((resolve) => {
    //       if (value.trim().length !== 0 && !(value.trim().length < 10)) {
    //         resolve();
    //       } else {
    //         if (value.trim().length === 0) {
    //           resolve('El motivo es obligatoria :)');
    //         } else if (value.trim().length < 10) {
    //           resolve('La observación debe contener al menos 10 caractares :)');
    //         }
    //       }
    //     });
    //   },
    // })
      .then((result) => {
        if (result.isConfirmed) {
          this.delete(editarialId, indexOfElement)
        } else if (result.isDismissed) {
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  private confirmar(){
    Swal.fire({
      title: '!Borrar archivo!',
      text: '¡El registro ha sido eliminado!',
      icon: 'success',
      confirmButtonText: 'Ok',
    });
  }
}
