import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiserviceService } from 'src/app/services/apiservice.service';
import { StorageService } from 'src/app/services/storage.service';
import { environment } from 'src/environments/environment';
const { server } = environment;
import Swal from 'sweetalert2';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.scss']
})
export class LibrosComponent implements OnInit {
  public categories: any;
  public isLoading: boolean;
  public urlImage = server;
  public libros: any;
  editorial: any;
  autor: any;
  constructor(
      private api: ApiserviceService,
    // private loading: LoadingService,
    private storage: StorageService,
    private router: Router
  ) { }

  ngOnInit(): void {
      this.api.all('libros').subscribe(libros => {
      this.libros = libros.data;
      console.log(libros.data);
      });      
  }

  goToCategory(category: any): void {
    this.storage.save('__libro', category);
    this.router.navigate(['/admin/parametros/categoria', category.id]);
  }

  setCategory(libros: any): void {
    this.libros = libros;
  }

  delete(id: number, posicion: number): void {
    this.api.delete(`libros/${id}`).subscribe(() => {
      this.libros.map(item => {
        
        if (item.id === id) {
          this.confirmar();
          this.libros.splice(posicion,1)
        }
      });
    });
  }

  goToLibro(libro: any): void {
      this.storage.save('__libros', libro);
      this.router.navigate(['/librosnew', libro.id]);
    }

  anular(libroId: any, indexOfElement: number) {
    
    Swal.fire({
      title: '¿Estas seguro?',
      html: `¡Esto eliminará el registro con id <strong>#${libroId}</strong>!`,
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
          this.delete(libroId, indexOfElement)
        } else if (result.isDismissed) {
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  private confirmar(){
    Swal.fire({
      title: '!Borrar registro!',
      text: '¡El registro ha sido eliminado!',
      icon: 'success',
      confirmButtonText: 'Ok',
    });
  }

}
