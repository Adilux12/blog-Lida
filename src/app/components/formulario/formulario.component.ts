import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PostService } from 'src/app/services/post.service';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  formulario: FormGroup
  constructor(
    private postService: PostService,
    private router: Router
  ) {
    this.formulario = new FormGroup({
      titulo: new FormControl(null, [
        Validators.required,
        Validators.minLength(4)
      ]),
      texto: new FormControl(null, [
        Validators.required
      ]),
      autor: new FormControl(null, [
        Validators.required
      ]),
      imagen: new FormControl(null, [
        Validators.required,
        Validators.pattern('(http(s?):)([/|.|\\w|\\s|-])*\\.(?:jpg|gif|png)')
      ]),
      fecha: new FormControl(null, [
        Validators.required
      ]),
      categoria: new FormControl(null, [
        Validators.required
      ])
    })
  }

  onSubmit() {
    console.log(this.formulario.value)
    this.postService.create(this.formulario.value);
    this.router.navigate(['/posts'])
  }
  checkError(control: string, validator: string) {
    return this.formulario.get(control)?.hasError(validator) && this.formulario.get(control)?.touched;
  }
}
