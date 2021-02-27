import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiserviceService } from 'src/app/services/apiservice.service';
import { StorageService } from 'src/app/services/storage.service';


@Component({
  selector: 'app-editorial-forms',
  templateUrl: './editorial-forms.component.html',
  styleUrls: ['./editorial-forms.component.scss']
})
export class EditorialFormsComponent implements OnInit {

  public form : FormGroup
  public btnName = "Guardar"
public validationFormMessage = {
	nombreEditorial: [
			{
				type: 'required',
				message: 'Este nombre es obligatorio',
			},
		],
    Direccion: [
			{
				type: 'required',
				message: 'Este campo es obligatorio',
			},
		],
    Telefono: [
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
    MaxLibrosRegistrados: [
			{
				type: 'required',
				message: 'Este campo es obligatorio',
			},
			{
				type: 'min',
				message: 'Cantidad minima es -1',
			},
		],
}
	title: string;
	id: number;
  constructor(private formBuilder: FormBuilder,private httpService: ApiserviceService, private route: ActivatedRoute,private storage: StorageService,private router: Router) {
    this.form = this.formBuilder.group({
        nombreEditorial: ['', [Validators.required]],
        Direccion: ['', [Validators.required]],
        Telefono: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        MaxLibrosRegistrados: ['', [Validators.required, Validators.min(-1)]],
    })

	this.title = 'Nueva Editorial';
    const id = this.route.snapshot.paramMap.get('id');	
    if (id) {		
      this.title = 'Modificar Editorial';
	  this.btnName = "Actualizar"
      this.id = Number(id);
      const { nombreEditorial, direccion, telefono, email, maxLibrosRegistrados } = this.storage.read('__editorial');
      this.form.patchValue({ nombreEditorial, Direccion:direccion, Telefono: telefono, email, MaxLibrosRegistrados:maxLibrosRegistrados });
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
		this.httpService.update(`editorial`, object).subscribe(resp => {
			this.router.navigate(['/editorial']);
		})
      } else {
        this.httpService.create('editorial', this.form.value).subscribe(resp => {
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
