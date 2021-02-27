import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiserviceService } from 'src/app/services/apiservice.service';
import { StorageService } from 'src/app/services/storage.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-autor',
  templateUrl: './autor.component.html',
  styleUrls: ['./autor.component.scss']
})
export class AutorComponent implements OnInit {

  public autores: any;

  constructor(
    private api: ApiserviceService,
    // private loading: LoadingService,
    private storage: StorageService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.api.all('autor').subscribe(autores =>{
      this.autores = autores.data;
      console.log(autores.data)
    })
  }

    goToCategory(category: any): void {
    this.storage.save('__autor', category);
    this.router.navigate(['/admin/parametros/categoria', category.id]);
  }

  setCategory(autores: any): void {
    this.autores = autores;
  }

  delete(id: number, posicion: number): void {
    this.api.delete(`autor/${id}`).subscribe(() => {
      this.autores.map(item => {        
        if (item.idAutor === id) {
          this.confirmar();
          this.autores.splice(posicion,1)
        }
      });
    });
  }

  goToAutor(autor: any): void {
      this.storage.save('__autor', autor);
      this.router.navigate(['/autornew', autor.idAutor]);
    }

  anular(autorId: any, indexOfElement: number) {
    
    Swal.fire({
      title: '¿Estas seguro?',
      html: `¡Esto eliminará el registro con id <strong>#${autorId}</strong>!`,
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
          this.delete(autorId, indexOfElement)
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
