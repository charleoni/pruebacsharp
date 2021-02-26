import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiserviceService } from 'src/app/services/apiservice.service';
import { StorageService } from 'src/app/services/storage.service';
import { environment } from 'src/environments/environment';
const { server } = environment;

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
          this.libros.splice(posicion,1)
        }
      });
    });
  }

  goToLibro(libro: any): void {
      this.storage.save('__libros', libro);
      this.router.navigate(['/librosnew', libro.id]);
    }
}
