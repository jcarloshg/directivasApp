import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  colorError: string = "green";
  myform: FormGroup = this.formBuilder.group({
    nombre: ['', Validators.required],
  })

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void { }


  haveErr(fieldName: string): boolean {
    return this.myform.get(fieldName)?.invalid || false;
  }

}
