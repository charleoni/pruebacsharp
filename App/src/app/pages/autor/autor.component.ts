import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiserviceService } from 'src/app/services/apiservice.service';
import { StorageService } from 'src/app/services/storage.service';

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
          this.autores.splice(posicion,1)
        }
      });
    });
  }

  goToAutor(autor: any): void {
      this.storage.save('__autor', autor);
      this.router.navigate(['/autornew', autor.idAutor]);
    }

}
