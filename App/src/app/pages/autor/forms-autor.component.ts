import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiserviceService } from 'src/app/services/apiservice.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-forms-autor',
  templateUrl: './forms-autor.component.html',
  styleUrls: ['./forms-autor.component.scss']
})
export class FormsAutorComponent implements OnInit {

  public form : FormGroup
  public btnName = "Guardar"
  public validationFormMessage = {
	nombreAutor: [
			{
				type: 'required',
				message: 'Este nombre es obligatorio',
			},
		],
    Ciudad: [
			{
				type: 'required',
				message: 'Este campo es obligatorio',
			},
		],
    email: [
			{
				type: 'required',
				message: 'Este campo es obligatorio',
			},
		],
    FechaNace: [
			{
				type: 'required',
				message: 'Este campo es obligatorio',
			},
		]
}
	title: string;
	id: number;
  
   constructor(private formBuilder: FormBuilder,private httpService: ApiserviceService, private route: ActivatedRoute,private storage: StorageService,private router: Router) {
    this.form = this.formBuilder.group({
        nombreAutor: ['', [Validators.required]],
        Ciudad: ['', [Validators.required]],        
        email: ['', [Validators.required, Validators.email]],
        FechaNace: ['', [Validators.required]],
    })
    
    this.title = 'Nuevo Autor';
    const id = this.route.snapshot.paramMap.get('id');	
    if (id) {		
      this.title = 'Modificar Autor';
	  this.btnName = "Actualizar"
      this.id = Number(id);
      const { nombreAutor, ciudad, email, fechaNace } = this.storage.read('__autor');
      this.form.patchValue({ nombreAutor, Ciudad:ciudad, email, FechaNace:fechaNace });
    }
   }

  ngOnInit(): void {
  }

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
		this.httpService.update(`autor`, object).subscribe(resp => {
			this.router.navigate(['/autor']);
		})
      } else {
        this.httpService.create('autor', this.form.value).subscribe(resp => {
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
