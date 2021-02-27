import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiserviceService } from 'src/app/services/apiservice.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-forms-libros',
  templateUrl: './forms-libros.component.html',
  styleUrls: ['./forms-libros.component.scss']
})
export class FormsLibrosComponent implements OnInit {

  public form : FormGroup
  public btnName = "Guardar"
public validationFormMessage = {
	Titulo: [
			{
				type: 'required',
				message: 'Este nombre es obligatorio',
			},
		],
    Agno: [
			{
				type: 'required',
				message: 'Este campo es obligatorio',
			},
		],
    Genero: [
			{
				type: 'required',
				message: 'Este campo es obligatorio',
			},
		],
    NumPaginas: [
			{
				type: 'required',
				message: 'Este campo es obligatorio',
			},
		],
    idEditorial: [
			{
				type: 'required',
				message: 'Este campo es obligatorio',
			}
		],
    idAutor: [
			{
				type: 'required',
				message: 'Este campo es obligatorio',
			}
		],
}
	title: string;
	id: number;
	autor: any;
	autores: any;
	editoriales: any;
  constructor(private formBuilder: FormBuilder,private httpService: ApiserviceService, private api: ApiserviceService,
	          private route: ActivatedRoute,private storage: StorageService,private router: Router) {
    this.form = this.formBuilder.group({
        Titulo: ['', [Validators.required]],
        Agno: ['', [Validators.required]],
        Genero: ['', [Validators.required]],
        NumPaginas: ['', [Validators.required, Validators.min(1)]],
        idEditorial: ['', [Validators.required]],
        idAutor: ['', [Validators.required]],
    })  

	this.title = 'Nuevo libro';
    const id = this.route.snapshot.paramMap.get('id');	
    if (id) {		
      this.title = 'Modificar Libro';
	  this.btnName = "Actualizar"
      this.id = Number(id);
      const local = this.storage.read('__libros');
      console.log(local);
      
      const { titulo, agno, genero, numPaginas, idEditorial, idAutor } = local
      this.form.patchValue({Titulo:  titulo, Agno: agno, Genero: genero, NumPaginas: numPaginas, idEditorial, idAutor });
    }
   }

  ngOnInit(): void {
	  this.api.all('autor').subscribe(autores => {
      this.autores = autores.data;
      console.log(autores.data);
      });      
	  this.api.all('editorial').subscribe(editoriales => {
      this.editoriales = editoriales.data;
      console.log(editoriales.data);
      });      
  }

  goToCategory(category: any): void {
    this.storage.save('__autor', category);
    this.router.navigate(['/admin/parametros/categoria', category.id]);
	this.storage.save('__editorial', category);
    this.router.navigate(['/admin/parametros/categoria', category.id]);
  }

  /*setCategory(autores: any): void {
    this.autores = autores;	
  }*/

  
  saveForm(){
    console.log(this.form.value)
    if(!this.form.valid){
        console.log(`Error de validación`)
        this.form.markAllAsTouched()
        return
    }
    
	if (this.id) {
		const object = {
			id: this.id,
			...this.form.value
		}
		this.httpService.update(`libros`, object).subscribe(resp => {
			this.router.navigate(['/libros']);
		})
      } else {
        this.httpService.create('libros', this.form.value).subscribe(resp => {
			alert(`Registro exitoso!!!`)
		})
      }
    
  	}

    Cancelar(){

    }

    /**
	 * Metodo q valida los campos de los formularios
	 * @param field = campo a validar
	 * @param validationType tipo de validacion a mostrar mensaje de error
	 * @returns devuelve boolean
	 */
	isValid(field: string, validationType: string) {
		const f = this.form.get(field)
		return f.hasError(validationType) && (f.dirty || f.touched)
	}

}
